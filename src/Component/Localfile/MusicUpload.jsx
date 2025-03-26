import { useContext } from "react";
import { musicData } from "../../Context/musicData";

export const MusicUploader = () => {
    const { addSong, addSongDetails } = useContext(musicData);

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            addSong(file);  // Add the song to the state and store it in localStorage
        }
    };

    const handleAddDetails = () => {
        const title = prompt("Enter song title:");
        const artist = prompt("Enter artist name:");
        if (title && artist) {
            addSongDetails({ title, artist }); // Update song details if prompted
        }
    };

    return (
        <div className="flex flex-col items-center p-4 space-y-4">
            <input 
                type="file" 
                accept="audio/*" 
                onChange={handleFileChange} 
                className="border-2 border-dashed border-gray-400 p-3 rounded-lg cursor-pointer hover:bg-gray-100"
            />
            <button 
                onClick={handleAddDetails} 
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
                Add Song Details
            </button>
        </div>
    );
};
