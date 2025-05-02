import React from 'react';
import { useContext } from 'react';
import { musicData } from '../../Context/musicData';
import { Navigate, useNavigate } from 'react-router';
const ProfilePage = () => {
    const {logData,imgUrl}=useContext(musicData)
    const navigate=useNavigate()
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="bg-white p-8 rounded-2xl shadow-xl max-w-md w-full text-center">
        <img
          src={imgUrl?logData[0].imgUrl:"https://tse4.mm.bing.net/th?id=OIP.hGSCbXlcOjL_9mmzerqAbQHaHa&pid=Api&P=0&h=180"}
          alt={logData[0].name}
          className="w-24 h-24 rounded-full mx-auto mb-4 shadow-md"
        />
        <h2 className="text-2xl font-bold text-gray-800">{logData[0].name}</h2>
        <p className="text-gray-500 mb-2">{logData[0].email}</p>
        <p className="text-gray-600 mt-4">
          BCA student passionate about building full-stack web apps and AI solutions to solve real-world problems in India.
        </p>
        <div className="mt-6">
          <button className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition-all"
          onClick={(()=>{
            navigate("/Signup")
          })}
          >
            Edit Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
