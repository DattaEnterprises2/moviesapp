// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import './App.css'
import NavBar from './components/NavBar.jsx'
import MovieCard from './components/MovieCard.jsx'
import Favorite from "./components/Favorite.jsx";
import SingleMovie from "./components/SingleMovie.jsx"
import Home from "./components/Home.jsx";
// import Navbar from 'react-bootstrap/Navbar';


function App() {

  const router = createBrowserRouter(
    [
      {
        path: "/",
        element:
          <div>
            <NavBar></NavBar>
            <Home></Home>
          </div>
      },
      {
        path: "/favorite",
        element:
          <div>
            <NavBar></NavBar>
            <Favorite></Favorite>
          </div>
      },
      {
        path: "/:id",
        element:
          <div>
            <NavBar></NavBar>
            <SingleMovie></SingleMovie>
          </div>
      }
    ]
  )

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
      {/* <NavBar></NavBar>
      <MovieCard ></MovieCard> */}
    </>
  )
}

export default App
