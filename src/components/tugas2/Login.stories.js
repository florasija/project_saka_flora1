import React from "react";
import { Login } from "./Login";

export default {
  title: "Components/Login",
  component: Login,
};

export const Default = () => (
  <Login onSubmit={(username, password) => alert(`Logged in with: ${username}`)} />
);
