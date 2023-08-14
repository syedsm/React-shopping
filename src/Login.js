import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Contextapi } from "./Contextapi";

function Login() {
    const [Username, setUsername] = useState('')
    const [Password, setPassword] = useState('')
    let [message, setmessage] = useState('')
    const navigate = useNavigate()
    const { setloginname } = useContext(Contextapi)
    function handlelogin(e) {
        e.preventDefault()
        const data = { Username, Password }
        fetch('/api/logincheck', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        }).then((result) => { return result.json() }).then((data) => {
            console.log(data)
            if (data.status === 201) {
                localStorage.setItem('loginname', data.apiData.username)
                setloginname(localStorage.getItem('loginname'))
                if (data.apiData.username === 'admin' || data.apiData.username === 'Syed') {
                    navigate('/dashboard')
                } else {
                    navigate('/userproduct')
                }
            } else {
                setmessage(data.message)
            }
        })
    }
    return (
        <section id="login">
            <div className="container">
                <div className="row ">
                    <div className="col-md-4">
                    </div>
                    <div className="col-md-4">
                        <h2>Login Here!</h2>
                        <h6>{message}</h6>
                        <form onSubmit={(e) => { handlelogin(e) }}>
                            <label>Enter Username</label>
                            <input type="text" className="form-control"
                                value={Username}
                                onChange={(e) => { setUsername(e.target.value) }} />
                            <label>Enter Password</label>
                            <input type="text" className="form-control"
                                value={Password}
                                onChange={(e) => { setPassword(e.target.value) }} />

                            <button type="submit" className="form-control mt-3 btn btn-info">Login</button>

                        </form>
                        <Link to='/reg'><button className="form-control btn btn-success mt-3">Create New Account</button></Link>
                    </div>
                    <div className="col-md-4">

                    </div>
                </div>
            </div>
        </section>);
}

export default Login;