import React, { useEffect, useState } from "react";
import { NavLink, Outlet } from "react-router";
import { useContext } from "react";
import { musicData } from "../../Context/musicData";

export function MainNav() {
    const { setMusicD, setSer, search } = useContext(musicData);

    useEffect(() => {
        if (!search) return;
        const getData = async () => {
            const url = `https://youtube-music-api3.p.rapidapi.com/search?q=${search}&type=song`;
            const options = {
                method: 'GET',
                headers: {
                    'x-rapidapi-key': 'd99a831cc3msh98f064e3396e397p1d8bbajsndb58fa75088e',
                    'x-rapidapi-host': 'youtube-music-api3.p.rapidapi.com'
                }
            };

            try {
                const response = await fetch(url, options);
                const result = await response.json();
                setMusicD(result.result); // Set search results
            } catch (error) {
                console.error(error);
            }
        };
        getData();
    }, [search, setMusicD]);

    const handleSearch = (e) => {
        setSer(e.target.value); // Update search term
    };

    return (
        <>
            <div className="overflow-x-hidden flex flex-col md:w-screen lg:w-screen">
                <div className="flex p-3 lg:p-3 gap-5 lg:justify-between lg:gap-2">
                    <div className="flex flex-row lg-w-auto text-white text-sm lg:text-lg md:p-1">
                        <ul className="flex lg:gap-10 lg:p-auto pt-1 gap-3 md:gap-5">
                            <li>
                                <NavLink
                                    to={"/"}
                                    className={({ isActive }) => `${isActive ? 'text-white' : 'text-gray-100'}`}>
                                    Discover
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="Library"
                                    className={({ isActive }) => `${isActive ? 'text-white' : 'text-gray-500'}`}>
                                    My Library
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/"
                                    className={({ isActive }) => `${isActive ? 'text-white' : 'text-gray-500'}`}>
                                    Radio
                                </NavLink>
                            </li>
                        </ul>
                    </div>

                    {/* Search bar */}
                    <div className="lg:w-auto w-23">
                        <div className="bg-white/10 backdrop-blur-md rounded-xl flex items-center">
                            <i className="bi bi-search p-1 pl-2 text-white"></i>
                            <input
                                type="search"
                                className="lg:w-auto w-18 outline-none bg-transparent text-white placeholder-white placeholder:pl-1"
                                placeholder="Search..."
                                value={search}
                                onChange={handleSearch} // Update search term
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
                    <Outlet />
                </div>
            </div>
        </>
    );
}
