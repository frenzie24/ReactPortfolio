import React from 'react';

export default function Contact() {
  return (
    <section className="flex flex-col items-center justify-center pt-4  ">
      <div className="w-full max-w-xs">
        <div className="shadow-md rounded px-8 pt-6 pb-8 mb-4 bg-[#293D49]">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Name
            </label>
            <p className="text-gray-700 leading-tight">Charles Gross</p>
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Email
            </label>
            <p className="text-gray-700 mb-3 leading-tight">kevincharlesgross@gmail.com</p>
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              GitHub
            </label>
            <p className="text-gray-700 mb-3 leading-tight">frenzie24</p>
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              LinkedIn
            </label>
            <a href="https://www.linkedin.com/in/charles-gross-392136100/" className="text-blue-500 hover:text-blue-800" target="_blank" rel="noopener noreferrer">Charles Gross on LinkedIn</a>
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Availability
            </label>
            <p className="text-green-700 mb-3 leading-tight">Available for work!</p>
          </div>
        </div>
      </div>
    </section>
  );
}