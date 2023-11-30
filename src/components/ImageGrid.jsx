import React, { useState } from 'react'
import ImageBox from './ImageBox';
import { useImages } from '../contexts';
function ImageGrid() {

  let {Images} = useImages()
  const {updateImages}  = useImages()


  return (
    <>
    <div className="container mx-auto p-4">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4">
   
    { Images.map((item) => <ImageBox key = {item.id} img = {item.urls.small} /> )}

    </div>
    <div className="grid place-content-center">

    <button type="button" className={`mt-4 rounded-md bg-green-600 px-3 py-2 text-sm font-semibold
     text-white shadow-sm hover:bg-green-600/80 focus-visible:outline focus-visible:outline-2 
     focus-visible:outline-offset-2 focus-visible:outline-green-600 ${Images.length===0?"invisible":""}`}

      onClick={()=>{
        updateImages()
      }}>
        Load more
      </button>
      </div>
  </div>

  </>
  );
}

export default ImageGrid;
