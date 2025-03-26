import React, { useContext, useEffect } from "react";
import { musicData } from "../../Context/musicData";

export function Main() {
    const { curImg, curArt, Arjit, songs, setCur, setTit, setImg, setCurArt, curTit, followers, setFollow } = useContext(musicData);

    useEffect(() => {
        const storedFollowers = localStorage.getItem("followers");
        if (storedFollowers !== null) {
            setFollow((prev) => parseInt(storedFollowers, 10) || 0 + prev); // Ensure proper parsing and default to 0
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
            setImg(song.cover || "");
            setCurArt(song.artist || "");
        }
    };

    const followIncr = () => {
        setFollow((prev) => (prev !== null ? prev + 1 : 1));
    };

    const removeFollow = () => {
        setFollow((prev) => (prev !== null ? Math.max(prev - 1, 0) : 0));
    };

    return (
        <div className="flex flex-col p-3 gap-2 text-white lg:h-auto min-h-screen">
            <h1 className="text-white text-xl font-semibold text-center text-center">Title :- {curTit || "Select a Song"}</h1>
            <div className="flex flex-col gap-2 lg:gap-10 justify-center items-center">
                <div className="lg:w-50 w-50 ">
                    <img src={curImg} className="rounded-md lg:w-full lg:h-full" alt={`Cover of ${curTit}`} loading="lazy" />
                </div>
                <div className="flex flex-col">
                    {/* <h1 className="lg:text-sm text-[10px] font-semibold">{curTit}</h1> */}
                    <p className="lg:text-xs text-[20px] text-gray-400">Artist :- {curArt}</p>
                </div>
            </div>
            <p className="text-white lg:text-left text-center">
            </p>
            {/* <div className="flex gap-5 text-white lg:justify-left justify-center">
                <button onClick={removeFollow} className="hover:cursor-pointer transition border-2 border-cyan-500 hover:bg-cyan-500 px-4 py-2 rounded-xl">
                    Unfollow
                </button>
                <button
                    className="hover:cursor-pointer transition border-2 border-cyan-500 hover:bg-cyan-500 px-4 py-2 rounded-xl"
                    onClick={followIncr}
                >
                    Follow
                </button>
            </div> */}
            <div className="flex flex-col w-full mt-5">
                {/* <span className="font-bold text-center">Page followers: {followers !== null ? followers : 0}</span> */}
                <h1 className="text-xl font-semibold lg:text-left text-left mb-2">Popular Songs</h1>
                <div className="flex gap-5 overflow-x-auto p-2 w-full max-w-screen-md lg:max-w-screen mx-auto overflow-hidden scrollbar-hide">
                    {songs && songs.length > 0 ? (
                        songs.map((song, index) => (
                            <div
                                key={index}
                                className="w-40 min-w-[160px] flex-shrink-0 hover:cursor-pointer"
                                onClick={() => handleSongClick(song)}
                            >
                                <img src={song.cover || ""} alt="Song Cover" className="rounded-lg w-full" />
                                <h1 className="text-center mt-2">{song.title || "Unknown Title"}</h1>
                            </div>
                        ))
                    ) : (
                        <p className="text-center">No songs available</p>
                    )}
                </div>
            </div>
            <div className="flex flex-col w-full mt-5">
                <h1 className="text-xl font-semibold lg:text-left text-left mb-2">Arjit Special</h1>
                <div className="flex gap-5 overflow-x-auto p-2 w-full max-w-screen-md lg:max-w-screen mx-auto overflow-hidden scrollbar-hide">
                    {Arjit && Arjit.length > 0 ? (
                        Arjit.map((song, index) => (
                            <div
                                key={index}
                                className="w-40 min-w-[160px] flex-shrink-0 hover:cursor-pointer"
                                onClick={() => handleSongClick(song)}
                            >
                                <img src={song.cover || ""} alt="Song Cover" className="rounded-lg w-full" />
                                <h1 className="text-center mt-2">{song.title || "Unknown Title"}</h1>
                            </div>
                        ))
                    ) : (
                        <p className="text-center">No songs available</p>
                    )}
                </div>
            </div>
            <style>
                {`::-webkit-scrollbar { display: none; }
                  -ms-overflow-style: none;
                  scrollbar-width: none;`}
            </style>
        </div>
    );
}
