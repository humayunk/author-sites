'use client';

import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import Header from '../components/Header';
import HeaderSection from '../components/HeaderSection';
import AuthorSiteCard from '../components/AuthorSiteCard';
import FilterButtons from '../components/FilterButtons';
import Footer from '../components/Footer';

export default function Gallery() {
  const [websites, setWebsites] = useState([]);
  const [filteredWebsites, setFilteredWebsites] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState('All');
  const [genres, setGenres] = useState([]);
  const [visibleWebsites, setVisibleWebsites] = useState(6); // Number of items to load initially
  const { ref, inView } = useInView({
    threshold: 0.1,
  });

  useEffect(() => {
    fetch('/data/websites.json')
      .then((response) => response.json())
      .then((data) => {
        setWebsites(data);
        setFilteredWebsites(data);
        const uniqueGenres = Array.from(new Set(data.map((site) => site.genre)));
        setGenres(uniqueGenres);
      });
  }, []);

  useEffect(() => {
    if (selectedGenre === 'All') {
      setFilteredWebsites(websites);
    } else {
      setFilteredWebsites(websites.filter((site) => site.genre === selectedGenre));
    }
    setVisibleWebsites(10); // Reset the visible items count when the genre changes
  }, [selectedGenre, websites]);

  useEffect(() => {
    if (inView) {
      setVisibleWebsites((prevVisibleWebsites) => prevVisibleWebsites + 6);
    }
  }, [inView]);

  const handleGenreChange = (genre) => {
    setSelectedGenre(genre);
  };

  return (
    <>
      <Header />
      <HeaderSection />
      <div className="container mx-auto p-4">
        <FilterButtons genres={genres} selectedGenre={selectedGenre} onGenreChange={handleGenreChange} />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-4">
          {filteredWebsites.slice(0, visibleWebsites).map((site) => (
            <AuthorSiteCard key={site.id} site={site} />
          ))}
        </div>
        {/* Observer div */}
        <div ref={ref} className="h-1"></div>
      </div>
      <Footer />
    </>
  );
}
