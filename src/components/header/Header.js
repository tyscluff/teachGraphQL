import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px gray solid", position: "absolute", top: 0, zIndex: 1, height: "75px" }}>
            <div style={{ marginLeft: "2em" }}>
                <h1>
                    GraphQL Twitter
                </h1>
            </div>
            <div style={{ display: "flex", marginRight: "2em", width: "25%", justifyContent: "space-around" }}>
                <Link to="/" style={{ color: "black", textDecoration: "none" }}>
                    Tweets
                </Link>
                <Link to="/users" style={{ color: "black", textDecoration: "none" }}>
                    Users
                </Link>
                <Link to="/createUser" style={{ color: "black", textDecoration: "none" }}>
                    Create User
                </Link>
            </div>
        </div>
    )
}

export default Header