import React from 'react';
import { Link, BrowserRouter as Router, useHistory } from 'react-router-dom'
import './css/simple-sidebar.css'
import { routes } from './DynamicRoutes/AllRoutes';



function Sidebar() {
    let history = useHistory();

    routes.map(r => console.log(r.path))

    return (
        <Router>
            <div className="">
                <div className=" border-right" id="sidebar-wrapper" style={{ margin: "0", padding: "0", background: "#099e96", color: "#fff" }}>
                    <div className="sidebar-heading">Choose Options </div>
                    {routes.map((route, index) => (

                        <div className="list-group list-group-flush" key={index} >
                            <button className="btn btn-info" onClick={() => history.push("/Basic")}>Use</button>
                            <Link to={route.path} className="list-group-item list-group-item-action " style={{ background: "#099e96", color: "#fff" }}>{route.featureName}</Link>
                        </div>

                    ))}

                </div>
            </div>
        </Router>


    )
}

export default Sidebar
