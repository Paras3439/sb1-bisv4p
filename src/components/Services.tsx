import React from 'react';
import { services } from '../constants/services';
import SectionTitle from './ui/SectionTitle';

export default function Services() {
  return (
    <div id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title="Our Services"
          subtitle="We offer a wide range of balloon decoration services for all occasions"
        />

        <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <div key={index} className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <service.icon className="h-12 w-12 text-pink-500" />
              <h3 className="mt-4 text-xl font-medium text-gray-900">{service.title}</h3>
              <p className="mt-2 text-center text-gray-500">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}