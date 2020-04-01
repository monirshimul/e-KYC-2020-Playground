import React, { useState, useEffect } from 'react'
import { routes } from './Routes'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

function SidebarExample() {

    const [route, setRoute] = useState(routes)

    console.log(route)




    return (
        <Router>
            <div className="row d-flex justify-content-center align-items-center" style={{ height: "100vh", margin: "0 auto" }}>


                <div className="col-sm-5" id="" style={{ boxShadow: "0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)" }}>
                    <h1 className="text-center text-dark" style={{ borderBottom: "1px dashed #666e76", paddingBottom: "5px" }}>Testing</h1>

                    <Switch>
                        {route.map((route, index) => (
                            // Render more <Route>s with the same paths as
                            // above, but different components this time.
                            <Route
                                key={index}
                                path={route.path}
                                exact={route.exact}
                                children={<route.main />}
                            />
                        ))}
                    </Switch>
                </div>




            </div>
        </Router>

    )
}

export default SidebarExample
