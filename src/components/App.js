import React, { useState } from 'react';
import '../styles/App.css';
import Search from'./Search.js/Search'
import SearchResults from './SearchResults';

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [isFirstTimeVisit, setIsFirstTimeVisit] = useState(true);

  return (
    <div className="App">
        <img
          className="nasa-logo" 
          src="https://cdn.cnn.com/cnnnext/dam/assets/200424060716-nasa-worm-logo.jpg"
          alt="nasaLogo"
        />
        <Search setSearchResults={setSearchResults} setIsFirstTimeVisit={setIsFirstTimeVisit}/>
        {!isFirstTimeVisit && <SearchResults results={searchResults} />}
    </div>
  );
}

export default App;
