import React from 'react';
import '../styles/SearchResults.css';
import PropTypes from 'prop-types';

const SearchResults = ({ results }) => {
    if (!results.length) {
        return <p id="p-NoResults">No results</p>   
    } else {  
        return(
            <span>
                <div id="p-SearchResults">
                    <p>Search Results:</p>
                </div>
                <div className="SearchResults" data-testid="resultTest">
                        {results.map((image) => (
                            <img className="card-image" src={image} alt="spaceImage" key={image} />
                        ))}
                </div>
            </span>
        );
    }
};

SearchResults.propTypes = {
    image: PropTypes.func,
    results: PropTypes.array,
}

export default SearchResults;
