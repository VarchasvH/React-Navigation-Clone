'use client'
import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  return (
    <nav className="flex justify-between items-center bg-nav-gray text-white p-4">
      {/* Left side elements */}
      <div className="flex items-center space-x-4">
        <Link href="/">
          <div className="text-xl font-bold">React Navigation</div>
        </Link>
        <Link href="https://reactnavigation.org/docs/getting-started">
          Docs
        </Link>
        <Link href="https://reactnavigation.org/blog">
          Blogs
        </Link>
        <Link href="https://reactnavigation.org/help">
          Help
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
                    <div className="block px-4 py-2 text-gray-300 hover:bg-gray-700 text-sm">
                      7.x
                    </div>
                  </Link>
                </li>
                <li>
                  <Link href="https://reactnavigation.org/docs/6.x/getting-started">
                    <div className="block px-4 py-2 text-gray-300 hover:bg-gray-700 text-sm">
                      6.x
                    </div>
                  </Link>
                </li>
                <li>
                  <Link href="https://reactnavigation.org/docs/5.x/getting-started/">
                    <div className="block px-4 py-2 text-gray-300 hover:bg-gray-700">
                      5.x
                    </div>
                  </Link>
                </li>
                <li>
                  <Link href="https://reactnavigation.org/docs/4.x/getting-started/">
                    <div className="block px-4 py-2 text-gray-300 hover:bg-gray-700">
                      4.x
                    </div>
                  </Link>
                </li>
                <li>
                  <Link href="https://reactnavigation.org/docs/3.x/getting-started/">
                    <div className="block px-4 py-2 text-gray-300 hover:bg-gray-700">
                      3.x
                    </div>
                  </Link>
                </li>
                <li>
                  <Link href="https://reactnavigation.org/docs/2.x/getting-started/">
                    <div className="block px-4 py-2 text-gray-300 hover:bg-gray-700">
                      2.x
                    </div>
                  </Link>
                </li>
                <li>
                  <Link href="https://reactnavigation.org/docs/1.x/getting-started/">
                    <div className="block px-4 py-2 text-gray-300 hover:bg-gray-700">
                      1.x
                    </div>
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>

      <div className="flex items-center space-x-4">
        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="border border-gray-300 px-4 py-2 rounded-md hover:bg-gray-700 hover:text-white">GitHub</a>
        <div className="relative">
          <input type="text" placeholder="Search..." className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
