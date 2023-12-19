import { useContext, useEffect, useState } from "react";
import Productstr from "./productstr";
import { Contextapi } from "./Contextapi";
import { Link } from "react-router-dom";

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

    {/* {products.map((products) => (

                <Productstr key={products._id} product={products} />
            ))} */}

    const { cart, setCart } = useContext(Contextapi)
    let _cart = { ...cart }
    function handlecart(e, product) {
        console.log(product._id)
        // console.log(product)
        if (!_cart.item) {
            _cart.item = {}
        } if (!_cart.item[product._id]) {
            _cart.item[product._id] = 1
        } else {
            _cart.item[product._id] += 1
        } if (!_cart.totalItems) {
            _cart.totalItems = 1
        } else {
            _cart.totalItems += 1
        }
        setCart(_cart)
        console.log(cart)
    }
    return (
        <>
            <section id="product">

                <div className="container mt-3 ">
                    <div className="row justify-content-center">
                        {products.map((item) => (
                            <div className="col-md-3">
                                <div className="card" style={{ width: "18rem" }}>
                                    <img src={`../productimages/${item.img}`} className="card-img-top" style={{ width: '100%' }} alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Product Name: {item.name}</h5>
                                        <p className="card-text">Product Detail :{item.desc}</p>
                                        <p className="card-text">Product Price :{item.price}</p>
                                        <Link to="" className="btn btn-success" onClick={(e) => handlecart(e, item)}>Add Cart </Link>
                                        <Link to="" className="btn btn-primary" style={{ marginLeft: '20px' }} >More Details</Link>

                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </section>
        </>
    );


}

export default Usersproduct;