import React from 'react';

export default function Header() {
  return (
    <header className="bg-slate-800 text-white p-4">
      <h1 className="text-xl font-bold mb-2">My Portfolio</h1>
      <nav>
        <ul className="flex space-x-4">
          <li><a href="#peon" className="hover:text-blue-500">PeonComponent</a></li>
          <li><a href="#about" className="hover:text-blue-500">About Me</a></li>
          <li><a href="#portfolio" className="hover:text-blue-500">Portfolio</a></li>
          <li><a href="#contact" className="hover:text-blue-500">Contact</a></li>
          <li><a href="#resume" className="hover:text-blue-500">Resume</a></li>
        </ul>
      </nav>
    </header>
  );
}