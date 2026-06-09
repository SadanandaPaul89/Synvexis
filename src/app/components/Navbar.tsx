"use client";

import React, { useState } from 'react';
import Image from 'next/image';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav>
      <a href="#hero" className="nav-logo">
        Synvexis<span>.</span>
      </a>
      <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
        <li><a href="#about" onClick={closeMenu}>About</a></li>
        <li><a href="#services" onClick={closeMenu}>Services</a></li>
        <li><a href="#projects" onClick={closeMenu}>Projects</a></li>
        <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
      </ul>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <Image 
          src="/Group 68.svg" 
          alt="Synvexis Digital Logo" 
          width={56} 
          height={42} 
          className="nav-brand-logo" 
        />
        <button 
          className={`menu-toggle ${isOpen ? 'active' : ''}`} 
          id="menuToggle" 
          aria-label="Toggle Menu"
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
};
