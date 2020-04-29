import React from "react";
import { useParams } from "react-router-dom";

const UserRoom = () => {
  let { owner } = useParams();
  return <div>{owner}'s room</div>;
};

export default UserRoom;
