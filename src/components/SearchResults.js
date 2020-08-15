import React from 'react';
import '../styles/SearchResults.css';

const SearchResults = ({ results }) => {
    if (!results.length) {
        return <p id="p-NoResults">No results</p>   
    } else {  
        return(
            <span>
                <div id="p-SearchResults">
                    <p>Search Results:</p>
                </div>
                <div className="SearchResults">
                        {results.map((image) => (
                            <img className="card-image" src={image} alt="spaceImage" key={image} />
                        ))}
                </div>
            </span>
        );
    }
};

export default SearchResults;
