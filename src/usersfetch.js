import { useParams } from "react-router-dom";

function Usersfetch() {
const {id}=useParams()
  
    fetch(`/api/userupdate/${id}`,{
    
    }).then((result)=>{return result.json()}).then((data)=>{
            // console.log(data)
    })
  
    return ( <>
    <h2>{id}</h2>

    </> );
}

export default Usersfetch;