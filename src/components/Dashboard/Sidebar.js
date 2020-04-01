import React from 'react';
import { BrowserRouter as Router, Switch, Route, useRouteMatch, Link } from 'react-router-dom'
import './css/simple-sidebar.css'
import { routes } from './DynamicRoutes/AllRoutes';




function Sidebar() {
    let { path, url } = useRouteMatch();


    routes.map(r => console.log(r.path))

    return (

        <div className=" border-right" id="sidebar-wrapper" style={{ margin: "0", padding: "0", background: "#099e96", color: "#fff" }}>


            {/* This is the place for sidebar with nested dropdown */}
            {routes.map((route, index) => (

                // <div className="list-group list-group-flush" key={index} >
                //     {/* <button className="btn btn-info" onClick={() => history.push("/Basic")}>Use</button> */}
                //     <Link to={`${url}${route.path}`} className="list-group-item list-group-item-action " style={{ background: "#099e96", color: "#fff" }}>{route.featureName}</Link>
                // </div>
                <div className="list-group list-group-flush" key={index} >

                    <div className="btn-group" role="group" aria-label="Button group with nested dropdown" >
                        <Link to={`${url}${route.path}`} className="list-group-item list-group-item-action" style={{ background: "#099e96", color: "#fff" }}>{route.featureName}</Link>
                        <div className="btn-group" role="group">
                            <Link id="btnGroupDrop2" style={{ background: "#099e96", color: "#fff", marginRight: "20px" }} className="list-group-item list-group-item-action dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"></Link>



                            {/* <div className="dropdown-menu" aria-labelledby="btnGroupDrop2" style={{ background: "#099e96" }}>
                                {route.nested.map((nest, ind) => (
                                    <Link key={ind} to={`${url}${route.path}`} className="dropdown-item" style={{ background: "#099e96", color: "#fff" }} to="#">{nest.featureName}</Link>

                                ))}
                            </div> */}


                            <div className="dropdown-menu" aria-labelledby="btnGroupDrop2" style={{ background: "#099e96" }}>
                                <Link className="dropdown-item" style={{ background: "#099e96", color: "#fff" }} to="#">Create User By Admin</Link>
                                <Link className="dropdown-item" style={{ background: "#099e96", color: "#fff" }} to="#">Update User</Link>
                                <div className="dropdown-divider"></div>
                                <Link className="dropdown-item" style={{ background: "#099e96", color: "#fff" }} to="#">Update User</Link>
                                <Link className="dropdown-item" style={{ background: "#099e96", color: "#fff" }} to="#">Create User By Admin</Link>
                                <div className="dropdown-divider"></div>
                                <Link className="dropdown-item" style={{ background: "#099e96", color: "#fff" }} to="#">Create User By Admin</Link>
                                <Link className="dropdown-item" style={{ background: "#099e96", color: "#fff" }} to="#">Update User</Link>
                            </div>
                        </div>
                    </div>
                </div>

            ))}

        </div>



    )
}

export default Sidebar
