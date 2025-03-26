import React, {  useState } from "react";
import { NavLink, Outlet } from "react-router";
import { useContext } from "react";
import { musicData } from "../../Context/musicData";
export function MainNav() {
    const {songs}=useContext(musicData);
    const [serchquery,setSearch]=useState("");

    const handleSearch=((e)=>{
        onchange(setSearch(e.target.value))
    })
    return (
        <>
            <div className="overflow-x-hidden flex  flex-col md:w-screen lg:w-screen">
                <div className="flex p-3 lg:p-3   gap-5 lg:justify-between  lg:gap-2">
                    <div className="flex flex-row lg-w-auto text-white text-sm lg:text-lg md:p-1">
                        <ul className="flex lg:gap-10 lg:p-auto pt-1 gap-3 md:gap-5">
                            <li>
                                <NavLink
                                    to={"/"}
                                    className={({ isActive }) => `${isActive ? 'text-white ' : 'text-gray-100'}`}>
                                    Discover
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="Library"
                                    className={({ isActive }) => `${isActive ? 'text-white' : 'text-gray-500'}`} // Correct color class
                                >
                                    My Library
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/"
                                    className={({ isActive }) => `${isActive ? 'text-white' : 'text-gray-500'}`} // Correct color class
                                >
                                    Radio
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                    {/* Search bar se */}

                    <div className="lg:w-auto w-20">
                        <div className="bg-white/10 backdrop-blur-md  rounded-xl flex items-center">
                            <i className="bi bi-search p-1 pl-2 text-white"></i>
                            <input
                                type="search"
                                className="lg:w-auto w-13 outline-none bg-transparent text-white placeholder-white placeholder:pl-1"
                                placeholder="Search..."
                            />
                        </div>
                    </div>

                    {/* User Section */}

                    <div className="lg:flex hidden w-10 lg:min-w-100 flex">
                        <div className="bg-white/60 backdrop-blur-md text-red-500 rounded-full w-8 h-8 text-center p-1">
                            H
                        </div>
                    </div>
                </div>
                <div>
                    <Outlet/>
                </div>
            </div>
        </>
    )
}