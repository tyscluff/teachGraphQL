import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectUsers } from '../../redux/usersSlice';
import { Link } from 'react-router-dom';

const ViewUsersPage = () => {

  const [search, setSearch] = useState("");
  const users = useSelector(selectUsers);

  return (
    <div style={{ marginLeft: "2em", display: "flex", flexDirection: "column" }}>
      <h2>
        Users
      </h2>
      <input 
      placeholder='Find a User'
      style={{ width: "30%", height: "2em", borderRadius: "20px", border: "1px solid #D3D3D3", paddingLeft: "10px" }}
      onChange={e => setSearch(e.target.value)}
      />
      <div style={{ marginTop: "1em" }}>
        {users.map((user) => 
          <Link to={`/user/${user.id}`} key={user.id}>
            {user.handle}
          </Link>
        )}
      </div>
    </div>
  )
}

export default ViewUsersPage