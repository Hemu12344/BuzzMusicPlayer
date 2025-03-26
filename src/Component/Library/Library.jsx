import React from "react";
import {MusicPlayer} from "../Localfile/MusicPlayer"
import { MusicUploader } from "../Localfile/MusicUpload";
export function Library(){
    return(
        <>
        <div className="flex flex-col items-center h-screen">
        <MusicUploader/>
        <MusicPlayer/>
        </div>
        </>
    )
}