import React from "react";
import "../../App.css";
import reactLogo from "../../assets/react.svg";

const Navbar = () => {
  return (
    <div className="navbar bg-black text-white flex justify-center align-middle py-2 gap-5">
      <img src={reactLogo} className="App-logo h-16" alt="logo" />
      <h1 className="text-3xl font-bold my-auto">IE Solver</h1>
    </div>
  );
};

export default Navbar;
