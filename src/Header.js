import React, { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-green-600 text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        <h1 className="text-xl font-bold">Recipe Hub</h1>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6">
          <a href="#" className="hover:underline">Home</a>
          <a href="#" className="hover:underline">About Us</a>
          <a href="#" className="hover:underline">Contact Us</a>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden focus:outline-none" onClick={() => setIsOpen(!isOpen)}>
          ☰
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <nav className="md:hidden bg-green-700 p-2 space-y-2">
          <a href="#" className="block text-white p-2 hover:bg-green-800 rounded">Home</a>
          <a href="#" className="block text-white p-2 hover:bg-green-800 rounded">About Us</a>
          <a href="#" className="block text-white p-2 hover:bg-green-800 rounded">Contact Us</a>
        </nav>
      )}
    </header>
  );
};

export default Header;
