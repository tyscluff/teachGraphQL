import React, { useState } from 'react'

const CreateUserPage = () => {

    const [name, setName] = useState("");
    const [handle, setHanlde] = useState("");

    return (
        <div style={{ marginTop: "5em", marginLeft: "2em", display: "flex", flexDirection: "column" }}>
            <h2>
                Create a User
            </h2>
            <input 
            placeholder='name'
            style={{ width: "30%", height: "2em", borderRadius: "20px", border: "1px solid #D3D3D3", paddingLeft: "10px", marginBottom: "1em" }}
            onChange={e => setName(e.target.value)}
            />
            <input 
            placeholder='handle'
            style={{ width: "30%", height: "2em", borderRadius: "20px", border: "1px solid #D3D3D3", paddingLeft: "10px" }}
            onChange={e => setHanlde(e.target.value)}
            />
            <button style={{ marginTop: "1em", width: "10%" }}>
                Create User
            </button>
        </div>
    )
}

export default CreateUserPage