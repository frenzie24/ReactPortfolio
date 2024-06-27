import React from 'react';

export default function Contact() {
  const email = 'kevincharlesgross@gmail.com';
  const githubUsername = 'frenzie24';

  return (
    <section className="flex flex-col items-center justify-centerpt-4 text-white">
      <div className="w-full max-w-xs">
        <div className="shadow-md rounded px-8 pt-6 pb-8 mb-4 ">

            <label className="block text-sm text-center font-bold mb-2">Let's Get in Touch!</label>
            <p className="leading-tight font-medium">Charles Gross</p>


            <label className="block text-sm font-bold mb-2">Email: <a href={`mailto:${email}`} className="mb-3 leading-tight text-blue-500 hover:underline">
              {email}
            </a></label>

            <label className="block text-sm font-bold mb-2">GitHub
            <a
              href={`https://github.com/${githubUsername}`}
              className="mb-3 leading-tight text-blue-500 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              {githubUsername}
            </a></label>
          <div className="mb-6">
            <label className="block text-sm font-bold mb-2">
              Availability

            <span className="text-green-700 mb-3 leading-tight">Available for work!</span> </label>
          </div>
        </div>
      </div>
    </section>
  );
}
