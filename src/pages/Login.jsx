import React, { useContext } from "react";
import InputSearch from "../Components/UI/InputSearch/InputSearch";
import Button from "../Components/UI/Button/Button";

const Login = () => {
  return (
    <div className="login">
      <h1>Authorization</h1>
      <form>
        <InputSearch type="text" placeholder="Login..." />
        <InputSearch type="text" placeholder="Password..." />
        <Button>To come in</Button>
      </form>
    </div>
  );
};

export default Login;
