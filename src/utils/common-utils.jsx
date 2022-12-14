const checkValidJson = (text) => {
    if (/^[\],:{}\s]*$/.test(text.replace(/\\["\\\/bfnrtu]/g, '@').
        replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']').
        replace(/(?:^|:|,)(?:\s*\[)+/g, ''))) {
            return true;
    }else{
        return false;
    }
}


export const checkParams = (formData,jsonText ,setErrorMsg) =>{
    if(!formData.url){
        setErrorMsg('Request URL is invalid');
        return false;
    }

    if(!checkValidJson(jsonText)){
        setErrorMsg('Text is not a valid json.');
        return false;
    }
    return true;
}