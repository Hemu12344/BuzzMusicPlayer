import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router'
import { Layout } from './Layout'
import { Main } from './Component/Main/Main'
import { MusicDataProvider } from './Context/musicDataProvider'
import { Library } from './Component/Library/Library'
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='/' element={<Main />} />
      <Route path='Library' element={<Library/>}/>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MusicDataProvider>
      <RouterProvider router={router} />
    </MusicDataProvider>
  </StrictMode>,
)
