import React, {useState} from 'react';
import {Redirect} from 'react-router-dom';
import "./imageViewer.css";


function ImageViewer(props) {
    
    const imageId = props.id;
    const redirectDisabled = props.redirectDisabled || false;
    const [redirectState, setRedirectState] = useState({redirectRoute:undefined});

    const imageDetails = (id) => {
        if (!redirectDisabled) {
            setRedirectState ({redirectRoute:`/view/${id}`})
        }
    }

    //if the redirectRoute is undefined, render the images
    if (redirectState.redirectRoute === undefined) {
        return (    
            <div className="image-container" onClick={()=> imageDetails(props.id)}>
              <img src={props.url} className="image-size" alt='' />
            </div>
        )
    }

    //redirect to image details page when the redirect Route is no empty
    return (
        <Redirect to={`/view/${imageId}`} />
    );
}

export default ImageViewer;