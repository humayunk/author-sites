'use client';

import { useRouter } from 'next/navigation';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';

export default function DetailHeader() {
  const router = useRouter();

  return (
    <div className="container">
      <header className="bg-white">
        <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
          <div className="flex items-center lg:flex-1">
            <button
              type="button"
              onClick={() => router.push('/gallery')}
              className="text-gray-700 mr-4 lg:ml-8"
            >
              <ArrowLeftIcon aria-hidden="true" className="h-6 w-6" />
            </button>
            <p className="text-gray-700">Back to gallery</p>
          </div>
        </nav>
      </header>
    </div>
  );
}
