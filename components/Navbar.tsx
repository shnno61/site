'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import { NAV_LINKS } from '@/constants';
import Button from './Button';

export default function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="flex items-center justify-between max-w-screen-xl mx-auto p-4 lg:p-6 bg-white text-gray-800 shadow-md relative z-30 font-sans">
      {/* Logo */}
      <Link href="/" className="flex items-center">
        <Image 
          src="/hilink-logo.svg" 
          alt="logo" 
          width={74} 
          height={29} 
          priority // Ensure the logo loads quickly
        />
      </Link>

      {/* Navigation Links */}
      <ul className="hidden lg:flex items-center gap-8">
        {NAV_LINKS.map((link) => (
          <li key={link.key} className="relative">
            <Link
              href={link.href}
              className={clsx(
                'flex items-center gap-2 rounded-md p-3 text-sm font-medium transition-colors duration-300 hover:bg-blue-100 hover:text-blue-600',
                {
                  'bg-blue-100 text-blue-600': pathname === link.href,
                }
              )}
            >
              <span className="hidden md:block">{link.label}</span>
            </Link>
          </li>
        ))}
      </ul>

      {/* Mobile Menu Button */}
      <button
        className="lg:hidden flex items-center p-2 rounded-md hover:bg-gray-100 transition-colors duration-300"
        onClick={toggleMobileMenu}
      >
        <Image 
          src="/menu.svg" 
          alt="menu" 
          width={32} 
          height={32} 
          priority // Ensure the menu icon loads quickly
        />
      </button>

      {/* Mobile Menu */}
      <div className={clsx("fixed top-0 right-0 h-1/2 w-1/3 bg-white shadow-lg rounded-l-xl lg:hidden transition-transform duration-300 transform-gpu", {
        'translate-x-full': !isMobileMenuOpen,
        'translate-x-0': isMobileMenuOpen,
      })}>
        <div className="flex flex-col items-center p-4">
          <button
            className="self-end mb-4 p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors duration-300"
            onClick={toggleMobileMenu}
          >
            <Image 
              src="/close.svg" 
              alt="close menu" 
              width={24} 
              height={24} 
              priority // Ensure the close icon loads quickly
            />
          </button>
          <ul className="flex flex-col items-center gap-4 w-full">
            {NAV_LINKS.map((link) => (
              <li key={link.key} className="w-full">
                <Link
                  href={link.href}
                  className={clsx(
                    'block w-full text-center p-3 text-sm font-medium text-gray-700 transition-colors duration-300 hover:bg-blue-100 hover:text-blue-600',
                    {
                      'bg-blue-100 text-blue-600': pathname === link.href,
                    }
                  )}
                  onClick={() => setMobileMenuOpen(false)} // Close the menu when a link is clicked
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
