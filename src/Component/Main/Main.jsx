import React, { useContext, useEffect, useRef, useState } from "react";
import { musicData } from "../../Context/musicData";

export function Main() {
    const { isPlaying, setIsPlaying, setPlay, setRef, musicD, curImg, curArt, Arjit, songs, setCur, setTit, setImg, setCurArt, curTit, followers, setFollow } = useContext(musicData);
    const [nowId, setId] = useState(""); 
    const video = useRef(null);
    
    useEffect(() => {
        setRef(video);
    }, [setRef, video]);

    useEffect(() => {
        const storedFollowers = localStorage.getItem("followers");
        if (storedFollowers !== null) {
            setFollow(parseInt(storedFollowers, 10) || 0);
        }
    }, []);

    useEffect(() => {
        if (followers !== null) {
            localStorage.setItem("followers", followers);
        }
    }, [followers]);

    const handleSongClick = (song) => {
        if (song) {
            setCur(song.audio || "");
            setTit(song.title || "");
            setImg(song.thumbnail || song.cover);
            setId(song.videoId);
            setIsPlaying(false);
            setPlay("hidden");
        }
    };

    const followIncr = () => setFollow((prev) => (prev !== null ? prev + 1 : 1));
    const removeFollow = () => setFollow((prev) => (prev !== null ? Math.max(prev - 1, 0) : 0));

    useEffect(() => {
        if (nowId && video.current) {
            video.current.src = `https://www.youtube.com/embed/${nowId}?autoplay=1`;
        }
    }, [nowId]);

    return (
        <div className="flex flex-col p-3 gap-2 text-white lg:h-auto min-h-screen">
            <h1 className="text-white text-xl font-semibold text-center">Title :- {curTit || "Select a Song"}</h1>
            <div className="flex flex-col gap-2 lg:gap-10 justify-center items-center">
                <div className="lg:w-50 w-50">
                    <img src={curImg} className="rounded-md lg:w-full lg:h-full" alt={`Cover of ${curTit}`} loading="lazy" />
                </div>
                <div className="flex flex-col">
                    <p className="lg:text-xs text-[20px] text-gray-400">Artist :- {curArt}</p>
                </div>
            </div>

            <div className="flex flex-col w-full mt-5">
                <h1 className="text-xl font-semibold lg:text-left text-left mb-2">Search Songs</h1>
                <div className="flex gap-5 overflow-x-auto p-2 w-full max-w-screen-md lg:max-w-screen mx-auto overflow-hidden scrollbar-hide">
                    {musicD && musicD.length > 0 ? (
                        musicD.map((song, index) => (
                            <div key={index} className="w-40 min-w-[160px] flex-shrink-0 hover:cursor-pointer"
                                onClick={() => handleSongClick(song)}>
                                <img src={song.thumbnail || ""} alt="Song Cover" className="rounded-lg w-full" />
                                <h1 className="text-center mt-2">{song.title || "Unknown Title"}</h1>
                            </div>
                        ))
                    ) : (
                        <p className="text-center">Search Something</p>
                    )}
                </div>
            </div>

            <div className="flex flex-col w-full mt-5">
                <h1 className="text-xl font-semibold lg:text-left text-left mb-2">Popular Songs</h1>
                <div className="flex gap-5 overflow-x-auto p-2 w-full max-w-screen-md lg:max-w-screen mx-auto overflow-hidden scrollbar-hide">
                    {songs && songs.length > 0 ? (
                        songs.map((song, index) => (
                            <div key={index} className="w-40 min-w-[160px] flex-shrink-0 hover:cursor-pointer"
                            onClick={(()=>{
                                handleSongClick(song),
                                setPlay("flex"),
                                setIsPlaying(true)
                            })}>
                                <img src={song.cover || ""} alt="Song Cover" className="rounded-lg w-full" />
                                <h1 className="text-center mt-2">{song.title || "Unknown Title"}</h1>
                            </div>
                        ))
                    ) : (
                        <p className="text-center">No songs available</p>
                    )}
                </div>
            </div>

            <div className="flex flex-col w-full mt-5 mb-25">
                <h1 className="text-xl font-semibold lg:text-left text-left mb-2">Arjit Special</h1>
                <div className="flex gap-5 overflow-x-auto p-2 w-full max-w-screen-md lg:max-w-screen mx-auto overflow-hidden scrollbar-hide">
                    {Arjit && Arjit.length > 0 ? (
                        Arjit.map((song, index) => (
                            <div key={index} className="w-40 min-w-[160px] flex-shrink-0 hover:cursor-pointer"
                                onClick={(()=>{
                                    handleSongClick(song),
                                    setPlay("flex"),
                                    setIsPlaying(true)
                                })}>
                                <img src={song.cover || ""} alt="Song Cover" className="rounded-lg w-full" />
                                <h1 className="text-center mt-2">{song.title || "Unknown Title"}</h1>
                            </div>
                        ))
                    ) : (
                        <p className="text-center">No songs available</p>
                    )}
                </div>
            </div>

            <div className="flex flex-col w-full mt-5 mb-25">
                <h1 className="text-xl font-semibold lg:text-left text-left mb-2">Search Player</h1>
                <iframe
                    className={nowId ? `block ${setIsPlaying(false)}` : "hidden"}
                    width="100%"
                    height="315"
                    src={`https://www.youtube.com/embed/${nowId}?autoplay=1`}
                    title="YouTube video player"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                    ref={video}
                ></iframe>
            </div>

            <style>
                {`::-webkit-scrollbar { display: none; }
                  -ms-overflow-style: none;
                  scrollbar-width: none;`}
            </style>
        </div>
    );
}
