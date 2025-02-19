import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white text-center p-4 mt-6">
      <div className="flex justify-center space-x-4">
        <a href="https://instagram.com/yourpage" target="_blank" rel="noopener noreferrer">
          <img src="/instagram-icon.png" alt="Instagram" className="w-6 h-6 inline" />
        </a>
        <a href="mailto:your-email@example.com">
          <img src="/email-icon.png" alt="Email" className="w-6 h-6 inline" />
        </a>
      </div>

      <p className="text-sm mt-2">&copy; {new Date().getFullYear()} Your Website. All rights reserved.</p>

      <a href="#" className="text-blue-400 hover:underline text-sm mt-2">
        Privacy Policy
      </a>
    </footer>
  );
};

export default Footer;
