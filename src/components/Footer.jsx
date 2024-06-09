import React from 'react';
import '../App.css'

export default function Footer() {
    const path = './src/assets/images/resume.PNG'

    // return a footer tag fixed to bottom with children centered with x padding of 1 ( [&_*]: selects all child elemetns of the tag )
    return (
        <footer className="fixed inset-x-0 bottom-0 flex flex-row flex-wrap justify-center [&_*]:px-1">
            <a href="https://www.linkedin.com/in/charles-gross-392136100/" rel="nofollow noreferrer">
                <img className="h-[20px] px-0"  src="./src/assets/images/Li-Logo.png" alt="linkedin" />
            </a>
            <a href="https://github.com/frenzie24" rel="nofollow noreferrer">
                <img className="h-[20px] px-0"  src="./src/assets/images/github-mark-white.png" alt="github" />
            </a>
        </footer>
    );
}
