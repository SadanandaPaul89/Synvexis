"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import styles from './Navbar.module.css';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <nav className={`${styles.nav} glass-panel`}>
        <div className={styles.logo}>
          <Image 
            src="/Group 68.svg" 
            alt="Synvexis Logo" 
            width={32} 
            height={24} 
            className={styles.logoIcon}
          />
          <span>SYNVEXIS<span className="accent-text"> DIGITAL</span></span>
        </div>
        
        {/* Desktop Menu */}
        <div className={styles.navLinks}>
          <a href="#about">About</a>
          <a href="#projects">Work</a>
          <a href="#contact" className={styles.contactBtn}>Contact Us</a>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button 
          className={styles.menuToggle} 
          onClick={toggleMenu} 
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`${styles.mobileOverlay} ${isOpen ? styles.active : ''}`}>
        <div className={styles.mobileLinks}>
          <a href="#about" onClick={closeMenu} className={styles.mobileLink}>About</a>
          <a href="#projects" onClick={closeMenu} className={styles.mobileLink}>Work</a>
          <a href="#contact" onClick={closeMenu} className={`${styles.mobileLink} ${styles.mobileContactBtn}`}>Contact Us</a>
        </div>
      </div>
    </>
  );
};
