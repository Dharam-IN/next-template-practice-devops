import HeroSection from "@/components/Home/HeroSection";

// Home page specific metadata
export const metadata = {
  title: "Home - Jewellery eCommerce", 
  description: "Discover the best jewellery online, including diamonds, rings, and more.",
  keywords: "jewellery, diamonds, rings, necklaces",
};

export default function Home() {
  return (
    <>
      <HeroSection/>
    </>
  );
}
