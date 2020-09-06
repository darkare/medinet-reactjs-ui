import axios from 'axios';
import constant from '../Constant';

export const listImages = async () => {
    const result = await axios.get (`${constant.BASE_URL}/api/photos`);
    if ( result ) {
        return result;
    };
    return {};
}

export const getImageBinaryUrl = (id) => {

    return `${constant.BASE_URL}/api/photos/content/${id}`;
}

export const getImageAttributes = async (id) => {
    const result = await axios.get (`${constant.BASE_URL}/api/photos/${id}`);
    if ( result ) {
        return result;
    };
    return {};
}

export const postImage = async (dataUri, title, description ) => {
   
    return await fetch (dataUri).then(res => res.blob())
     .then(blob => {
       const formData = new FormData()
       formData.append('files', blob, 'captured')
       formData.append('desc', description);
       formData.append('title', title);
       formData.append('createdBy', constant.USER_ID);
       return axios.post(`${constant.BASE_URL}/api/photos`, 
                    formData, 
                    {
                        headers: {
                            'Content-Type': 'multipart/form-data'
                        }
                    }).then (res=> {
                        return res;
                    });
        })
}