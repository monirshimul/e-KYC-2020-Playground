import React, { Component } from 'react'

class Success extends Component {
    render() {
        const { values } = this.props;
        return (
            <div className="col-sm-6">

                <div className="col text-center" style={{ boxShadow: "0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)" }}>
                    <h2 className="form-text text-muted">Thank You...{values.firstName} {values.lastName}</h2>
                </div>

            </div>
        )
    }
}

export default Success
