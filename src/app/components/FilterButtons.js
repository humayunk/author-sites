import React from 'react';

export default function FilterButtons({ genres, selectedGenre, onGenreChange }) {
  return (
    <div className="flex justify-center space-x-4 pb-4">
      <button
        className={`px-6 py-2 rounded-full font-sans border-1 ${
          selectedGenre === 'All' ? 'bg-cyan-500 text-white border-cyan-500' : 'bg-transparent text-gray-700 border-gray-300'
        }`}
        onClick={() => onGenreChange('All')}
      >
        All
      </button>
      {genres.map((genre) => (
        <button
          key={genre}
          className={`px-4 py-2 rounded-full font-sans border-2 ${
            selectedGenre === genre ? 'bg-cyan-500 text-white border-cyan-500' : 'bg-transparent text-stone-700 border-stone-200'
          }`}
          onClick={() => onGenreChange(genre)}
        >
          {genre}
        </button>
      ))}
    </div>
  );
}
