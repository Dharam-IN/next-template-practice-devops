import Image from "next/image";
import styles from "./page.module.css";

// Home page specific metadata
export const metadata = {
  title: "Home - Jewellery eCommerce", 
  description: "Discover the best jewellery online, including diamonds, rings, and more.",
  keywords: "jewellery, diamonds, rings, necklaces",
};

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Image
          className={styles.logo}
          src="https://nextjs.org/icons/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <ol>
          <li>Get started by editing <code>src/app/page.js</code>.</li>
          <li>Save and see your changes instantly.</li>
        </ol>
      </main>
    </div>
  );
}
