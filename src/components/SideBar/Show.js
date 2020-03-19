import React, { useState, useEffect } from 'react'

function Show() {

    const [user, setUser] = useState({ firstName: "", lastName: "" })

    useEffect(() => {

        const data = JSON.parse(localStorage.getItem('User'))
        console.log(data.firstName)
        const { firstName, lastName } = data;
        setUser({
            ...user,
            firstName: firstName,
            lastName: lastName
        })


    })






    return (
        <div className="col-sm-5">
            <h3>
                Hello Show Data
            </h3>
            <small className="form-text text-dark">{user.firstName}</small>
            <small className="form-text text-dark">{user.lastName}</small>
        </div>
    )
}

export default Show;
