import React, { useState } from 'react'

function ImageBox({img})
{

  return (
  
    <div className="w-81 h-80 relative overflow-hidden bg-gray-300 rounded-md">
    <img
      src= {img}
      alt="Laptop"
      className="w-full h-full object-cover"
    />
  </div>
  );
}

export default ImageBox;
