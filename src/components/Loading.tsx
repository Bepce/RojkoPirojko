import loading from "../assets/images/Loading.svg"

function Loading(){
    return(
        <>
        <div className="loading">
            <img src={loading}></img>
        </div>
        <p>Loading...</p>
        </>
    )
}

export default Loading