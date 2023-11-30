import {createContext, useContext} from "react"

export const ImageContext = createContext({
    Images: [],
    resetImages: () => {},
    updateImages: () => {},
    page: 1,
    keyword: ""
})

export const useImages = () => {
    return useContext(ImageContext)
}

export const ImageProvider = ImageContext.Provider