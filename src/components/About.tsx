import React from 'react';

export default function About() {
  return (
    <div id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              About Magical Balloons
            </h2>
            <p className="mt-3 max-w-3xl text-lg text-gray-500">
              With over 5 years of experience in creating magical balloon decorations, we've brought joy and wonder to countless celebrations. Our passion for creativity and attention to detail ensures that every event is uniquely beautiful and memorable.
            </p>
            <div className="mt-8 space-y-4">
              <div className="flex items-center">
                <svg className="h-5 w-5 text-pink-500" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M5 13l4 4L19 7"></path>
                </svg>
                <span className="ml-3 text-gray-600">Professional and experienced team</span>
              </div>
              <div className="flex items-center">
                <svg className="h-5 w-5 text-pink-500" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M5 13l4 4L19 7"></path>
                </svg>
                <span className="ml-3 text-gray-600">High-quality, durable materials</span>
              </div>
              <div className="flex items-center">
                <svg className="h-5 w-5 text-pink-500" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M5 13l4 4L19 7"></path>
                </svg>
                <span className="ml-3 text-gray-600">Customized designs for every occasion</span>
              </div>
            </div>
          </div>
          <div className="mt-10 lg:mt-0">
            <img
              className="rounded-lg shadow-lg"
              src="https://images.unsplash.com/photo-1530103862676-de8c9debad1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              alt="Balloon decoration team at work"
            />
          </div>
        </div>
      </div>
    </div>
  );
}