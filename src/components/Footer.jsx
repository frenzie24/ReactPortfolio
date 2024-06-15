import React from 'react';
import '../App.css'
import NavBar from './NavBar';

export default function Footer() {
    const path = './src/assets/images/resume.PNG'

    // return a footer tag fixed to bottom with children centered with x padding of 1 ( [&_*]: selects all child elemetns of the tag )
    return (
        <footer className="w-screen fixed bottom-0 flex flex-row flex-wrap justify-center [&_*]:h-[20px] [&_*]:px-1">

            <section className=' flex flex-row flex-wrap justify-center [&_*]:h-[20px] [&_*]:px-1'>
                <NavBar />
                <a className='' href="https://www.linkedin.com/in/charles-gross-392136100/" rel="nofollow noreferrer">
                    <img className="" src="./src/assets/images/Li-Logo.png" alt="linkedin" />
                </a>
                <a href="https://github.com/frenzie24" rel="nofollow noreferrer">
                    <img className="" src="./src/assets/images/github-mark-white.png" alt="github" />
                </a>
            </section>

        </footer>
    );
}
