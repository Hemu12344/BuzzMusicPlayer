import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router'
import { Layout } from './Layout'
import { Main } from './Component/Main/Main'
import { MusicDataProvider } from './Context/musicDataProvider'
import { Library } from './Component/Library/Library'
import { Login } from './Component/Login/Login'
import Signup from './Component/Signup/Signup'
import ProfilePage from './Component/Profile/Profile'
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path='/' element={<Layout />}>
      <Route path='/' element={<Main />} />
      <Route path='Library' element={<Library/>}/>
      <Route path='/profilePage' element={<ProfilePage/>}/>
    </Route>
    <Route path='/login'element={<Login/>}/>
    <Route path='/signup' element={<Signup/>}/>
    </>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MusicDataProvider>
      <RouterProvider router={router} />
    </MusicDataProvider>
  </StrictMode>,
)
