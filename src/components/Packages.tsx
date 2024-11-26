import React from 'react';
import { packages } from '../constants/packages';
import SectionTitle from './ui/SectionTitle';
import Button from './ui/Button';

export default function Packages() {
  return (
    <div id="packages" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title="Our Packages"
          subtitle="Choose the perfect package for your special occasion"
        />

        <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {packages.map((pkg, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="px-6 py-8">
                <h3 className="text-2xl font-bold text-center text-gray-900">{pkg.name}</h3>
                <div className="mt-4 text-center">
                  <span className="text-4xl font-extrabold text-pink-500">{pkg.price}</span>
                </div>
                <ul className="mt-6 space-y-4">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <svg className="h-5 w-5 text-pink-500" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="ml-3 text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <a href="#contact">
                    <Button className="w-full">Book Now</Button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}