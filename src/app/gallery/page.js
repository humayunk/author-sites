'use client';

import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import Header from '../components/Header';
import HeaderSection from '../components/HeaderSection';
import AuthorSiteCard from '../components/AuthorSiteCard';
import FilterButtons from '../components/FilterButtons';
import Footer from '../components/Footer';
import { fetchAuthors } from '../utils/contentful';

export default function Gallery() {
  const [websites, setWebsites] = useState([]);
  const [filteredWebsites, setFilteredWebsites] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState(null);
  const [genres, setGenres] = useState([]);
  const [visibleWebsites, setVisibleWebsites] = useState(6); // Number of items to load initially
  const { ref, inView } = useInView({
    threshold: 0.1,
  });

  useEffect(() => {
    async function loadAuthors() {
      try {
        const authors = await fetchAuthors();
        console.log('Authors fetched:', authors);
        if (authors.length === 0) {
          console.warn('No authors fetched from Contentful');
        }
        setWebsites(authors);
        setFilteredWebsites(authors);
        const uniqueGenres = Array.from(new Set(authors.map((site) => site.genre))).filter(Boolean);
        console.log('Unique genres:', uniqueGenres);
        setGenres(uniqueGenres);
      } catch (error) {
        console.error('Error loading authors:', error);
      }
    }
    loadAuthors();
  }, []);

  useEffect(() => {
    console.log('Current genres:', genres);
  }, [genres]);

  useEffect(() => {
    if (selectedGenre) {
      setFilteredWebsites(websites.filter((site) => site.genre === selectedGenre));
    } else {
      setFilteredWebsites(websites);
    }
    setVisibleWebsites(10); // Reset the visible items count when the genre changes
  }, [selectedGenre, websites]);

  useEffect(() => {
    if (inView) {
      setVisibleWebsites((prevVisibleWebsites) => prevVisibleWebsites + 6);
    }
  }, [inView]);

  const handleGenreChange = (genre) => {
    setSelectedGenre(prevGenre => prevGenre === genre ? null : genre);
  };

  return (
    <>
      <Header />
      <HeaderSection />
      <div className="container mx-auto p-4">
        <FilterButtons genres={genres} selectedGenre={selectedGenre} onGenreChange={handleGenreChange} />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-4">
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
