import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addUser, selectUserGroupName } from '../../redux/usersSlice';

const CreateUserPage = () => {

    const [name, setName] = useState("");
    const [handle, setHanlde] = useState("");
    const userGroupName = useSelector(selectUserGroupName);

    const dispatch = useDispatch();

    const createUser = () => {
        dispatch(addUser({
            id: 2,
            name,
            handle
        }))
    };
    return (
        <div style={{ marginTop: "5em", marginLeft: "2em", display: "flex", flexDirection: "column" }}>
            <h2>
                {userGroupName}
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
            <button style={{ marginTop: "1em", width: "10%" }} onClick={() => createUser()}>
                Create User
            </button>
        </div>
    )
}

export default CreateUserPage