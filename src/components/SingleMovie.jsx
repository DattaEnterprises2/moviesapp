import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import reactLogo from '../assets/react.svg'

const SingleMovie = () => {
  console.log(reactLogo);
  return (
    <div>
      <h1>Movies Details</h1>

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
    </div>
  )
}

export default SingleMovie
