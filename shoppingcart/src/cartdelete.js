import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function Cartdelete() {
    const { id } = useParams()
    // console.log(id)
   let navigate = useNavigate()
   const [message,setmessage]=useState('')

    return (
       
        fetch(`/api/productdelete/${id}`, {
            method: 'DELETE'
        }).then((result)=>{return result.json()}).then((data)=>{
            console.log(data)
            if(data.message==='Successfully Cart Deleted'){
                navigate('/adminproducts')
             }else{
                 setmessage(data.message)
             }
        })

    );
}
export default Cartdelete;