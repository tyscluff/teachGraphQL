import React from 'react';
import { AiOutlineLike, AiOutlineDislike } from 'react-icons/ai';

const Tweet = ({ id, name, handle, content, likes }) => {
    return (
        <div style={{ border: "1px solid gray", borderRadius: "10px", padding: "10px", width: "500px", marginTop: "1em" }}>
            <p style={{ fontWeight: "bold", marginTop: "0px", marginBottom: "2px" }}>
                {name}
            </p>
            <p style={{ marginTop: "2px", marginBottom: "10px" }}>
                <em>
                    {handle}
                </em>
            </p>
            <p style={{ marginTop: "2px", marginBottom: "2px" }}>
                {content}
            </p>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <p>
                    Likes: {likes}
                </p>
                <div style={{ width: "12%", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <AiOutlineLike 
                    style={{ cursor: "pointer" }}
                    size={24} 
                    />
                    <AiOutlineDislike 
                    style={{ cursor: "pointer" }}
                    size={24} 
                    />
                </div>
            </div>
        </div>
    )
}

export default Tweet