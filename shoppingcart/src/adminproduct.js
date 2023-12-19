import { Link } from "react-router-dom";
import Left from "./left";
import { useEffect, useState } from "react";

function Adminproduct() {
    const [products, setProducts] = useState([''])
    const [message, setmessage] = useState([''])
    useEffect(() => {
        fetch('/api/allproduct').then((result) => { return result.json() }).then((data) => {
            if (data.status === 200) {
                setProducts(data.apiData)
            } else {
                setmessage(data.message)
            }
        })
    }, [])
    return (

        <section id="mid">
            <div className="container">
                <div className="row">
                    <Left />
                    <div className="col-md-9">
                        <h2 className="text-center">Product Management</h2>
                        <p>{message}</p>
                        <Link to='/adminproductadd'>  <button className="btn btn-success form-control ">Add Product here</button></Link>
                        <table className="table table-hover margin-left:30px " >
                            <thead>
                                <tr>
                                    <th >S.No</th>
                                    <th >Product Name</th>
                                    <th>Product Description</th>
                                    <th>Product Price</th>
                                    <th>Product Quantity</th>
                                    <th>Product Status</th>
                                    <th>Product Image</th>
                                    <th>Action</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {products.map((result, key) => (
                                    <tr>
                                        <td>{key + 1}</td>
                                        <td>{result.name}</td>
                                        <td>{result.desc}</td>
                                        <td>{result.price}</td>
                                        <td>{result.qty}</td>
                                        <td>{result.status}</td>
                                        <td><img style={{ width: "65px" }} src={`/productimages/${result.img}`} alt="error"></img></td>
                                        <td><button className="btn btn-warning"><Link style={{textDecoration:"none",color:"white"}} to={`/productupdate/${result._id}`} >Update</Link></button></td>
                                        <td><button className="btn btn-danger"><Link style={{textDecoration:"none",color:"white"}} to={`/productdelete/${result._id}`}>Delete</Link></button> </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>

    );
}

export default Adminproduct;