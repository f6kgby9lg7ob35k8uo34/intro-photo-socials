import React from 'react';
import { Icon } from '@iconify/react';

const Index = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <div className="text-center">
        <img
          src="https://placekitten.com/200/200" // Replace with your actual photo URL
          alt="Profile"
          className="mx-auto rounded-full w-32 h-32 object-cover mb-4"
        />
        <h1 className="text-2xl font-bold mb-2">John Doe</h1>
        <p className="text-xl mb-6">Web Developer & Designer</p>
        <div className="flex justify-center space-x-4">
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400">
            <Icon icon="mdi:linkedin" width="24" height="24" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400">
            <Icon icon="mdi:twitter" width="24" height="24" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-pink-400">
            <Icon icon="mdi:instagram" width="24" height="24" />
          </a>
          <a href="mailto:johndoe@example.com" className="text-white hover:text-green-400">
            <Icon icon="mdi:email" width="24" height="24" />
          </a>
          <a href="https://johndoe.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-yellow-400">
            <Icon icon="mdi:web" width="24" height="24" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Index;