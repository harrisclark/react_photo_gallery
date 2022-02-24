import { useState, useEffect } from "react"
import apiKey from "./config";

// const localCache = {};

export default function usePhotoList(query) {
  const [photoList, setPhotoList] = useState([]);
  const [status, setStatus] = useState('unloaded');
  
  useEffect(() => {
    if (!query) {
      setPhotoList([])
    // } else if (localCache[query]) {
    //   setPhotoList(localCache[query])
    } else {
      requestPhotoList()
    }
    async function requestPhotoList() {
      setPhotoList([]);
      setStatus('loading');
  
      const res = await fetch(
        `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&tag_mode=all&per_page=24&format=json&nojsoncallback=1`
      )
      const json = await res.json();
      // localCache[query] = json.photos.photo;
      
      setPhotoList(json.photos.photo);
      setStatus('loaded');
    }
  }, [query])

  return [photoList, status];
}