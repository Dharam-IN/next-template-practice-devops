import BestSeller from "@/components/Home/best-seller";
import CategorySection from "@/components/Home/category-section";
import HeroSection from "@/components/Home/HeroSection/HeroSection";
import NewCollection from "@/components/Home/new-collection";
import HomePopularStyle from "@/components/Home/popular-style";
import ProductSection from "@/components/Home/product-list";

export const metadata = {
  title: "Home - Jewellery eCommerce", 
  description: "Discover the best jewellery online, including diamonds, rings, and more.",
  keywords: "jewellery, diamonds, rings, necklaces",
};

export default function Home() {
  return (
    <>
      <HeroSection/>
      <CategorySection/>
      <HomePopularStyle/>
      <ProductSection/>
      <NewCollection/>
      <BestSeller/>
    </>
  );
}
