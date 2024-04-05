'use client'
import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  return (
    <div className="fixed top-0 left-0 w-full bg-nav-gray text-white z-10">
      <nav className="flex justify-between items-center p-4 mx-auto max-w-7xl">
        {/* Hamburger menu */}
        <div className="flex items-center space-x-4">
          <button onClick={toggleMenu} className="lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white hover:text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
          {/* React Navigation */}
          <div className="lg:hidden text-xl font-bold cursor-pointer">React Navigation</div>
          {/* Left side elements */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link href="/">
              <div className="text-xl font-bold cursor-pointer">React Navigation</div>
            </Link>
            <Link href="https://reactnavigation.org/docs/getting-started">
              <div className="text-sm hover:text-gray-300">Docs</div>
            </Link>
            <Link href="https://reactnavigation.org/blog">
              <div className="text-sm hover:text-gray-300">Blogs</div>
            </Link>
            <Link href="https://reactnavigation.org/help">
              <div className="text-sm hover:text-gray-300">Help</div>
            </Link>
            <div className="relative">
              <button onClick={toggleDropdown} className="border-b-2 border-transparent hover:border-white">
                6.x
              </button>
              {isDropdownOpen && (
                <div className="absolute top-full mt-1 right-0 w-48 bg-nav-gray rounded-lg shadow-lg z-10">
                  <ul className="py-1">
                    <li>
                      <Link href="https://reactnavigation.org/docs/7.x/getting-started">
                        <div className="block px-4 py-2 text-gray-300 hover:bg-gray-700 text-sm">7.x</div>
                      </Link>
                    </li>
                    <li>
                      <Link href="https://reactnavigation.org/docs/6.x/getting-started">
                        <div className="block px-4 py-2 text-gray-300 hover:bg-gray-700 text-sm">6.x</div>
                      </Link>
                      {/* Add other versions as needed */}
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
        
        {/* Right side elements */}
        <div className="flex items-center space-x-4">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hidden lg:block border border-gray-300 px-4 py-2 rounded-md hover:bg-gray-700 hover:text-white text-sm">GitHub</a>
          <div className="relative">
            <div className="md:flex">
              {isSearchOpen && (
                <input type="text" placeholder="Search..." className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500 text-sm" />
              )}
              {!isSearchOpen && (
                <button onClick={toggleSearch} className="px-3 py-2 bg-transparent border-transparent text-white hover:text-gray-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M13.732 12.312l4.145 4.145-1.414 1.414-4.145-4.145A7.5 7.5 0 1113.732 12.312zM6.5 13A6.5 6.5 0 1113 6.5c0 .903-.183 1.768-.514 2.568a.5.5 0 00.857.514A7.48 7.48 0 0113 6.5C13 3.463 10.537 1 7.5 1S2 3.463 2 6.5 4.463 12 7.5 12a.5.5 0 100-1A6.5 6.5 0 016.5 13z" clipRule="evenodd" />
                  </svg>
                </button>
              )}
            </div>
          </div>
        </div>
      </nav>
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-nav-gray py-4">
          <div className="text-sm text-white hover:text-gray-300 px-4 py-2" onClick={toggleDropdown}>6.x</div>
          <Link href="https://reactnavigation.org/docs/getting-started">
            <div className="text-sm text-white hover:text-gray-300 px-4 py-2">Docs</div>
          </Link>
          <Link href="https://reactnavigation.org/blog">
            <div className="text-sm text-white hover:text-gray-300 px-4 py-2">Blogs</div>
          </Link>
          <Link href="https://reactnavigation.org/help">
            <div className="text-sm text-white hover:text-gray-300 px-4 py-2">Help</div>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;