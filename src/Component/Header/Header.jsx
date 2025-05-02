import React, { useState, useRef, useEffect, useContext } from "react";
import { musicData } from "../../Context/musicData";
import { MainNav } from "../MainNav/MainNav";
import "./Header.css";
import { NavLink } from "react-router";
import LoginPromptCard from "../LoginCard";

export function Header() {
    const { isSubscribed, isPlaying, setIsPlaying, play, setPlay, musicD, Arjit, songs, curMusic, setCur, curArt, curImg, curTit, setTit, setImg, setArt, logStatus } = useContext(musicData);
    // const [] = useState(false);
    const [currentSongIndex, setCurrentSongIndex] = useState(0);
    const [progress, setProgress] = useState(0);
    const audioRef = useRef(null);
    useEffect(() => {
        if (audioRef.current && curMusic) {
            // If the current music is a URL for YouTube
            if (curMusic.includes("youtube.com")) {
                // Set the iframe source to the YouTube video
                audioRef.current.src = `https://www.youtube.com/embed/${curMusic.split("v=")[1]}`;
            } else {
                // Set the audio source for local audio
                audioRef.current.src = curMusic;
            }

            if (isPlaying) {
                audioRef.current.play();
            }
        }
    }, [curMusic, isPlaying]);

    const updateSongDetails = (index) => {
        setCurrentSongIndex(index);
        const selectedSong = songs[index] || Arjit[index];

        setCur(selectedSong?.audio || selectedSong?.videoId);
        setTit(selectedSong?.title || "None");
        setImg(selectedSong?.cover || "None");
        setArt(selectedSong?.artist || "None");
        setIsPlaying(true);
    };

    const togglePlayPause = () => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause();
            } else {
                audioRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    const nextSong = () => {
        const newIndex = (currentSongIndex + 1) % songs.length;
        updateSongDetails(newIndex);
    };

    const prevSong = () => {
        const newIndex = (currentSongIndex - 1 + songs.length) % songs.length;
        updateSongDetails(newIndex);
    };

    useEffect(() => {
        const updateProgress = () => {
            if (audioRef.current && audioRef.current.duration) {
                const progressValue = (audioRef.current.currentTime / audioRef.current.duration) * 100;
                setProgress(progressValue);
            }
        };

        if (audioRef.current) {
            audioRef.current.addEventListener("timeupdate", updateProgress);
            audioRef.current.addEventListener("ended", nextSong);
        }

        return () => {
            if (audioRef.current) {
                audioRef.current.removeEventListener("timeupdate", updateProgress);
                audioRef.current.removeEventListener("ended", nextSong);
            }
        };
    }, [curMusic, nextSong]);

    const handleProgressChange = (e) => {
        if (audioRef.current) {
            const newTime = (e.target.value / 100) * audioRef.current.duration;
            audioRef.current.currentTime = newTime;
            setProgress(e.target.value);
        }
    };

    const handleVolumeChange = (e) => {
        if (audioRef.current) {
            audioRef.current.volume = e.target.value;
        }
    };

    return (
        <>
            {
                logStatus ? (
                    <>
                        {
                            isSubscribed ? (<>
                                <div className={`${play} lg:${play} absolute bg-black text-white bottom-0 fixed p-3 z-[1000] w-full lg:w-full lg:items-center`}>
                                    <div className="lg:flex lg:gap-5 lg:justify-center items-center lg:w-full">
                                        {/* Music controls */}
                                        <div className="lg:flex flex justify-center items-center lg:gap-2 bg-transparent w-full lg:w-80">
                                            <button onClick={prevSong} className="text-3xl text-white p-2 rounded-full transition-transform transform hover:scale-110">◁</button>
                                            <button onClick={togglePlayPause} className={`lg:text-3xl text-3xl text-white lg:p-2 rounded-full transition-transform transform hover:scale-110 ${isPlaying ? 'pulse' : ''}`}>
                                                {isPlaying ? "❚❚" : "▶️"}
                                            </button>
                                            <button onClick={nextSong} className="text-3xl text-white p-2 rounded-full transition-transform transform hover:scale-110">▷</button>
                                            <label htmlFor="volume" className="text-sm pr-2">Volume</label>
                                            <input type="range" min="0" max="1" step="0.01" defaultValue="1" className="lg:w-20 w-screen" onChange={handleVolumeChange} />
                                        </div>
                                        {/* Progress bar */}
                                        <div className="flex items-center justify-center gap-1">
                                            <input type="range" min="0" max="100" step="1" value={progress} className="lg:w-full w-screen" onChange={handleProgressChange} />
                                        </div>
                                    </div>
                                </div>
                            </>) : (
                                <>
                                    <div className="overflow-hidden whitespace-nowrap">
                                        <h1 className="animate-marquee text-red-600 font-bold text-xl">
                                            Please take Subscription
                                        </h1>
                                    </div>
                                </>)
                        }

                        {/* Video iframe or audio */}
                        <div className="lg:w-full">
                            {curMusic && curMusic.includes("youtube.com") ? (
                                // YouTube Video Embed
                                <div className="w-full">
                                    <iframe
                                        width="100%"
                                        height="315"
                                        src={`https://www.youtube.com/embed/${curMusic.split("v=")[1]}`}  // Extract videoId from YouTube URL
                                        title={curTit}
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    ></iframe>
                                </div>
                            ) : (
                                // Audio Element
                                <audio ref={audioRef} className="hidden" controls />
                            )}
                        </div>
                        <MainNav />
                    </>) :
                    (
                        <>
                            <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-100 to-purple-100 px-4">
                                <div className="bg-white rounded-2xl shadow-2xl p-8 flex flex-col items-center space-y-8 w-full max-w-md animate-fade-in transition-transform duration-300 hover:scale-[1.01]">

                                    <h2 className="text-3xl font-bold text-gray-800 tracking-wide">Welcome to Music Player</h2>
                                    {/* Login & Sign Up Buttons */}
                                    <div className="flex space-x-4">
                                        <NavLink
                                            to="/login"
                                            className="transition duration-300 ease-in-out transform hover:scale-105 text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-semibold rounded-lg text-sm px-6 py-3 shadow-md hover:shadow-xl"
                                        >
                                            Log In
                                        </NavLink>
                                        <NavLink
                                            to="/signup"
                                            className="transition duration-300 ease-in-out transform hover:scale-105 text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:ring-green-300 font-semibold rounded-lg text-sm px-6 py-3 shadow-md hover:shadow-xl"
                                        >
                                            Sign Up
                                        </NavLink>
                                    </div>

                                    {/* Login Prompt Card */}
                                    <div className="bg-white p-6 rounded-xl shadow-lg text-center w-full border border-gray-200 hover:shadow-2xl transition-all duration-300">
                                        <h3 className="text-xl font-semibold text-gray-800 mb-2">🔒 Login Required</h3>
                                        <p className="text-gray-600">Please log in to continue to the next screen.</p>
                                    </div>
                                </div>
                            </div>
                        </>
                    )
            }
        </>
    );
}
