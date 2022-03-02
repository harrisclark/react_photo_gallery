import React from "react";

import Photo from "./Photo";


const PhotoList = (props) => {
  
  const imgs = props.photos.map( (photo) => {
    // conditional to prevent inaccessible photos (farm: 0) from being returned
    if (photo.farm) {
      return <Photo 
      url={`http://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_w.jpg`} 
      key={photo.id} />
    } else { return null }
  });


  return(
    <div className="photo-container">
      <ul>
        {!props.isLoading ? imgs : null}
      </ul>
    </div>
  )
}

export default PhotoList;