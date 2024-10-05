import localFont from "next/font/local";
import "./globals.css";

// Default metadata for the entire site
export const metadata = {
  title: "Jewellery Store",
  description: "Explore the finest jewellery online",
  keywords: "jewellery, diamonds, rings, necklaces",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
        {children}
      </body>
    </html>
  );
}
