import {useEffect, useState} from "react"
import { useImages } from '../contexts/ImageContext';

function usefetchImages(){
    //const [data, setData] = useState([])
    const {page} = useImages()
    const {keyword} = useImages()
   
    const accessKey = "7HfEtMlZLq0eU3aHpItPRdhdhklMNgsc7efa1vDP74U"
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`

    fetch(url)
    .then((res) => res.json())
    .then((res) =>{
      //setData(res.results)
       //console.log(res.results)
       return res.results
    })

   
}

export default usefetchImages;