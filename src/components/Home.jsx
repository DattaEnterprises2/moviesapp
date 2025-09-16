import React, { useContext, useEffect, useState } from 'react'
import MovieCard from './MovieCard'
import { searchContext } from './NavBar'; // Import the context
import { useSelector } from 'react-redux';

const Home = () => {

  const [newData, setNewsData] = useState([]);
  const API_URL = `http://www.omdbapi.com/?apikey=2da99d56&s=titanic`;

  const searchQuery1 = useContext(searchContext);
  console.log("contextapi", searchQuery1);



  const searchQuery = useSelector((state) => state.movies.searchQuery);
  // console.log(searchQuery);


  const getData = async () => {

    const response = await fetch(`http://www.omdbapi.com/?apikey=2da99d56&s=${searchQuery}`);
    const jsonData = await response.json();
    // console.log(jsonData.Search);
    setNewsData(jsonData.Search || []);


  }

  useEffect(() => {
    getData();
  }, [searchQuery])

  return (
    <div>

      <h1>All Movies</h1>

      <MovieCard data={newData}></MovieCard>
    </div>
  )
}

export default Home
