import { useContext } from "react";
import { musicData } from "../../Context/musicData";

export const MusicPlayer = () => {
    const {deletSong,song,songs, currentSong, setCurrentSong ,setCur,setTit,setArt,setImg} = useContext(musicData);

    return (
        <>
        <div className="flex">
        <div className="flex flex-col max-w-md mx-auto p-4 bg-white shadow-lg rounded-lg mt-4">
            <h2 className="text-lg font-semibold text-center mb-3">Music Player</h2>
            <ul className="space-y-2">
                {song.map((song, index) => (
                    <li key={index} className="flex justify-between items-center p-2 bg-gray-100 rounded-md">
                        <span className="text-sm font-medium">{song.name}</span>
                        <button 
                        onClick={(()=>{

                            setCurrentSong(song),
                            setCur(currentSong.url),
                            setTit("Local Songs Playing.....")
                            setArt("Local")
                            setImg("data:image/png;base64,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")
                        })}
                            className="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600"
                        >
                            Play
                        </button>
                        <button onClick={()=>{
                            deletSong(song)
                            setCur(songs[0].audio)
                            setImg(songs[0].cover)
                            setTit(songs[0].title)
                            setArt(songs[0].artist)
                        }} className="bg-red-500 p-1 rounded text-white ml-2 w-15">Delte</button>
                    </li>
                ))}
            </ul>
        </div>
        </div>
        </>
        
    );
};
