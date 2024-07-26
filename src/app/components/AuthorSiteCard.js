import Link from 'next/link';
import { EyeIcon } from '@heroicons/react/24/solid';

export default function AuthorSiteCard({ site }) {
  if (!site) return null;

  return (
    <div className="relative group">
      <Link href={`/${site.slug}`} className="block rounded-lg overflow-hidden border border-stone-200 hover:shadow-lg transition">
        <div className="relative">
          <img
            src={site.siteImage || '/placeholder-image.jpg'}
            alt={site.authorName || 'Author'}
            className="w-full h-64 object-cover object-top"
          />
          <div className="absolute inset-0 bg-stone-600 bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300"></div>
          <div className="absolute bottom-4 right-4 bg-rose-800 rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <EyeIcon className="w-6 h-6 text-white" />
          </div>
        </div>
      </Link>
      <h2 className="text-xl font-bold font-serif mt-4">{site.authorName || 'Unknown Author'}</h2>
    </div>
  );
}
