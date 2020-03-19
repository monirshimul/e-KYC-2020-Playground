import React, { useState } from 'react';
import './login.css';



function Login() {
    const [user, setUser] = useState({ name: "", password: "" })

    const onFormSubmit = e => {
        e.preventDefault();
        console.log(user)
    }

    return (

        <div className="" id="loginBg" >

            <div className="col-sm-5" id="leftContent" >
                <h1 className="display-1 text-white" style={{ fontFamily: "'Bebas Neue', cursive" }}>Lo<span style={{ color: "#b7472a" }}>g</span>in</h1>
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

                        <button className="btn mb-3" id="loginBtn" style={{ borderRadius: "50px", minWidth: "100px" }}>Login</button>
                    </div>

                </form>
            </div>
        </div>


    )
}

export default Login
