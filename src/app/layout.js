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
      </head>
      <body className="bg-customBg">
        {children}
      </body>
    </html>
  );
}
