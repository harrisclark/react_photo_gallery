import React, { useState } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';


import './index.css';
import usePhotoList from './usePhotoList';

import Nav from './Nav';
import SearchForm from './SearchForm';

import Cats from './Cats'
import Dogs from './Dogs';
import Computers from './Computers';

const App = () => {
  
  const [query, setQuery] = useState('');
  const [photos] = usePhotoList(query);
 // const url = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${tag}&per_page=24&format=json&nojsoncallback=1`;
  //url format:  `http://farm${farmID}.staticflickr.com/${serverID}/${photoID}_${secretID}_${size}.jpg`
  //test example:  "http://farm66.staticflickr.com/65535/51883670792_916dae062a_d.jpg"

  // useEffect(() => {
  //   searchPhotos(query)
  // }, [query])
  

  // const searchPhotos = (query) => {
  //   fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&tag_mode=all&per_page=24&format=json&nojsoncallback=1`)
  //     .then(res => res.json())
  //     .then(
  //       (result) => {
  //         setItems(result.photos.photo);
  //       }
  //     )
  // }

  return(
    <BrowserRouter>
      <div className="container">
        <SearchForm setQuery={setQuery} />
        <Nav />
        <Switch>
          <Route exact path="/">
            <Redirect to="/cats" />
          </Route>
          <Route path="/cats" render={ () => <Cats photos={photos} setQuery={setQuery} /> } />
          <Route path="/dogs" render={ () => <Dogs photos={photos} setQuery={setQuery} /> } />
          <Route path="/computers" render={ () => <Computers photos={photos} setQuery={setQuery} /> } />
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App;
