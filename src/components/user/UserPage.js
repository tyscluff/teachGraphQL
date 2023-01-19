import React from 'react';
import { useParams } from 'react-router-dom';

const UserPage = () => {

  const { id } = useParams();

  return (
    <div style={{ marginLeft: "2em", marginTop: "7em" }}>
      <h2>
        Tyson Cluff
      </h2>
      <p>
        <em>
          @tyscluff
        </em>
      </p>
      <h3>
        Tweets
      </h3>
    </div>
  )
}

export default UserPage