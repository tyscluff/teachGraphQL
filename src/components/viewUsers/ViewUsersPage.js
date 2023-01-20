import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useQuery, useLazyQuery, useMutation } from '@apollo/client';
import { selectUsers } from '../../redux/usersSlice';
import { Link } from 'react-router-dom';
import { GET_USER_BY_ID } from '../../queries/userQueries';

const ViewUsersPage = () => {

  const [search, setSearch] = useState("");
  const users = useSelector(selectUsers);
  const [fetchUser, { data, error, loading }] = useLazyQuery(GET_USER_BY_ID, { variables: {
    id: "63cb164a8c8919349f04179c"
  }});
  const [addUser] = useMutation(MY_MUTAITON);

  const getUser = async () => {
    const user = await fetchUser();
    console.log(user.data);
  };

  const callMutation = async () => {
    const user = await addUser({ variables: {
      name: "Bethany",
      handle: "@bethany"
    }})
  }

  return (
    <div style={{ marginLeft: "2em", display: "flex", flexDirection: "column" }}>
      <h2 onClick={() => getUser()}>
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