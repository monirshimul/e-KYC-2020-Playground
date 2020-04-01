import React, { useState, useEffect } from 'react';
import Navbar from './Nav';
import MultiForm from '../Multi-Form/UserForm'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch
} from "react-router-dom";
import { routes } from './DynamicRoutes/AllRoutes'


function Content() {
    const [AllRoutes, setAllRoutes] = useState(routes)
    console.log(AllRoutes)
    return (
        <Router>
            <div className="col" style={{ margin: "0", padding: "0" }}>

                <div className="container" style={{ marginTop: "100px" }}>

                    <div className=" row d-flex justify-content-between">
                        <Switch >
                            {AllRoutes.map((route, index) =>


                                <Route
                                    key={index}
                                    path={route.path}
                                    exact={route.exact}
                                    component={route.component}
                                />



                            )}
                        </Switch>
                    </div>



                </div>
            </div>
        </Router>






    )
}

export default Content
