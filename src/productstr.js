import { useContext } from "react";
import { Link } from "react-router-dom";
import { Contextapi } from "./Contextapi";

function Productstr(props) {
    const { product } = props
    
    const{cart,setCart}=useContext(Contextapi)
  let _cart={...cart}
    function handlecart(e,product)
    {
        console.log(product._id)
        // console.log(product)
        if(!_cart.item){
            _cart.item={}
        }if(!_cart.item[product._id]){
            _cart.item[product._id]=1
        }else{
            _cart.item[product._id]+=1
        }if(!_cart.totalItems){
            _cart.totalItems=1
        }else{
            _cart.totalItems +=1
        }
        setCart(_cart)
        console.log(cart)
    }
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <div className="card" style={{ width: "18rem" }}>
                            <img src={`../productimages/${product.img}`} className="card-img-top" style={{ width: '150px' }} alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Product Name: {product.name}</h5>
                                <p className="card-text">Product Detail :{product.desc}</p>
                                <p className="card-text">Product Price :{product.price}</p>
                                <Link to="" className="btn btn-success" onClick={(e)=>handlecart(e,product)}>Add Cart </Link>
                                <Link to="" className="btn btn-primary" style={{marginLeft:'20px'}} >More Details</Link>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            </>
    );
}

export default Productstr;