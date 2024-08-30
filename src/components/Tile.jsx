import React from 'react';
import '../App.css'

export default function Tile(props) {
  const url = props.url;
  const image = props.image;
  const name = props.name;

  return (

      <a href={url} className='h-fit m-2 flex flex-row flex-wrap jusity-center items-center bg-black bg-opacity-50 text-right rounded-lg backdrop-blur-sm m-auto text-white transition ease-in-out duration-100 hover:translate-y-1 hover:scale-[110%] antialiased hover:subpixel-antialiased'>
        <figure >
          <img src={image} alt="Project Preview" className="w-fit " />
          <figcaption className='w-full bg-slate-900 px-2'>{name} </figcaption>
        </figure>
      </a>

  );
}