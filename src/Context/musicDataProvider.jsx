import { musicData } from "./musicData";
import { Arjit } from "./Arjit";
import { songs } from "./songs";
import { useState, useEffect, useRef } from "react";
export const MusicDataProvider = ({ children }) => {
    const [musicD, setMusicD] = useState([])
    const [search, setSer] = useState("")
    const savedSongs = JSON.parse(localStorage.getItem("songs")) || [];
    const savedCurrentSong = JSON.parse(localStorage.getItem("currentSong")) || null;
    const [song, setSong] = useState(savedSongs);
    const [currentSong, setCurrentSong] = useState(savedCurrentSong);
    const [playlist, setPlaylist] = useState([])
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
    const [followers, setFollow] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const [curMusic, setCur] = useState(songs[0].audio || "");
    const [curImg, setImg] = useState(songs[0].cover || "")
    const [curTit, setTit] = useState(songs[0].title || "")
    const [curArt, setArt] = useState(songs[0].artist || "")
    const [videoRef, setRef] = useState("")
    const [play, setPlay] = useState("")
    const [userName, setName] = useState("")
    const [pass, setPass] = useState("")
    const [name, setNam] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [imgUrl, setIm] = useState("")


    const [userData, setUserData] = useState(() => {
        try {
            const data = JSON.parse(localStorage.getItem("userData"));
            return Array.isArray(data) ? data : [];
        } catch (err) {
            return [];
        }
    });



    useEffect(() => {
        localStorage.setItem("userData", JSON.stringify(userData));
    }, [userData])

    const addUser = () => {
        const newUser = { name, email, password, imgUrl }
        setUserData([...userData, newUser])
    }
    const [logStatus, setStatus] = useState(() => {
        const status = localStorage.getItem("loginStatus")
        return status ? JSON.parse(status) : false
    });

    useEffect(() => {
        localStorage.setItem("loginStatus", logStatus)
    }, [logStatus])

    const [logData, setLogData] = useState(() => {
        const data = JSON.parse(localStorage.getItem("logData"));
        return data ? data : [];
    })

    useEffect(() => {
        localStorage.setItem("logData", JSON.stringify(logData))
    }, [logData])

    const addLogData = (data) => {
        setLogData([data]);
    }

    // Subscription 

    const [isSubscribed, setIsSubscribed] = useState(() => {
        return JSON.parse(localStorage.getItem("isSubscribed")) || false;
    });
    
    useEffect(() => {
        localStorage.setItem("isSubscribed", JSON.stringify(isSubscribed));
    }, [isSubscribed]);
    
    return (
        <musicData.Provider value={{ isSubscribed, setIsSubscribed,imgUrl, setIm, logData, setLogData, addLogData, setEmail, setNam, setPassword, name, email, password, userData, setUserData, userName, setName, pass, setPass, logStatus, setStatus, addUser, playlist, setPlaylist, deletSong, isPlaying, setIsPlaying, play, setPlay, setRef, videoRef, musicD, setMusicD, songs, curMusic, setCur, curImg, setImg, curTit, setTit, setArt, curArt, followers, setFollow, Arjit, song, addSong, currentSong, setCurrentSong, search, setSer }}>
            {children}
        </musicData.Provider>
    );
};
