import React from 'react';
import gsap from 'gsap';
import { ScrollTrigger, SplitText } from 'gsap/all';
import Navbar from './components/navbar.jsx';
import Hero from './components/hero.jsx';
import './index.css';
import Cocktails from './components/cocktails.jsx';
import About from './components/about.jsx';
import Menu from './components/Menu.jsx';
import Contact from './components/contact.jsx';
import Art from './components/art.jsx';
import Footer from './components/footer.jsx';

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <Cocktails />
      <About />
      <Art />
      <Menu />
      <Contact />
      <Footer />
    </main>
  );
};

export default App;
