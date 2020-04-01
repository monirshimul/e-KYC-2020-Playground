import React, { useState, useEffect } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import { routes } from './Routes';

function Show() {




    return (
        <Router>
            <div className="col-sm-5">

                <ul style={{ listStyleType: "none", padding: 0 }}>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/bubblegum">Bubblegum</Link>
                    </li>
                    <li>
                        <Link to="/shoelaces">Shoelaces</Link>
                    </li>
                </ul>

                <Switch>
                    {routes.map((route, index) => (
                        // You can render a <Route> in as many places
                        // as you want in your app. It will render along
                        // with any other <Route>s that also match the URL.
                        // So, a sidebar or breadcrumbs or anything else
                        // that requires you to render multiple things
                        // in multiple places at the same URL is nothing
                        // more than multiple <Route>s.
                        <Route
                            key={index}
                            path={route.path}
                            exact={route.exact}
                            children={<route.sidebar />}
                        />
                    ))}
                </Switch>
            </div>

        </Router>

    )
}

export default Show;
