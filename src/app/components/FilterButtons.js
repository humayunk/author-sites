import React from 'react';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';

export default function FilterButtons({ genres, selectedGenre, onGenreChange }) {
  return (
    <div className="flex flex-wrap justify-center gap-2 pb-4">
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
          style={{ height: '44px', lineHeight: '1.5', marginBottom: '0' }}
          onClick={() => onGenreChange('All')}
        >
          All
        </button>
        {genres.map((genre) => (
          <button
            key={genre}
            className={`px-6 py-2 rounded-full font-sans border-2 text-xs flex items-center justify-center ${
              selectedGenre === genre ? 'bg-cyan-500 text-white border-cyan-500' : 'bg-transparent text-stone-700 border-stone-200'
            }`}
            style={{ height: '44px', lineHeight: '1.5', marginBottom: '0' }}
            onClick={() => onGenreChange(genre)}
          >
            {genre}
          </button>
        ))}
      </div>
    </div>
  );
}
