// src/components/Canvas.js
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import '../style.css';
const Canvas = ({ draw, height, width, handleClick }) => {
  const [Width, setWidth] = useState(width);
  const canvas = React.useRef();

  React.useEffect(() => {
    const context = canvas.current.getContext('2d');
    draw(context);
  },[]);

  useEffect(()=>{

  }, [Width])
  return (
    <canvas ref={canvas} id="canvas" onClick={handleClick} height={height ? height : '250px'} width={Width} />
  );
};
Canvas.propTypes = {
  draw: PropTypes.func.isRequired,
  height: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
};
export default Canvas;