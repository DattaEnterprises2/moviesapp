import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";
import { useDispatch, useSelector } from 'react-redux';
import { setFavRedux } from '../redux/moviesSlice'

const MovieCard = ({ data }) => {

    const [fav, setFav] = useState({});
    const dispatch = useDispatch();
    const favoriteMovies = useSelector((state) => state.movies.favorite);
    // console.log(favoriteMovies);

    const handleFav = (imdbID) => {
        // console.log(imdbID);
        setFav((prevFavorites) => ({
            ...prevFavorites,
            [imdbID]: !prevFavorites[imdbID], // Toggle the current favorite state
        }));
        dispatch(setFavRedux(() => ({
            ...favoriteMovies,
            [imdbID]: !favoriteMovies[imdbID], // Toggle the current favorite state
        })));
    };

    return (
        <div className='d-flex justify-content-center align-items-center gap-4 row '>
            {/* Use the map function correctly to return the card for each movie */}
            {data.map((curItem) => {
                // console.log(curItem.Title); // This will log the movie title to the console
                const isFavorite = fav[curItem.imdbID] || false;

                return (
                    <Card key={curItem.imdbID} className='m-5' style={{ width: '18rem' }}>
                        {/* Set the image src to the Poster URL */}
                        <Card.Img variant="top" src={curItem.Poster || 'path/to/default-image.jpg'} alt={curItem.Title} />
                        <Card.Body>
                            <Card.Title>{curItem.Title}</Card.Title>
                            <Card.Text>
                                {curItem.Year}, {curItem.Type}
                            </Card.Text>
                            <div className='d-flex justify-content-between'>
                                <Button variant="primary">Go somewhere</Button>

                                <a onClick={() => handleFav(curItem.imdbID)} className='justify-content-end' >{isFavorite ? <FaHeart /> : <FaRegHeart />}</a>
                            </div>
                        </Card.Body>
                    </Card>
                );
            })}
        </div>
    );
};

export default MovieCard;
