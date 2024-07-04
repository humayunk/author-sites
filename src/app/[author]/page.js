'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import DetailHeader from '../components/DetailHeader';
import { createSlug } from '../utils/utils';
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';
import Footer from '../components/Footer';

export default function Detail() {
  const { author } = useParams();
  const [site, setSite] = useState(null);

  useEffect(() => {
    fetch('/data/websites.json')
      .then(response => response.json())
      .then(data => {
        const siteData = data.find((site) => createSlug(site.authorName) === author);
        setSite(siteData);
      });
  }, [author]);

  if (!site) return <div>Loading...</div>;

  return (
    <>
      <DetailHeader />
      <div className="container mx-auto p-4 grid grid-cols-1 lg:grid-cols-3 gap-8 mt-4">
        <div className="lg:col-span-2">
          <img src={site.siteImage} alt={site.authorName} className="w-full h-auto object-cover rounded-lg mb-4 font-serif" />
        </div>
        <div className="lg:col-span-1 flex flex-col gap-4">
          <div className="bg-white py-8 px-6 rounded-lg shadow-md">
            <h1 className="text-3xl font-bold mb-2 font-serif text-stone-700">{site.authorName}</h1>
            <p className="text-sm mb-2 text-stone-600">{site.genre}</p>
            <p className="text-base mb-6 text-stone-600">{site.bio}</p>
            <a href={site.siteUrl} target="_blank" rel="noopener noreferrer">
              <button
                type="button"
                className="flex items-center justify-center rounded-full bg-cyan-500 px-4 py-3 text-sm font-semibold text-white shadow-sm hover:bg-cyan-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-500 w-full"
              >
                <ArrowTopRightOnSquareIcon className="w-4 h-4 mr-2" />
                Visit Website
              </button>
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
