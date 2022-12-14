import axios from 'axios';

export const getData = async(formData, jsonText) =>{
    const apiType = formData.type.toLowerCase();
    const apiUrl= formData.url;
    let response;
    try{
         response= await axios({
            method:apiType,
            url:apiUrl,
            body:jsonText
        });
        return response;

    }catch(error){
        console.log(`Error while calling getData Api `,error );
        return 'error';
    }
}