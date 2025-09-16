import React, { useContext } from 'react'
import { searchContext } from './NavBar';

const Search = () => {
    const search = useContext(searchContext);

    return (
        <div>
            {search}
        </div>
    )
}

export default Search
