import React, { useContext, useState } from "react";
import { musicData } from "../../Context/musicData";
import { NavLink } from "react-router";
const Signup = () => {
  const { imgUrl, setIm, setEmail, setNam, setPassword, addUser, name, email, password } = useContext(musicData)
  const handleSubmit = (e) => {
    e.preventDefault();
    setNam("");
    setEmail("");
    setPassword("");
    addUser()
    console.log(imgUrl);

  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-sm mx-auto mt-10"
    >
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
        Sign Up
      </h2>

      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setNam(e.target.value)}
        className="w-full mb-4 px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
        required
      />

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full mb-4 px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
        required
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full mb-6 px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
        required
      />
      <label htmlFor="" className=" text-gray-500 w-full mb-6 px-4 py-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
      >Profile photo</label>
      <input
        type="file"
        onChange={(e) => {
          const file = e.target.files[0];
          if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
              const base64data = reader.result;
              setIm(base64data);
            };
            reader.readAsDataURL(file);
          }
        }}
        accept="image/*"
        required
        className="mt-5 w-full mb-6 px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"

      />

      <button
        type="submit"
        className="mb-5 w-full bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700 transition duration-200 font-semibold"
      >
        Sign Up
      </button>
      <NavLink
        to={"/login"}
      >
        <button
          type="submit"
          className="w-full bg-red-600 text-white py-2 rounded-xl hover:bg-blue-700 transition-all duration-200 font-semibold"
        >
          Login
        </button>
      </NavLink>
    </form>
  );
};

export default Signup;
