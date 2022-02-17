import React, { useEffect, useState } from 'react';
//import axios from 'axios';
import './index.css';
import SearchForm from './SearchForm';
//import Nav from './Nav';
import Photos from './Photos';
import apiKey from './config';

const App = () => {

  const [isLoaded, setIsLoaded] = useState(false)
  const [items, setItems] = useState([]);

  

 // const url = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${tag}&per_page=24&format=json&nojsoncallback=1`;
  //url format:  `http://farm${farmID}.staticflickr.com/${serverID}/${photoID}_${secretID}_${size}.jpg`
  //test example:  "http://farm66.staticflickr.com/65535/51883670792_916dae062a_d.jpg"
  


  useEffect((tag = 'cat') => {
    
    
    fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${tag}&per_page=24&format=json&nojsoncallback=1`)
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result.photos.photo);
        }
      )
    }, [])
    
    if (isLoaded) {
      console.log(items)

    }

  return(
    <div className="container">
      <SearchForm />
      <Photos photos={items} />
    </div>
  )
}

export default App;
