import { HomeHero } from "@/components/sections/HomeHero";
import { HeritageAnchor } from "@/components/sections/HeritageAnchor";
import { ServicesScroll } from "@/components/sections/ServicesScroll";
import { HeritageScrapbook } from "@/components/sections/HeritageScrapbook";
import { PhilosophyQuote } from "@/components/sections/PhilosophyQuote";
import { ClosingCinematic } from "@/components/sections/ClosingCinematic";

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <HeritageAnchor />
      <ServicesScroll />
      <HeritageScrapbook />
      <PhilosophyQuote />
      <ClosingCinematic />
    </>
  );
}
