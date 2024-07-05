import './globals.css';

export const metadata = {
  title: "Author Website Examples",
  description: "The best author website examples for design inspiration.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Wittgenstein:wght@400&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap" rel="stylesheet" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
        <meta name="theme-color" content="#ffffff" />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Author Website Examples" />
        <meta property="og:description" content="The best author website examples for design inspiration." />
        <meta property="og:image" content="https://authorwebsites.co/preview-image.png" />
        <meta property="og:url" content="https://authorwebsites.co" />
        <meta property="og:type" content="website" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Author Website Examples" />
        <meta name="twitter:description" content="The best author website examples for design inspiration." />
        <meta name="twitter:image" content="https://authorwebsites.co/preview-image.png" />
      </head>
      <body className="bg-customBg">
        {children}
      </body>
    </html>
  );
}
