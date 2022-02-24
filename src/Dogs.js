import React from "react";
import Photos from "./Photos";


const Dogs = (props) => {
  props.setQuery('dogs')
  return(
    <div>
      <h2>Here are some doggy dogs</h2>
      <Photos photos={props.photos} />
    </div>
  )
}

export default Dogs;