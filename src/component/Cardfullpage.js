import React from "react";
import { useNavigate } from "react-router-dom";

export default function Cardfullpage(props) {
  const { userId, id, title } = props;

  const navigate = useNavigate();

  return (
    <>
      <div className="mainDiv">
        <div className="userID">userID: {userId}</div>
        <div className="id">id:{id}</div>
        <p>Title : {title}</p>
        <button onClick={() => navigate(`/${id}`)}> Getproduct</button>
      </div>
    </>
  );
}
