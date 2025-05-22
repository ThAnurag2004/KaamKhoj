import React from 'react';
import { FaTwitter, FaInstagram, FaFacebookF, FaDiscord } from 'react-icons/fa';

const SocialMediaCard = () => {
  return (
    <div className="max-w-xs mx-auto p-6 rounded-2xl shadow-lg dark:text-white transition duration-300">
      <h1 className='text-2xl md:text-3xl font-bold mb-6'>Follow Us</h1>
      <div className="flex flex-row gap-3 justify-center items-baseline space-y-6 text-3xl">
        <a
          href="https://twitter.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400 transition-colors duration-200"
        >
          <FaTwitter />
        </a>
        <a
          href="https://instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-pink-500 transition-colors duration-200"
        >
          <FaInstagram />
        </a>
        <a
          href="https://facebook.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-600 transition-colors duration-200"
        >
          <FaFacebookF />
        </a>
        <a
          href="https://discord.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-indigo-500 transition-colors duration-200"
        >
          <FaDiscord />
        </a>
      </div>
    </div>
  );
};

export default SocialMediaCard;
