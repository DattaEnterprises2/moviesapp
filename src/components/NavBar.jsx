import { createContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Search from './Search';
import Home from './Home';
import { searchRedux } from '../redux/moviesSlice';
import { Provider, useDispatch } from 'react-redux';  // Import useDispatch from react-redux
// import { setSearch } from './searchSlice'; 

const searchContext = createContext();

function NavScrollExample(props) {

    const [search, setSearch] = useState("");

    const dispatch = useDispatch();

    // const value1 = e.target.value;
    //     setSearch(value1);

    const handleSearch = (e) => {
        const value1 = e.target.value;
        setSearch(value1);
        dispatch(searchRedux(value1));
    }
    // console.log(search);



    return (

        <searchContext.Provider value={search}>


            <Navbar expand="lg" className="bg-secondary">
                <Container fluid>
                    <Navbar.Brand href="#" className='fs-3 h1'>Navbar </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            bg="primary"
                            navbarScroll
                        >
                            <Nav.Link href="/" className='fs-5'>Home</Nav.Link>
                            <Nav.Link href="/favorite" className='fs-5'>Favorite</Nav.Link>
                            {/* <NavDropdown title="Link" id="navbarScrollingDropdown">
                            <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action5">
                                Something else here
                            </NavDropdown.Item>
                        </NavDropdown> */}
                            <Nav.Link href="#" className='fs-5'>
                                Contacts us
                            </Nav.Link>
                        </Nav>
                        <Form className="d-flex">
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                                onChange={handleSearch}
                            />
                            <Button variant="outline-primary me-3">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            {/* <Home></Home> */}
            {props.children}
        </searchContext.Provider>

    );
}

export default NavScrollExample;
export { searchContext };