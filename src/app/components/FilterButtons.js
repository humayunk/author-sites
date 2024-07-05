import React from 'react';

export default function FilterButtons({ genres, selectedGenre, onGenreChange }) {
  const buttonClasses = "px-6 py-2 rounded-full font-sans border-2 text-xs flex items-center justify-center";

  return (
    <div className="flex flex-wrap justify-center gap-2 pb-4">
      <button
        className={`${buttonClasses} ${
          selectedGenre === 'All' ? 'bg-cyan-500 text-white border-cyan-500' : 'bg-transparent text-stone-700 border-stone-200'
        }`}
        style={{ height: '44px', lineHeight: '1.5', marginBottom: '0' }}
        onClick={() => onGenreChange('All')}
      >
        All
      </button>
      {genres.map((genre) => (
        <button
          key={genre}
          className={`${buttonClasses} ${
            selectedGenre === genre ? 'bg-cyan-500 text-white border-cyan-500' : 'bg-transparent text-stone-700 border-stone-200'
          }`}
          style={{ height: '44px', lineHeight: '1.5', marginBottom: '0' }}
          onClick={() => onGenreChange(genre)}
        >
          {genre}
        </button>
      ))}
    </div>
  );
}
