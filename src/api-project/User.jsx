import React from 'react'

const User = ({ avatar_url, login}) => {
  return (
    <div style={{ 
        display: "flex",
        flexDirection: "column", 
        width:"300px",
        height:"300px",
        padding: "10px",
        margin: 10,
        border: "1px solid #ddd",
        borderRadius: "10px",
        alignitems: "center",
        boxShadow: "0 2px 5px rgba(0,0,0,0.1)"
    }}>
        <img style={{width: "100%", borderradius: "10px"}}src={avatar_url} alt={login} />
        <p style={{fontSize: "20px", marginTop: "10px"}} >{login}</p>
    </div>
  );
};

export default User;