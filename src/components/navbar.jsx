import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { navLinks } from '../../constants/index.js';
import GradientText from './GradientText.jsx';

const Navbar = () => {
  useGSAP(() => {
    const navTween = gsap.timeline({
      scrollTrigger: {
        trigger: 'nav',
        start: 'bottom top',
      },
    });

    navTween.fromTo(
      'nav',
      { backgroundColor: 'transparent' },
      {
        backgroundColor: '#00000050',
        backdropFilter: 'blur(10px)',
        duration: 1,
        ease: 'power1.inOut',
      },
    );
  });

  return (
    <nav>
      <div>
        <a href="#home" className="flex items-center gap-2">
          {/* <img src="/images/logo.png" alt="logo" /> */}
          <p>
            <GradientText colors={['#e7d393', '#ffffff', '#74d99f', '#e7d393']} animationSpeed={6}>
              MENTA
            </GradientText>
          </p>
        </a>
        <ul>
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className="relative py-1 transition-colors duration-300 after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
