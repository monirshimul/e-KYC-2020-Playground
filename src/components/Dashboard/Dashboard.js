import React from 'react'
import Sidebar from './Sidebar'
import Content from './Content'

import { BrowserRouter as Router } from 'react-router-dom'


function Dashboard() {
    return (
        <Router>
            <div className="d-flex" style={{ margin: "0", padding: "0", overflowX: "hidden" }}>
                <Sidebar />
                <Content />

            </div>
        </Router>

    )
}

export default Dashboard
