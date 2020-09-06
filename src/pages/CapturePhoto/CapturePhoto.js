import React,{useState} from 'react';
import Header from '../../components/Header/Header';
import Constant from '../../Constant';
import Camera from 'react-html5-camera-photo';
import ImagePreview from './ImagePreview';
import {postImage} from '../../Utils/ApiService';
import './capturePhoto.css';

function CapturePhoto(props) {
   const [dataUri, setDataUri] = useState('');
   const [title, setTitle] = useState('');
   const [description, setDescription] = useState('');
   const [saveState, setSaveState] = useState({data:undefined});
   
   function handleTakePhotoAnimationDone (dataUri) {
      setDataUri(dataUri);
   }
   
   const isFullscreen = false;
 
   const handleSubmit = (ev) => {
     ev.preventDefault();
     let savePromise = postImage(dataUri, title, description);
     
     Promise.resolve(savePromise).then(data => {
        setSaveState(data);
     }
    )
   }

   const displayCamera = () => {
    return <Camera onTakePhotoAnimationDone = {handleTakePhotoAnimationDone} isFullscreen={isFullscreen} />
  };

   const displayInputDetails = () => {
    return (
      <div className="capture-photo-container">
        <form className="capture-photo-form" onSubmit={(ev)=> handleSubmit(ev)}>
          <ImagePreview dataUri={dataUri} isFullscreen={isFullscreen} />
          <label className="save-message">{saveState.data}</label>
          <label className="text-label">Title</label>
          <input type="text" name="title" value={title} onChange={(ev) => {setTitle(ev.target.value)}} />
          <label className="text-label">Description</label>
          <textarea name="description" rows="5" value={description} onChange={(ev) => {setDescription(ev.target.value)}}/>
          { !saveState.data && <input className="submit-btn" type="submit" value="Submit"/>}
          { saveState.data && <a className="browse-a" href="/browse"><input className="browse-btn" type="button" value="Go Back" /></a>}
        </form>
      </div>
      )
  };

    return (
    <div>
      <Header title={Constant.TAKE_PHOTO_TITLE} disabledPhotoBtn='Y'/>
      {
        (dataUri)
          ? 
           displayInputDetails()
          : 
           displayCamera()
      }
    </div>
  );
}

export default CapturePhoto;