'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import DetailHeader from '../components/DetailHeader';
import { createSlug } from '../utils/utils';

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
          <img src={site.siteImage} alt={site.authorName} className="w-full h-auto object-cover rounded-lg mb-4" />
        </div>
        <div className="lg:col-span-1 flex flex-col gap-4">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h1 className="text-3xl font-bold mb-2">{site.authorName}</h1>
            <p className="text-xl mb-2">Genre: {site.genre}</p>
            <a href={site.siteUrl} className="text-blue-500 underline" target="_blank" rel="noopener noreferrer">
              Visit Website
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
