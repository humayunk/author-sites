'use client';

export default function Header() {
  return (
    <header className="container p-4">
      <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
        <div className="flex items-center lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5 flex items-center">
            <span className="sr-only">Your Company</span>
            <img alt="Your Company Logo" src="images/logo.png" className="h-8 w-auto mr-3" />
            <span className="text-xl font-semibold text-stone-700">Author Websites</span>
          </a>
        </div>
      </nav>
    </header>
  );
}
