import React, {useState, useEffect }from 'react';
import Header from '../../components/Header/Header';
import ImageViewer from '../../components/ImageViewer/ImageViewer';
import {getImageBinaryUrl,listImages} from '../../Utils/ApiService';
import Constant from '../../Constant';
import "./photoBrowse.css";

function PhotoBrowse() {
   const [images, setImages] = useState({col1:[], col2:[]})

    useEffect(()=> {
      listImages().then (result=> {
    
        let col1Array = result.data.filter((value, idx) => (idx %2 === 0));
        let col2Array = result.data.filter((value, idx) => (idx %2 === 1));
        // console.log('col1',col1Array);
        // console.log('col2',col2Array);
        setImages(
           {
            col1:col1Array,
            col2:col2Array
           }
          );
       
      })
    },[])
    
    return (
        <div className="Browse">
          <Header title={Constant.BROWSE_TITLE} />
             {(images.col1) && images.col1.length > 0  && 
               <div className='browse-row'>  
                  <div className='browse-col'>
                  {images.col1.map((value) => (
                    <ImageViewer key={value.id} url={getImageBinaryUrl(value.id)} id={value.id}/>
                  ))}
                  </div>
                  <div className='browse-col'>
                    {images.col2.map((value) => (
                      <ImageViewer key={value.id} url={getImageBinaryUrl(value.id)} id={value.id}/>
                    ))}
                  </div>
               </div>
             }
             
            

          {/* <div className='browse-row'>
             <div className='browse-col'>
              <ImageViewer url={getImageBinaryUrl(4)} id='4'/>
              <ImageViewer url={getImageBinaryUrl(4)} id='4'/>
             </div>
             <div className='browse-col'>
              <ImageViewer url={getImageBinaryUrl(4)} id='4'/>
              <ImageViewer url={getImageBinaryUrl(4)} id='4'/>
             </div>
          </div> */}
            
            
        </div>
      );
}

export default PhotoBrowse;