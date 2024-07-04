'use client';

import { useState } from 'react';
import { MagnifyingGlassIcon, XMarkIcon } from '@heroicons/react/24/outline';

export default function Header({ onSearchChange }) {
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    onSearchChange(e.target.value);
  };

  return (
    <header className="bg-white">
      <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img alt="Your Company Logo" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" className="h-8 w-auto" />
          </a>
        </div>
        <div className="flex lg:flex-1 lg:justify-end items-center">
          {searchOpen && (
            <input
              type="text"
              className="border p-2 rounded text-gray-700 w-64 sm:w-96 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              placeholder="Search for author or genres"
              value={searchQuery}
              onChange={handleSearchChange}
            />
          )}
          <button
            type="button"
            className="text-gray-700 ml-4"
            onClick={() => setSearchOpen(!searchOpen)}
          >
            {searchOpen ? (
              <XMarkIcon aria-hidden="true" className="h-6 w-6" />
            ) : (
              <MagnifyingGlassIcon aria-hidden="true" className="h-6 w-6" />
            )}
          </button>
        </div>
      </nav>
    </header>
  );
}
