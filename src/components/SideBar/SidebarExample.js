import React, { useState } from 'react'

function SidebarExample() {
    const [name, setName] = useState({ firstName: '', lastName: '' })
    const onFormSubmit = e => {
        e.preventDefault()
        localStorage.setItem('User', JSON.stringify(name))

    }





    return (
        <div className="row d-flex justify-content-center align-items-center" style={{ height: "100vh", margin: "0 auto" }}>


            <div className="col-sm-5" id="" style={{ boxShadow: "0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)" }}>
                <h1 className="text-center text-dark" style={{ borderBottom: "1px dashed #666e76", paddingBottom: "5px" }}>Testing</h1>
                <form onSubmit={onFormSubmit} >
                    <div className="form-group">
                        <label htmlFor="" className="text-dark">First Name</label>
                        <input type="text" value={name.firstName} onChange={e => setName({ ...name, firstName: e.target.value })} className="form-control" id="" placeholder="Enter First Name" />
                        <small className="form-text text-dark">*Provide Your First Name</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="" className="text-dark">Last Name</label>
                        <input type="text" value={name.lastName} onChange={e => setName({ ...name, lastName: e.target.value })} className="form-control" id="" placeholder="Enter Last Name" />
                        <small className="form-text text-dark">*Provide Your Last Name</small>
                    </div>


                    <div className="d-flex justify-content-center" >

                        <button className="btn btn-success mb-3" id="" style={{ borderRadius: "50px", minWidth: "100px" }}>Submit</button>
                    </div>


                </form>

            </div>




        </div>
    )
}

export default SidebarExample
