import React from 'react';
import { PartyPopper } from 'lucide-react';

export default function Hero() {
  return (
    <div id="home" className="pt-16 bg-gradient-to-r from-pink-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <PartyPopper className="h-16 w-16 text-pink-500 mx-auto mb-6" />
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block">Transform Your Events With</span>
            <span className="block text-pink-500">Magical Balloon Decorations</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Create unforgettable memories with our stunning balloon arrangements for birthdays, weddings, baby showers, and all special occasions.
          </p>
          <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
            <div className="rounded-md shadow">
              <a href="#contact" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-pink-500 hover:bg-pink-600 md:py-4 md:text-lg md:px-10">
                Book Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}