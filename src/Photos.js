import React from "react";
import Photo from "./Photo";

const Photos = (props) => {
  const imgs = props.photos.map( (photo) => {
    // conditional to prevent invalid photos from being rendered
    if (photo.farm) {
      return <Photo url={`http://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_w.jpg`} key={photo.id} />
    } else { return null }
  });
// will have to change message
  let message = 'Loading...'
  if (props.photos.length > 0) {
    message = ''
  } else {
    message = 'No Results'
  }

  return(
    <div className="photo-container">
      <h2>{message}</h2>
      <ul>
        {imgs}
      </ul>
    </div>
  )
}

export default Photos;