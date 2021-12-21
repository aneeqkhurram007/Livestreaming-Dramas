import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";
import { useHistory } from "react-router-dom";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  function check() {
    var a = document.getElementById("email").value;
    var b = document.getElementById("password").value;
    var atposition = a.indexOf("@");
    var dotposition = a.lastIndexOf(".");
    if (a === "" && b === "") {
      alert("The form cant be empty");
      return false;
    } else if (b.length < 6) {
      alert("Password must be at least 6 characters long.");
      return false;
    } else if (
      atposition < 1 ||
      dotposition < atposition + 2 ||
      dotposition + 2 >= a.length
    ) {
      alert(
        "Please enter a valid e-mail address \n atpostion:" +
          atposition +
          "\n dotposition:" +
          dotposition
      );
      return false;
    } else return true;
  }

  const submit = async (e) => {
    e.preventDefault();

    if (check()) {
      //will prevent from reloading

      //scrud operator to store all data of users
      const payload = {
        email,
        password,
      };
      await axios({
        url: "/api/login",
        method: "POST",
        data: payload,
      }).then((res) => {
        alert(res.data.message);
        if (res.data.message === "Login Successful") history.replace("/");
      });
    }
  };
  return (
    <>
      <div className="bg-img">
        <form className="container" onSubmit={submit}>
          <p>
            <label id="emailLabel">Email</label>
            <input
              type="text"
              name="email"
              id="email"
              autoComplete="off"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </p>
          <p>
            <label id="passwordLabel">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              autoComplete="off"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </p>{" "}
          <br></br>
          <Button
            id="button"
            variant="contained"
            color="primary"
            type="submit"
            onClick={submit}
          >
            login
          </Button>
        </form>
      </div>
    </>
  );
};

export default Login;
