import { openingHours, socials, storeInfo } from '../../constants/index.js';
import { useGSAP } from '@gsap/react';
import { SplitText } from 'gsap/all';
import gsap from 'gsap';

const Contact = () => {
  useGSAP(() => {
    const titleSplit = SplitText.create('#contact h2', { type: 'words' });

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: '#contact',
        start: 'top center',
      },
      ease: 'power1.inOut',
    });

    timeline
      .from(titleSplit.words, {
        opacity: 0,
        yPercent: 100,
        stagger: 0.02,
      })
      .from('#contact h3, #contact p, .map-container', {
        opacity: 0,
        yPercent: 50,
        stagger: 0.02,
      })
      .to('#f-right-leaf', {
        y: '-50',
        duration: 1,
        ease: 'power1.inOut',
      })
      .fromTo(
        '#f-left-leaf',
        { y: 40 },
        {
          y: 0,
          duration: 1,
          ease: 'power1.inOut',
        },
        '<'
      );
  });

  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(storeInfo.address)}`;
  const mapsEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent(storeInfo.address)}&output=embed`;

  return (
    <footer id="contact">
      <img src="/images/footer-right-leaf.png" alt="leaf-right" id="f-right-leaf" />
      <img src="/images/footer-left-leaf.png" alt="leaf-left" id="f-left-leaf" />

      <div className="content">
        <h2>{storeInfo.heading}</h2>

        <div>
          <h3>Visita nuestro espacio</h3>
          <p>{storeInfo.address}</p>

          <a
            href={mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-2 text-sm md:text-base text-yellow no-underline hover:text-white transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-5"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
            </svg>
            Ver en Google Maps
          </a>

          <div className="map-container relative w-full max-w-2xl mx-auto h-64 md:h-72 rounded-3xl overflow-hidden border border-white/15 shadow-2xl mt-5">
            <iframe
              title="Google Maps Location"
              src={mapsEmbedUrl}
              className="w-full h-full border-0"
              style={{ filter: 'invert(90%) hue-rotate(180deg) contrast(1.2)' }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        <div>
          <h3>Contacto</h3>
          <p>{storeInfo.contact.phone}</p>
          <p>{storeInfo.contact.email}</p>
        </div>

        <div>
          <h3>Abierto cada día</h3>
          {openingHours.map((time) => (
            <p key={time.day}>
              {time.day} : {time.time}
            </p>
          ))}
        </div>

        <div>
          <h3>Redes Sociales</h3>

          <div className="flex-center gap-5">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
              >
                <img src={social.icon} alt={social.name} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact