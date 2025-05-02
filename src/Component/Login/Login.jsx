import React, { useContext, useState } from "react";
import { musicData } from "../../Context/musicData";
import { NavLink, useNavigate } from "react-router";

export function Login() {
     const navigate = useNavigate();
     const [error,setError]=useState("")
     const {logData,addLogData, userData, userName, setName, pass, setPass, setStatus } = useContext(musicData);
     const dataGet = (e) => {
          e.preventDefault();
      
          if (!userName) {
              alert("Enter Username");
              return;
          }
      
          if (!pass) {
              alert("Enter Password");
              return;
          }
      
          const data = userData.find((val) => val.email === userName && val.password === pass);
          console.log(userData);
          
          if (data) {
              setStatus(true);
              addLogData(data);
              navigate("/");
          } else {
              alert("Invalid Username or Password");
              setStatus(false);
          }
          setName("");
          setPass("");
      };      
     // const Check =()=>{
     //      const data = userData.find((val)=>val.name===userName && val.password===pass);
     //      data?(setStatus(true),navigate("/")):setStatus(false)
     //      addLogData(data)          
     // }

     
     return (
          <div className="flex items-center justify-center min-h-screen bg-gray-100">
               <form
                    onSubmit={dataGet}
                    className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-sm"
               >
                    <p className="bg-gray-100 p-5 text-red-500">{error}</p>
                    <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Login</h2>

                    <input
                         type="email"
                         placeholder="Enter mail..."
                         value={userName}
                         onChange={(e) => setName(e.target.value)}
                         className="w-full mb-4 px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
                    />

                    <input
                         type="password"
                         placeholder="Password"
                         autoComplete="password"
                         value={pass}
                         onChange={(e) => setPass(e.target.value)}
                         className="w-full mb-6 px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
                    />

                    <button
                         type="submit"
                         className="mb-5 w-full bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700 transition-all duration-200 font-semibold"
                    >
                         Login
                    </button>
                    <NavLink
                            to={"/signup"}
                          >
                            <button
                              type="submit"
                              className="w-full bg-red-600 text-white py-2 rounded-xl hover:bg-blue-700 transition-all duration-200 font-semibold"
                            >
                              Signup
                            </button>
                    </NavLink>
               </form>
          </div>
     );
}
