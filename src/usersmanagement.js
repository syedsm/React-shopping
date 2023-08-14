import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";


function Usersmanag() {
    const [user, setuser] = useState([])
    const [status, setstatus] = useState([])
    const [message, setmessage] = useState('')
    const navigate = useNavigate()
    const { id } = useParams()
    useEffect(() => {
        fetch(`/api/usersfetch/${id}`).then((result) => { return result.json() }).then((data) => {
            // console.log(data)
            if (data.status === 200) {
                // console.log(data.record)
                setuser(data.record)
            } else {
                setmessage(data.message)
            }

        })
    }, [])
    function handle(id, currentStatus) {
        const newStatus = currentStatus === "active" ? "inactive" : "active";
        fetch(`/api/update/${id}`, {
            method: "PUT",
            body: JSON.stringify({ status: newStatus }), // Send the new status in the request body
            headers: { "Content-Type": "application/json" }
        }).then((result) => result.json()).then((data) => {
            console.log(data);
            if (data.status === 200) {
                // If the status was updated successfully, update the user's status in the UI
                setuser((prevUsers) =>
                    prevUsers.map((user) =>
                        user._id === id ? { ...user, status: newStatus } : user
                    )
                );
            }
        });
    }
    return (

        <div className="container">
            <div className="row justify-content-center">
                <h2 className="text-center">Users Management</h2>
                <p> {message}</p>
                <div className="col-md-10">
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th>S.no</th>
                                <th>Username</th>
                                <th>Password</th>
                                <th>Role</th>

                            </tr>
                        </thead>
                        <tbody>
                            {user.map((result, key) => (
                                <tr key={key}>
                                    <td>{key + 1}</td>
                                    <td>{result.username}</td>
                                    <td>{result.password}</td>
                                    <td>
                                        <button onClick={(e) => { handle(result._id, result.status) }}>
                                            {result.status === "active" ? "Deactive" : "active"}
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Usersmanag;