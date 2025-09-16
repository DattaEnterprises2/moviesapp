import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import reactLogo from '../assets/react.svg'
import Search from './Search';
import { useSelector } from 'react-redux';

const Favorite = () => {

    const favMovies = useSelector((state) => state.movies.favorite);
    console.log(favMovies);
    return (
        <div>
            <h1>Favorite Moives</h1>

            <Card className='m-5 d-flex' style={{ width: '18rem' }} >
                <div className="d-flex flex-row">

                    <Card.Img variant="top" src={reactLogo} />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>

                </div>
            </Card>

            <Search></Search>

        </div>
    )
}

export default Favorite
