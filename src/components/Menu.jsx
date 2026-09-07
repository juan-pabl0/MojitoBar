import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import React, { useRef } from 'react';
import { sliderLists } from '../../constants/index.js';
const Menu = () => {

  const [currentIndex, setCurrentIndex] = React.useState(0);
  const totalSlides = sliderLists.length;

  const goToSlide = (index) => {
    const newIndex = (index + totalSlides) % totalSlides;
    setCurrentIndex(newIndex);
  };

  const prevCocktail = sliderLists[(currentIndex - 1 + totalSlides) % totalSlides];
  const nextCocktail = sliderLists[(currentIndex + 1) % totalSlides];
  const currentCocktail = sliderLists[currentIndex];

  const contentRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo('#title', { opacity: 0 }, { opacity: 1, duration: 1 });
    gsap.fromTo('.cocktail img', { opacity: 0, xPercent: -100 }, { opacity: 1, xPercent: 0, duration: 1, ease: 'power1.inOut' });
    gsap.fromTo('.details h2', { opacity: 0, yPercent: 100 }, { opacity: 1, yPercent: 0, duration: 1, ease: 'power1.inOut' });
    gsap.fromTo('.details p', { opacity: 0, yPercent: 100 }, { opacity: 1, yPercent: 0, duration: 1, ease: 'power1.inOut' });
  }, { dependencies: [currentIndex], scope: contentRef });

  return (
    <section id="menu" aria-label="menu-heading">
      <img src="/images/slider-left-leaf.png" alt="Slider Left" id="m-left-leaf" />
      <img src="/images/slider-right-leaf.png" alt="Slider Right" id="m-right-leaf" />
      <h2 id="menu-heading" className="sr-only">Cocktail Menu</h2>

      <nav className="cocktail-tabs" aria-label="cocktail Navigation">
        {sliderLists.map((cocktail, index) => {
          const isActive = index === currentIndex;
          return (
            <button
              key={cocktail.id}
              className={isActive ? 'text-white border-white' : 'text-white/50 border-white/50'}
              onClick={() => setCurrentIndex(index)}
            >
              {cocktail.name}
            </button>
          );
        })}
      </nav>

      <div ref={contentRef} className="content">
        <div className="arrows">
          <button
            className="text-left"
            onClick={() => goToSlide(currentIndex - 1)}
          >
            <span>{prevCocktail.name}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-10 inline-block"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
              />
            </svg>
          </button>

          <button
            className="text-right"
            onClick={() => goToSlide(currentIndex + 1)}
          >
            <span>{nextCocktail.name}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-10 inline-block"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
              />
            </svg>
          </button>
        </div>

        <div className="cocktail">
          <img src={currentCocktail.image} alt={currentCocktail.name} />
        </div>
        <div className="recipe">
          <div className="info">
            <p>Receta para</p>
            <p id="title">{currentCocktail.name}</p>
          </div>

          <div className="details">
            <h2>{currentCocktail.title}</h2>
            <p>{currentCocktail.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;