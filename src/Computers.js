import React from "react";
import Photos from "./Photos";


const Computers = (props) => {
  console.log('from computers:', props.photos)
  props.setQuery('computers')
  return(
    <div>
      <h2>Here are some computers</h2>
      <Photos photos={props.photos} />
    </div>
  )
}

export default Computers;