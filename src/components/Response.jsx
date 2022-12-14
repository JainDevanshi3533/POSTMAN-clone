
const Response = ({data}) =>{
    return (
        <div>
            <div>Response</div>
            <hr  width="82%" />
            <div id="response">
                <textarea rows="7" disabled value={JSON.stringify(data)}></textarea>
            </div>
        </div>
    )
}

export default Response;