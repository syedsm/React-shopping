import { useEffect, useState } from "react";
import Productstr from "./productstr";

function Usersproduct() {
    const [products, setproducts] = useState([])
    const [message, setmessage] = useState('')

    useEffect(() => {
        fetch('/api/instockproducts', {

        }).then((result) => { return result.json() }).then((data) => {
            // console.log(data)  
            if (data.status === 200) {
                setproducts(data.apiData)
            } else {
                setmessage(data.message)
            }
        })
    }, [])
    return (
        <section id="product">
            {products.map((products) => (

                <Productstr key={products._id} product={products} />
            ))}
        </section>

    );
}

export default Usersproduct;