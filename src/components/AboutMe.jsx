import React from 'react';

export default function About() {
    return (
        <section className="flex flex-row items-center justify-center text-white rounded-md max-w-[900px]">
            <div className="w-full min-w-xs ">
                <div className="bg-[#293D49] shadow-md px-8 pt-6 pb-8 mb-4 w-full">
                    <h2 className="text-2xl font-bold mb-4">About Me</h2>
                    <p className="mb-4">
                        Hi, I'm Charles Gross, a full-stack developer with 2-3 years of experience. I specialize in React, JavaScript, CSS, and HTML5 Canvas and I have a passion for creating intuitive and dynamic user experiences.
                    </p>
                    <p className="mb-4">
                        I've worked on projects related to website, native application, and game design and devlopment. I'm currently strongest with Tailwind CSS, Node.js, PostgreSQL, React.js, and HTML5.
                    </p>
                    <p className="mb-4">I'm a computer scientest at heart.  Let's find out what <i>can't</i> be dones <b>can</b> be togther. </p>
                    <p className="mb-4">Please check out my series of <a href="https://gist.github.com/frenzie24/47ab836b7347cb192df59d715357aebf">Github gists</a>. I am currenting documenting my process of writing a Node.js app to parse a full spritesheet file and create 2nd animation frame data generically.  I have some pretty interesting algorithms to solve!</p>
                    <p className="mb-4">
                        I'm currently looking for remote roles where I can continue to grow and contribute. In my spare time, I am enjoying writing a 2d RTS engine for HTML5 canvas.
                    </p>
                </div>
            </div>
        </section>
    );
}