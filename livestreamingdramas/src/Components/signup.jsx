import { useState } from "react";
import axios from "axios";

// bootstrap
import "bootstrap/dist/css/bootstrap.css";

const SignUp = () => {
  //array
  const YourCurrency = [
    {
      value: "USD",
      label: "$",
    },
    {
      value: "EUR",
      label: "€",
    },
    {
      value: "JPY",
      label: "¥",
    },
  ];
  // state
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("");
  const [currency, setCurrency] = useState("");

  // handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      firstName,
      lastName,
      email,
      password,
      gender,
      currency,
    };
    await axios({
      url: "/api/save",
      method: "POST",
      data: payload,
    })
      .then(() => {
        alert("Data has been sent to Server");
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <div className="container">
        <form onSubmit={handleSubmit}>
          {/* name */}
          <div className="form-group">
            <label htmlFor="first-name">First Name</label>
            <input
              type="text"
              name="first-name"
              className="form-control"
              id="first-name"
              aria-describedby="emailHelp"
              placeholder="Enter First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="last-name">Last Name</label>
            <input
              type="text"
              name="last-name"
              className="form-control"
              id="last-name"
              aria-describedby="emailHelp"
              placeholder="Enter Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>

          {/* email */}
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              name="email"
              className="form-control"
              id="email"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* password */}
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              className="form-control"
              id="password"
              aria-describedby="emailHelp"
              placeholder="Enter Name"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {/* gender */}
          <div className="form-group">
            <label
              htmlFor="gender"
              name="gender"
              className="col-sm-2 control-label"
            >
              Gender
            </label>

            <select
              className="form-control inputstl"
              name="gender"
              value={gender}
              id="gender"
              onChange={(e) => setGender(e.target.value)}
            >
              <option>Male</option>
              <option>Female</option>
            </select>
          </div>

          {/* currency */}
          <div className="form-group">
            <label htmlFor="currency">Currency</label>
            <select
              id="currency"
              onChange={(e) => setCurrency(e.target.value)}
              value={currency}
            >
              {YourCurrency.map((item) => {
                return (
                  <option key={item.value} value={item.value}>
                    {item.text}
                    {item.label}
                  </option>
                );
              })}
            </select>
          </div>

          <button
            type="submit"
            style={{ cursor: "pointer" }}
            onClick={handleSubmit}
            className="btn btn-primary"
            disabled={
              !firstName || !lastName || !currency || !email || !password
            }
          >
            Sumbit
          </button>
        </form>
      </div>
    </>
  );
};

export default SignUp;
