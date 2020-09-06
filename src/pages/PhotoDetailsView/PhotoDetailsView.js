import React, {useState, useEffect } from "react";
import ImageViewer from "../../components/ImageViewer/ImageViewer";
import Header from "../../components/Header/Header";
import { getImageBinaryUrl, getImageAttributes } from "../../Utils/ApiService";

import "./photoDetailsView.css";

/**
 * The is to view the image details:
 *  - Title
 *  - Image
 *  - Description
 * @param  props  It is used to get image id from the /view/:id 
 */
function PhotoDetailsView(props) {
  const [image, setImage] = useState({});
  const photoId = props.match.params.id;


  useEffect(() => {
    try{
      getImageAttributes(photoId)
        .then (response => {
            console.log('photo',response);
            setImage(response.data);
        })
    }
    catch (err) {
        console.log(err);
    }
  },[photoId]);
  

  return (
    <div>
      <Header title={image.title} />
    
      <div className="view-image">
        <ImageViewer url={getImageBinaryUrl(photoId)} id={photoId} redirectDisabled={true}/>
      </div>
      <div className="image-desc-text">
        {image.description}
      </div>
    </div>
  );
}

export default PhotoDetailsView;
