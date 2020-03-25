import React, { useState } from 'react';
import './login.css';
import { Link, useHistory } from 'react-router-dom';



function Login({ name, password }) {
    const [user, setUser] = useState({ name: "", password: "" })
    let history = useHistory();

    const onFormSubmit = e => {
        e.preventDefault();
        console.log(user)
        console.log(name)
        console.log(password)
    }

    return (

        <div className="" id="loginBg" >

            <div className="col-sm-5" id="leftContent" >
                <h1 className="display-1 text-white" style={{ fontFamily: "'Bebas Neue', cursive" }}>Lo<span style={{ color: "#c72c41" }}>g</span>in</h1>
                <h1 className="display-4" style={{ fontFamily: "'Poiret One', cursive", color: "#3a3535" }}>Lorem ipsum dolor sit amet <span style={{ color: "#fff" }}>consectetur</span> adipisicing elit.</h1>
            </div>
            <div className="col-sm-5" id="formHolder">

                <form onSubmit={onFormSubmit}>
                    <div className="form-group">
                        <label htmlFor="" className="text-white">User Name</label>
                        <input type="text" value={user.name} onChange={e => setUser({ ...user, name: e.target.value })} className="form-control" id="userNameInputOne" placeholder="Enter User Name" />

                    </div>
                    <div className="form-group">
                        <label htmlFor="" className="text-white">Password</label>
                        <input type="password" value={user.password} onChange={e => setUser({ ...user, password: e.target.value })} className="form-control" id="userNameInputTwo" placeholder="Enter Password" />

                    </div>


                    <div className="d-flex justify-content-center" >

                        <button onClick={() => history.push("/dashboard")} className="btn mb-3" id="loginBtn" style={{ borderRadius: "50px", minWidth: "100px" }}>Login</button>

                        {/* <Link to="/dashboard" className="btn mb-3" id="loginBtn" style={{ borderRadius: "50px", minWidth: "100px" }}>Login</Link> */}
                    </div>

                </form>
            </div>
        </div>


    )
}

export default Login
