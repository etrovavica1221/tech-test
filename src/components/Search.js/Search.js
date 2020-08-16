import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../../styles/Search.css';
import getImages from '../../requests/getImages.js';

const Search = ({ setSearchResults }) => {

    const [value, setValue] = useState();

    const handleSubmit = async(e) => {
        e.preventDefault();
        setSearchResults(await getImages(value));
    };

    return(
        <>
            <form className="search-form" onSubmit={handleSubmit}>
                <input className="search-input" type="text" onChange={(e) => setValue(e.target.value)} />
                <button className="search-button" type="submit">
                    Search
                </button> 
            </form>
        </>
    );
};


Search.propTypes = {
    value: PropTypes.array,
    handleSubmit: PropTypes.func,
}

export default Search;