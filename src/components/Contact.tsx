import React, { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import SectionTitle from './ui/SectionTitle';
import Button from './ui/Button';

interface FormData {
  name: string;
  email: string;
  phone: string;
  eventType: string;
  message: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div id="contact" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title="Contact Us"
          subtitle="Let's make your event magical together"
        />

        <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <div className="space-y-8">
              <div className="flex items-center">
                <Phone className="h-6 w-6 text-pink-500" />
                <span className="ml-4 text-gray-600">(555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-6 w-6 text-pink-500" />
                <span className="ml-4 text-gray-600">info@magicalballoons.com</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-6 w-6 text-pink-500" />
                <span className="ml-4 text-gray-600">123 Party Street, Celebration City, ST 12345</span>
              </div>
            </div>

            <div className="mt-12">
              <img
                className="rounded-lg shadow-lg"
                src="https://images.unsplash.com/photo-1533294160622-d5fece3e080d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                alt="Colorful balloon arrangement"
              />
            </div>
          </div>

          <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-lg p-8">
            <div className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="eventType" className="block text-sm font-medium text-gray-700">Event Type</label>
                <select
                  name="eventType"
                  id="eventType"
                  value={formData.eventType}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500"
                  required
                >
                  <option value="">Select an event type</option>
                  <option value="birthday">Birthday</option>
                  <option value="wedding">Wedding</option>
                  <option value="babyShower">Baby Shower</option>
                  <option value="corporate">Corporate Event</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                <textarea
                  name="message"
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500"
                  required
                ></textarea>
              </div>

              <Button type="submit" className="w-full">
                Send Message
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}