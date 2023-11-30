import { useState, useEffect } from 'react'
import SearchBar from './components/SearchBar'
import ImageGrid from './components/ImageGrid'
import {ImageProvider} from './contexts'
import Alert from './components/Alert';
function App() {

    let [page,setPage] = useState(1)
    let [Images,setImages] =useState([])
    let [keyword,setKeyword] = useState("")
    let [Msg,setMsg] = useState(false)


  const usefetchImage = ()=>{
    const accessKey = "7HfEtMlZLq0eU3aHpItPRdhdhklMNgsc7efa1vDP74U"

    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`

    
    fetch(url)
    .then((res) => res.json())
    .then((res) =>{
      
      if(res.total===0) 
     {
       setMsg(true)
       setImages([])
       return
      }

      if(page===1) 
      {
        setImages(res.results)
        setMsg(false)
      }
      else
      {
        setImages(prev=>[...prev,...res.results])
        setMsg(false)
      }

    })
  }


    useEffect(() => {

      if(keyword!=="")
      {
        usefetchImage()
       
    }
    }, [keyword,setKeyword,page,setPage])


    const resetImages = (keyword)=>{

      setPage(1)
      setKeyword(keyword)
     
    }


    const  updateImages = ()=>{
      setPage(prev=>prev+1)
    }
  return (

    <ImageProvider value={{Images,resetImages,updateImages,keyword,page}}>
      <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Image Search Engine</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                        <SearchBar />
                        <Alert message = {Msg}/>

                    </div>
                 
                </div>
                <ImageGrid/>
            </div>
            </ImageProvider>
  )

}

export default App
