import {HeroSection} from "./components/pages/home/hero-section"
import { HighlightedProjects } from "./components/pages/home/hero-section/highilighted-projects"
import { KnowTechs } from "./components/pages/known-techs"
export default async function Home() {
  return (
    <>
      <HeroSection />
      <KnowTechs />
      <HighlightedProjects />
    </>
  )
}
