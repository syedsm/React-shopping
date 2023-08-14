import { useContext, useState } from "react";
import { Contextapi } from "./Contextapi";
import { Link, useNavigate } from "react-router-dom";

function Header() {
    const { loginname,setloginname,cart } = useContext(Contextapi)
    let navigate = useNavigate()
    function handlelogout(e) {
        setloginname(localStorage.removeItem('loginname'))
        navigate('/')
    }
    return (
        <section id="header">
            {loginname ?

                <div className="container">
                    <div className="row">
                        <div className="col-md-4"><h2>Welcome      {loginname}</h2></div>
                        <div className="col-md-8">
                           <Link to='/userproduct'><button className="btn btn-success me-2">products</button></Link>
                           <Link to='/cart'><button className="btn btn-warning me-2">Cart -{!cart.totalItems?0:cart.totalItems}</button></Link>

                        <button className="btn btn-danger me-2" onClick={(e) => { handlelogout(e) }}>Logout</button> </div>
                    </div>
                </div>
                :
                <></>
            }
        </section>

    );
}

export default Header;