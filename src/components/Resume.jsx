import React from 'react';
import "../App.css"
export default function Resume() {
    const path = './src/assets/images/resume.PNG'
    return (
        <>
        <figure className="flex flex-col flex-wrap items-center justify-center ">
        <img src={path} style={{frameborder: '0' }} />
        <figcaption>Pls take a gander at me resume</figcaption>
        </figure>
        </>
    );
}