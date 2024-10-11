import React from 'react';
import { Icon } from '@iconify/react';

const Index = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <div className="text-center bg-white text-black p-8 rounded-lg shadow-lg">
        <img
          src="https://placekitten.com/200/200" // Replace with your actual photo URL
          alt="Profile"
          className="mx-auto rounded-full w-32 h-32 object-cover mb-4"
        />
        <h1 className="text-2xl font-bold mb-2">John Doe</h1>
        <p className="text-xl mb-6">Web Developer & Designer</p>
        <div className="w-full h-px bg-gray-300 my-4"></div>
        <div className="flex justify-center space-x-6">
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
            <Icon icon="mdi:linkedin" width="32" height="32" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-sky-500 hover:text-sky-700">
            <Icon icon="devicon:twitter" width="10`" height="10" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:text-pink-800">
            <Icon icon="mdi:instagram" width="32" height="32" />
          </a>
          <a href="mailto:johndoe@example.com" className="text-red-500 hover:text-red-700">
            <Icon icon="mdi:email" width="32" height="32" />
          </a>
          <a href="https://johndoe.com" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-800">
            <Icon icon="mdi:web" width="32" height="32" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Index;
