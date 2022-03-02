
import { Routes, Route, Navigate } from 'react-router-dom';


import './index.css';

import Nav from './Nav';
import SearchForm from './SearchForm';
import Photos from './Photos';
import RouteNotFound from './RouteNotFound';

const App = () => {

  // make container component that handles the query state and photoList state
  // this component should be rendered with the path /:query 
  // this component can use the useParams() to request photoList 
  // the component will render Photos and pass PhotoList to Photo
  // App.js -> Route -> Photos.js -> PhotoList.js -> Photo.js
  
  

  return(
    
      <div className="container">
        <SearchForm />
        <Nav />
        <Routes>
          <Route path="/" element={<Navigate to="/cats" />} />
          <Route path="/:query" element={<Photos />} />
          <Route path="*" element={<RouteNotFound />} />
        </Routes>
      </div>
    
  )
}


export default App;
