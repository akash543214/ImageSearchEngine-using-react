import React, { useState } from 'react'
import { useImages } from '../contexts'
function SearchBar() {

  let [searchVal,setSearchval] = useState("")
 
  let {resetImages} = useImages()

    const updateKeyword = ()=>{

      if(searchVal==="") return

          resetImages(searchVal)
          setSearchval("")
    }
  return (
    <>
      <form className="flex">
          <input
              type="text"
              placeholder="Search Image..."
              className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
              value={searchVal}
              onChange={(e) => setSearchval(e.target.value)}
              
          />
          <button type="button" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0" onClick={updateKeyword}>
              Go
          </button>
        
      </form>
    
      </>
  );
}

export default SearchBar;