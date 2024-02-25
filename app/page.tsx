import Contact from './sections/Contact';
import Footer from './sections/Footer';
import Hero from './sections/Hero';
import Offer from './sections/Offer';
import Parallax from './sections/Parallax';
import Technologies from './sections/Technologies';

export default function Home() {
  return (
    <>
        <Hero />
        <Offer />
        <Technologies />
        <Parallax />
        <Contact />
    </>
  )
}
