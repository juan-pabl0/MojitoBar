import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-black border-t border-white/10 py-3 md:py-3.5 px-6 relative z-20">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-2.5 text-xs text-white/50">
        <p className="text-[11px] md:text-xs">
          © {currentYear} Mojito Bar. Todos los derechos reservados ®
        </p>

        <div className="flex items-center gap-2 text-[11px] md:text-xs text-white/60">
          <span className="tracking-wide">Powered By alghoritmica®</span>
          <img
            src="/images/catsgateway.svg"
            alt="alghoritmica logo"
            className="size-5 object-contain inline-block"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;

