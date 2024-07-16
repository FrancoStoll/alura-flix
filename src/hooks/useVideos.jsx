import { useContext } from "react"
import VideosContext from "../context/VideosContext"



export const useVideos = () => {

    return useContext(VideosContext);

}