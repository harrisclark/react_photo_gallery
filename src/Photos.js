import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import PhotoList from "./PhotoList";
import apiKey from "./config";

const Photos = () => {
  const [photoList, setPhotoList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const { query } = useParams();
 
  //console.log(query)
  useEffect(() => {
    requestPhotoList(query);
    
  }, [query])

  async function requestPhotoList(query) {
    setIsLoading(true);
    const res = await fetch(
      `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&tag_mode=all&per_page=24&format=json&nojsoncallback=1`
    );
    const json = await res.json();

    setPhotoList(json.photos.photo);
    setIsLoading(false);
  };
  

  return(
    <div>
      <h3>{ isLoading ? 'Loading...' : '' }</h3>
      <h3>{ !isLoading && photoList.length === 0 ? `No Results for "${query}"` : '' }</h3>
      <PhotoList photos={photoList} query={query} isLoading={isLoading} />
    </div>
  );
};
export default Photos;