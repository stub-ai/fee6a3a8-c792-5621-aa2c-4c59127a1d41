import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-blue-500 p-6 flex justify-between items-center text-white">
      <h1 className="font-bold text-2xl">Malikal Rizky</h1>
      <nav>
        <ul className="flex space-x-4">
          <li><Link href="#about">About</Link></li>
          <li><Link href="#portfolio">Portfolio</Link></li>
          <li><Link href="#contact">Contact</Link></li>
          <li><Link href="/login">Login</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;