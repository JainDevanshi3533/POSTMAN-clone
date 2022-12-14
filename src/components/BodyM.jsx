import { useContext } from "react";
import { DataContext } from "../context/DataProvider";
const BodyM = () =>{
    const {setJsonText} = useContext(DataContext);
    const onValueChange=(e) =>{
        setJsonText(e.target.value);
    }
    return (
        <div id="bodyM">
            <div>Body</div>
            <div>
                <textarea rows="6"
                onChange={(e)=> onValueChange(e)}></textarea>
            </div>
        </div>
    )
}

export default BodyM;