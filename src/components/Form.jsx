
import { useContext } from "react";
import { DataContext } from "../context/DataProvider";

const Form=({onSendClick})=>{

    const {formData, setFormData} = useContext(DataContext);
    const handleChange = (e) =>{
        setFormData({...formData, type:e.target.value});
    }
    const onUrlChange = (e) =>{
        setFormData({...formData, url:e.target.value});
        // console.log(formData);
    }
    return(
        <div>
            <select className="form-select" aria-label="Default select example"
                value={formData.type}
                onChange={(e) => handleChange(e)}>
                <option value={'GET'}>GET</option>
                <option value={'POST'}>POST</option>
                <option value={'PATCH'}>PATCH</option>
                <option value={'DELETE'}>DELETE</option>
            </select>
            <input type="text" className="form-control" id="inputPassword"
            onChange={(e) => onUrlChange(e)}></input>
            <button type="button" className="btn btn-primary"
            onClick={()=>onSendClick()}>Send</button>
        </div>
    )
}

export default Form;