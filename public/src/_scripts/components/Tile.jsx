import React from 'react';
import '../App.css'

export default function Tile(props) {
  const url = props.url;
  const image = props.image;
  const name = props.name;

  return (

      <a href={url}>
        <figure className='h-[100px] w-fit p-2 flex flex-row flex-wrap jusity-center' >
          <img src={image} alt="Project Preview" className="w-full h-full" />
          <figcaption className='w-full bg-[#293D49]'>{name} </figcaption>
        </figure>
      </a>

  );
}