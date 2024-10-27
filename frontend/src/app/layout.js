import "./globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../public/css/custom.css'
import Header from "../components/layouts/Header";
import Footer from "../components/layouts/Footer";
import AddBootstrap from "./AddBootstrap";
import LoadMenuScript from "../components/LoadMenuScript";


// Default metadata for the entire site
export const metadata = {
  title: "Jewellery Store",
  description: "Explore the finest jewellery online",
  keywords: "jewellery, diamonds, rings, necklaces",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header/>
        <AddBootstrap/>
        <LoadMenuScript/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
