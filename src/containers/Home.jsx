import React from "react";
import { useDispatch } from "react-redux";
import { logoutAsync } from "../redux/actions/actionRegister";
import Button from '@mui/material/Button';


const Home = () => {
  const dispatch = useDispatch();
  return (
    <>
      home
      <div>
        <Button
          href="/"
          onClick={() => dispatch(logoutAsync())}
        >
          Logout
        </Button>
      </div>
    </>
  );
};

export default Home;
