import React from 'react';

export default function About() {
    return (
        <section className="w-screen flex flex-row items-center justify-center text-white rounded-md ">
            <div className="w-full min-w-xs max-w-[800px] sm:w-fit sm:w-fit">
                <div className="bg-[#262626]/80 rounded-lg backdrop-blur-sm shadow-md px-8 pt-6 pb-8  w-full">
                    <h2 className="text-2xl font-bold mb-4">About Me</h2>
                    <p className="mb-4">
                        Hi, I'm Charles Gross, a full-stack developer with 3 years of experience. I specialize in React, JavaScript, CSS, and HTML5 Canvas and I have a passion for creating intuitive and dynamic user experiences.
                    </p>
                    <p className="mb-4">
                        I've worked on projects related to website, native application, and game design and devlopment. I'm currently strongest with Tailwind CSS, Node.js, PostgreSQL, React.js, and HTML5.
                    </p>

                   <p className="mb-4">
                        I'm currently looking for remote roles where I can continue to grow and contribute. In my spare time, I am enjoying writing a 2d RTS engine for HTML5 canvas.
                    </p>
                </div>
            </div>
        </section>
    );
}