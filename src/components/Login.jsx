import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import Header from "./Header";

const Login = ({ auth }) => {
  const navigate = useNavigate();
  const onLogin = (e) => {
    auth.login(e.target.textContent).then((data) => goToHome(data.user.uid));
  };
  const goToHome = (userId) => {
    navigate("/contact", {
      state: { id: userId },
    });
  };
  // useEffect(() => {
  //   auth.onAuthChange((user) => {
  //     user && goToHome(user.uid);
  //   });
  // });
  return (
    <section>
      <Header />
      <div>
        <h1>Login</h1>
        <ul>
          <li>
            <button onClick={onLogin}>Google</button>
          </li>
          <li>
            <button onClick={onLogin}>Github</button>
          </li>
        </ul>
      </div>
    </section>
  );
};
export default Login;
