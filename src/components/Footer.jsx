import React from 'react';
import '../App.css'
import NavBar from './NavBar';

export default function Footer() {
    const path = './src/assets/images/resume.PNG'

    // return a footer tag fixed to bottom with children centered with x padding of 1 ( [&_*]: selects all child elemetns of the tag )
    return (
        <footer className="w-screen md:text-l sm:text-sm fixed bottom-0 left-0 flex flex-row flex-wrap justify-center py-4 [&_*]:px-1 fadeInAnimation">

            <section className='bg-black/90 backdrop-blur-sm border-2 border-gray-600 flex flex-row flex-wrap justify-center  items-center rounded-md p-2 '>
                <NavBar />
                    <a className='p-1 ' href="https://www.linkedin.com/in/charles-gross-392136100/" rel="nofollow noreferrer">
                        <img className="h-[20px]" src="./src/assets/images/LI-Logo.png" alt="linkedin" />
                    </a>
                    <a className="p-1 " href="https://github.com/frenzie24" rel="nofollow noreferrer">
                        <img className="h-[20px]  mr-4" src="./src/assets/images/github-mark-white.png" alt="github" />
                    </a>

            </section>

        </footer>
    );
}
