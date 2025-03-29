import { musicData } from "./musicData";
import { Arjit } from "./Arjit";
import { songs } from "./songs";
import { useState ,useEffect, useRef} from "react";
export const MusicDataProvider = ({ children }) => {
    const [musicD,setMusicD]=useState([])
    const [search,setSer]=useState("")
    const savedSongs = JSON.parse(localStorage.getItem("songs")) || [];
    const savedCurrentSong = JSON.parse(localStorage.getItem("currentSong")) || null;
    const [song, setSong] = useState(savedSongs);
    const [currentSong, setCurrentSong] = useState(savedCurrentSong);
    
    const addSong = (file) => {
        const url = URL.createObjectURL(file);
        const newSong = { name: file.name, url };
        const updatedSongs = [...song, newSong];
        setSong(updatedSongs);
        localStorage.setItem("songs", JSON.stringify(updatedSongs));
    };

    const deletSong = (songToDelete) => {
        const updatedSongs = song.filter((song) => song.url !== songToDelete.url);
        setSong(updatedSongs);
        localStorage.setItem("songs", JSON.stringify(updatedSongs));
    };
    useEffect(() => {
        if (currentSong) {
            localStorage.setItem("currentSong", JSON.stringify(currentSong));
        }
    }, [currentSong]);
    const [followers,setFollow]=useState(0);
    const [isPlaying, setIsPlaying] =useState(false);
    const [curMusic, setCur] = useState(songs[0].audio || "");   
    const [curImg,setImg]=useState(songs[0].cover || "")
    const [curTit,setTit]=useState(songs[0].title || "")
    const [curArt,setArt]=useState(songs[0].artist || "")
    const [videoRef,setRef]=useState("")
    const [play,setPlay]=useState("")
    return (
        <musicData.Provider value={{deletSong,isPlaying, setIsPlaying,play,setPlay,setRef, videoRef, musicD,setMusicD,songs,curMusic,setCur,curImg,setImg,curTit,setTit,setArt,curArt,followers,setFollow ,Arjit,song, addSong, currentSong, setCurrentSong,search,setSer}}>
            {children}
        </musicData.Provider>
    );
};
