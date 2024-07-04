// src/components/AuthorSiteCard.js

import Link from 'next/link';
import { createSlug } from '../utils/utils';

export default function AuthorSiteCard({ site }) {
  return (
    <Link href={`/${createSlug(site.authorName)}`} className="block p-4 border rounded-lg hover:shadow-lg transition">
      <img
        src={site.siteImage}
        alt={site.authorName}
        className="w-full h-48 object-cover object-top rounded-t-lg"
      />
      <div className="p-4">
        <h2 className="text-2xl font-bold">{site.authorName}</h2>
        <p className="text-gray-600">{site.genre}</p>
      </div>
    </Link>
  );
}
