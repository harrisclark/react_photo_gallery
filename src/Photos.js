import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import PhotoList from "./PhotoList";
import apiKey from "./config";

const Photos = () => {
  const [photoList, setPhotoList] = useState([]);
  

  const { query } = useParams();
  console.log(query)
  useEffect(() => {
    requestPhotoList(query);
    
  }, [query])

  async function requestPhotoList(query) {

    const res = await fetch(
      `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&tag_mode=all&per_page=24&format=json&nojsoncallback=1`
    );
    const json = await res.json();
    console.log('log');
    setPhotoList(json.photos.photo);
  };

  return(
    <>
      <PhotoList photos={photoList} query={query} />
    </>
  )
}
export default Photos;