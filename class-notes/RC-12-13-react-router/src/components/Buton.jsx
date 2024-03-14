import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Buton = () => {
  const navigate = useNavigate();
  return (
    <div className="text-center">
      <Button
        className="btn btn-danger p-2 m-2"
        onClick={() => navigate("/login")}
      >
        Login
      </Button>
      <Button className="btn btn-danger p-2 m-2">Sign In</Button>
      <Button className="btn btn-danger p-2 m-2">XXXCVV</Button>
    </div>
  );
};

export default Buton;
