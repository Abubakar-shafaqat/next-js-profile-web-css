"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import './header.css';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev);
  };

  if (!isMounted) return null;

  return (
    <header className="header">
      <div className="header-content">
        <Image
          src="/logo.jpg"
          alt="Logo"
          width={150}
          height={150}
          className="logo"
        />
        <h1 className="title">𝓜𝓨  𝓟𝓞𝓡𝓣𝓕𝓞𝓛𝓘𝓞</h1>
        <button onClick={toggleMenu} className="menu-toggle" aria-label="Toggle menu">
          <svg
            className="menu-icon"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
            />
          </svg>
        </button>
      </div>

      {isMenuOpen && (
        <div className="mobile-menu">
           <ul className="menu-list">
            <li><Link href="/" className="menu-item">Home</Link></li>
            <li><Link href="/skill" className="menu-item">Skills</Link></li>
            <li><Link href="/project" className="menu-item">Projects</Link></li>
            <li><Link href="/contact" className="menu-item">Contact</Link></li>
            </ul>
        </div>
      )}

      <nav className="desktop-nav">
        <Link href="/" className="nav-item">Home</Link>
        <Link href="/skill" className="nav-item">Skills</Link>
        <Link href="/project" className="nav-item">Projects</Link>
        <Link href="/contact" className="nav-item">Contact</Link>
      </nav>
    </header>
  );
}
