import { Link } from 'react-router-dom';
import React from 'react';

function Navbar() {
    return (
    <nav className="bg-purple-600 text-white p-4 shadow-md">
      <div className="max-w-4xl mx-auto flex gap-6">
        <Link to="/" className="hover:text-yellow-300">Home</Link>
        <Link to="/about" className="hover:text-yellow-300">About</Link>
        <Link to="/contact" className="hover:text-yellow-300">Contact</Link>
      </div>
    </nav>
  );
}

export default Navbar;