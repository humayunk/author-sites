// /components/FilterButtons.js
import React from 'react';

export default function FilterButtons({ genres, selectedGenre, onGenreChange }) {
  return (
    <div className="flex space-x-4">
      <button
        className={`px-4 py-2 rounded ${selectedGenre === 'All' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
        onClick={() => onGenreChange('All')}
      >
        All
      </button>
      {genres.map((genre) => (
        <button
          key={genre}
          className={`px-4 py-2 rounded ${selectedGenre === genre ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          onClick={() => onGenreChange(genre)}
        >
          {genre}
        </button>
      ))}
    </div>
  );
}
