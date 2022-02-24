import React from "react";
import Photos from "./Photos";


const Cats = (props) => {
  console.log('from cats:', props.photos)
  props.setQuery('cats')
  return(
    <div>
      <h2>Here are some kitty cats</h2>
      <Photos photos={props.photos} />
    </div>
  )
}

export default Cats;