import React, { useState, useEffect } from 'react';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { gsap } from 'gsap';

// Example GIF URLs for each genre
const genreGifs = {
  All: 'https://media.giphy.com/media/N63fPtiPhkBdS/giphy.gif?cid=790b76118b47c0tpmv4gfvufwog8petwctyoxh8m2y2s8eu2&ep=v1_gifs_search&rid=giphy.gif&ct=g',
  Horror: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZWUzYmpsamlqcmx1ejN0bmlrNHJ4eHJmZGYxZWhjNngza3drZXdhYSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/jquDWJfPUMCiI/giphy.gif',
  Fiction: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExaWt3cGlzY2U4anE1b2NxZm9kbG00MzV5MWluMXdzMTNqOTBqbHIyOSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/7Ae2VnmrIfw2s/giphy.gif',
  Fantasy: 'https://media.giphy.com/media/l46Cqj7OWnH7zoUCs/giphy.gif?cid=790b761124ypl5rvmoacumbd4pktoyneoflqulp4wc58hrn4&ep=v1_gifs_search&rid=giphy.gif&ct=g',
  Thriller: 'https://media.giphy.com/media/FjEERN8Cu4i9a/giphy.gif?cid=790b7611s03aoys917n4y3yv9bg0tt9kfokniywclw2hkqi7&ep=v1_gifs_search&rid=giphy.gif&ct=g',
  Romance: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExOHplNHRneWNwcW1qeG41aGMwbTZydGxidmZuejZoa2p0bGVyb2I2YiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/ZnOmhZv0rRbmU/giphy.gif',
  'Legal Thriller': 'https://media.giphy.com/media/xT1R9KMrSUND04vr4k/giphy.gif?cid=790b76115wmus6h67ns9m4ghn9gspqf4rjx2upkoc9qhg5xy&ep=v1_gifs_search&rid=giphy.gif&ct=g',
  Mystery: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExYWhlMjQxZGZuengxeDBncGMwZTVobDRhcGt4YnZxYXFndTJjNXVjNCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/69jvP3VXUYhr3YUYu9/giphy.gif',
  Poetry: 'https://media.giphy.com/media/igrSs5Prw7AEo/giphy.gif?cid=790b7611goew74d3lqny1eapguzppgaz3ht45t9gatzkzn0k&ep=v1_gifs_search&rid=giphy.gif&ct=g',
  'Young Adult': 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZG8yOG95aTd3c2sxZ29uNjFsNmtydjBjNjFhZTRudHY3N3RzdHYyeCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/3o7TKvSVvJ4U4JczDi/giphy.gif',
  'Historical Fiction': 'https://media.giphy.com/media/3K0z4eJQ5QX1cUIY95/giphy.gif?cid=790b7611rl6g0b26vvcnw0q4prmftoa8zmll84pkhg9j8hw2&ep=v1_gifs_search&rid=giphy.gif&ct=g',
  'Non-Fiction': 'https://media.giphy.com/media/xT5LMuLetv1pYsqH0A/giphy.gif?cid=790b7611pjhap0yhxkf37m5obfvrssfycb4vwcorq7ngknpe&ep=v1_gifs_search&rid=giphy.gif&ct=g',
  'Science Fiction': 'https://media.giphy.com/media/acJzv6FuBAixa/giphy.gif?cid=790b76110bebicbpt5om5a9npyy5tyk58nvovk29o3vndqt9&ep=v1_gifs_search&rid=giphy.gif&ct=g'
};

export default function FilterButtons({ genres, selectedGenre, onGenreChange }) {
  const [hoveredGenre, setHoveredGenre] = useState(null);
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleMouseEnter = (e, genre) => {
    if (isDesktop) {
      setHoveredGenre(genre);
      gsap.to(e.currentTarget, { scale: 1.1, duration: 0.3, ease: 'power1.out' });
    }
  };

  const handleMouseLeave = (e) => {
    if (isDesktop) {
      setHoveredGenre(null);
      gsap.to(e.currentTarget, { scale: 1, duration: 0.3, ease: 'power1.out' });
    }
  };

  return (
    <div className="relative flex flex-wrap justify-center gap-2 pb-4">
      <div className="block md:hidden relative inline-block text-left">
        <Menu>
          <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-full bg-cyan-500 px-6 py-2 text-sm font-semibold text-white shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-cyan-600">
            Filters
            <ChevronDownIcon aria-hidden="true" className="-mr-1 h-5 w-5 text-white" />
          </MenuButton>
          <MenuItems className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="py-1">
              <MenuItem>
                {({ active }) => (
                  <a
                    href="#"
                    className={`block px-4 py-2 text-sm ${active ? 'bg-gray-100' : ''} ${selectedGenre === 'All' ? 'bg-cyan-500 text-white' : 'text-gray-700'}`}
                    onClick={() => onGenreChange('All')}
                  >
                    All
                  </a>
                )}
              </MenuItem>
              {genres.map((genre) => (
                <MenuItem key={genre}>
                  {({ active }) => (
                    <a
                      href="#"
                      className={`block px-4 py-2 text-sm ${active ? 'bg-gray-100' : ''} ${selectedGenre === genre ? 'bg-cyan-500 text-white' : 'text-gray-700'}`}
                      onClick={() => onGenreChange(genre)}
                    >
                      {genre}
                    </a>
                  )}
                </MenuItem>
              ))}
            </div>
          </MenuItems>
        </Menu>
      </div>
      <div className="hidden md:flex flex-wrap justify-center gap-2 pb-4">
        <button
          className={`px-6 py-2 rounded-full font-sans border-2 text-xs flex items-center justify-center ${
            selectedGenre === 'All' ? 'bg-cyan-500 text-white border-cyan-500' : 'bg-transparent text-stone-700 border-stone-200'
          }`}
          onClick={() => onGenreChange('All')}
          onMouseEnter={(e) => handleMouseEnter(e, 'All')}
          onMouseLeave={handleMouseLeave}
        >
          All
        </button>
        {genres.map((genre) => (
          <button
            key={genre}
            className={`px-6 py-2 rounded-full font-sans border-2 text-xs flex items-center justify-center ${
              selectedGenre === genre ? 'bg-cyan-500 text-white border-cyan-500' : 'bg-transparent text-stone-700 border-stone-200'
            }`}
            onClick={() => onGenreChange(genre)}
            onMouseEnter={(e) => handleMouseEnter(e, genre)}
            onMouseLeave={handleMouseLeave}
          >
            {genre}
          </button>
        ))}
      </div>
      {isDesktop && hoveredGenre && (
        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center pointer-events-none">
          <img src={genreGifs[hoveredGenre]} alt={`${hoveredGenre} gif`} className="w-64 h-64 object-cover" />
        </div>
      )}
    </div>
  );
}
