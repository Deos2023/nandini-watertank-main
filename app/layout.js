import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";



// Using Inter as a reliable fallback font
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: "Nandini Water Tank Cleaner",
  description: "Professional water tank cleaning and maintenance services in Kolkata. Serving North 24 Parganas for over 10 years.",
  keywords: "water tank cleaning, Kolkata, home cleaning, pest control, society cleaning",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <body className="antialiased bg-white text-gray-900 font-sans">
        <div className="min-h-screen flex flex-col">
          <Navbar/>
          <main className="flex-grow">
            {children}
          </main>
          <Footer/>
        </div>
      </body>
    </html>
  );
}