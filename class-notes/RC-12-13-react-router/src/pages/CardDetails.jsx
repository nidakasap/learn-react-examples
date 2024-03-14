import React from "react";
import { useParams } from "react-router-dom";

const CardDetails = () => {
  const { name } = useParams();
  console.log(name);
  return <div></div>;
};

export default CardDetails;
