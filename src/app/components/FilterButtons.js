import React from 'react';
import { XMarkIcon } from '@heroicons/react/24/solid';

export default function FilterButtons({ genres, selectedGenre, onGenreChange }) {
  return (
    <div className="flex flex-wrap gap-2 mb-8">
      {genres.map((genre) => (
        <button
          key={genre}
          onClick={() => onGenreChange(genre)}
          className={`px-4 py-2 rounded-full transition-colors text-xl
            ${selectedGenre === genre
              ? 'bg-rose-500 text-white border-rose-500'
              : 'bg-transparent text-stone-800 hover:bg-stone-100'
            }`}
        >
          {selectedGenre === genre && (
            <XMarkIcon className="inline-block w-4 h-4 mr-2" />
          )}
          {genre}
        </button>
      ))}
    </div>
  );
}
