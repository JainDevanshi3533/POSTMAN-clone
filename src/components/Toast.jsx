const Toast = ({error, setError,errorMsg}) =>{

    const handleClose = () =>{
        setError(false);
    }
    return(
        <>{ !error && 
        <div className="toast-container position-fixed bottom-0 end-0 p-3">
            <div id="liveToast" className="toast" role="alert" aria-live="assertive" aria-atomic="true">
                <div className="toast-header">
                <strong className="me-auto">Error</strong>
                <button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Close"
                onClose= {handleClose}></button>
                </div>
                <div className="toast-body">
                {errorMsg}
                </div>
            </div>
        </div>
}
        </>
    )
}

export default Toast;