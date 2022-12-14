import Form from "./Form";
import Header from "./Header";
import '../index.css';
import BodyM from "./BodyM";
import Response from "./Response";
import Toast from "./Toast";
import { useContext ,useState } from "react";
import { DataContext } from "../context/DataProvider";
import { checkParams } from "../utils/common-utils";
import { getData } from "../service/api";

const Home = () =>{
    const [error, setError] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');
    const [errorResponse, setErrorResponse] = useState(false); 
    const [apiResponse , setApiResponse] = useState({});
    const {formData, jsonText} = useContext(DataContext);
    const onSendClick = async () =>{
        if(!checkParams(formData,jsonText,setErrorMsg)){
            setError(true);
            return false;
        }

        let response = await getData(formData,jsonText);
        if(response === 'error'  ){
            
            console.log("JUST ERROR");
            setErrorResponse(true);
            return;
        }else{
            setErrorResponse(false);
            setApiResponse(response.data);
        }
    }
    return (
        <>
        <Form onSendClick={onSendClick}/>
        <BodyM />
        {!errorResponse && <Response  data={apiResponse}/>}
        {error && <Toast error= {error} setError = {setError} errorMsg={errorMsg}/>}
        </>
    )
}

export default Home;