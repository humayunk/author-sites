import React, { useState, useEffect } from 'react';
import { XMarkIcon } from '@heroicons/react/24/solid';

export default function FilterButtons({ genres, selectedGenre, onGenreChange }) {
  const [sortedGenres, setSortedGenres] = useState(genres);

  useEffect(() => {
    if (selectedGenre) {
      const newSortedGenres = [selectedGenre, ...genres.filter(genre => genre !== selectedGenre)];
      setSortedGenres(newSortedGenres);
    } else {
      setSortedGenres(genres);
    }
  }, [selectedGenre, genres]);

  return (
    <div className="relative mb-4">
      <div className="overflow-x-auto pb-4 max-w-full no-scrollbar">
        <div className="flex space-x-2">
          {sortedGenres.map((genre) => (
            <button
              key={genre}
              className={`px-3 py-1 text-xl flex-shrink-0 transition-all duration-300 rounded-full flex items-center
                ${selectedGenre === genre ? 'bg-rose-400 text-white' : 'text-stone-700 hover:bg-rose-100'}`}
              onClick={() => onGenreChange(genre)}
            >
              {genre}
              {selectedGenre === genre && (
                <XMarkIcon className="h-5 w-5 ml-2" />
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
