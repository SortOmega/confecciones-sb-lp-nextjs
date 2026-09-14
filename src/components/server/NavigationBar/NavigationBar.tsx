"use client";

import './style.scss';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export function NavigationBar() {
const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const main = document.querySelector('main');

    if (!main) return;

    const handleScroll = () => {
      setIsScrolled(main.scrollTop > 0);
    };

    handleScroll();
    main.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      main.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`navigation-bar text-xs md:text-base lg:text-xl border-b-2 ${!isScrolled ? 'border-transparent' : ''} ${isScrolled ? 'crystalScrolled backdrop-blur-xs box-shadow border-b-[#87878733]' : ''}`}>
      <ul>
        <li>
          <a href="#hero-section">Home</a>
        </li>
        <li>
          <a href="#value-proposition-section">Servicios</a>
        </li>
        {/* <li>
          <a href="/services">Services</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li> */}
      </ul>
    </nav>
  );
}
