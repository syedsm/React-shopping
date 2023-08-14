import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function Productdelete() {
   const navigate= useNavigate()
   const [message,setmessage]=useState()
    const {id}=useParams()
    fetch(`/api/delete/${id}`,{
        method:'DELETE'
    }).then((result)=>{return result.json()}).then((data)=>{
        //  console.log(data)
        if(data.status===200){
           navigate('/adminproducts')
        }else{
            setmessage(data.message)
        }
    })
    return (
       <></>
     );
}

export default Productdelete;