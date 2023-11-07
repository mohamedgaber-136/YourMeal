import React, { useEffect, useState } from "react";
import "./LoginForm.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import photo from "./pexels-terje-sollie-313700.jpg";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const navigate = useNavigate();

  let [user, setUser] = useState({});
  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("Data")));
  }, []);
  const Login = (event) => {
    event.preventDefault();
    for (let u of user) {
      if (
        event.target[0].value == u.email &&
        event.target[1].value == u.password
      ) {
        sessionStorage.setItem("userData", JSON.stringify(user));
        navigate("/");
      } else {
        console.log("noRight");
      }
    }
  };
  return (
    <div className="regGrandParent d-flex justify-content-center align-items-center">
      <div className="registerParen  overflow-hidden d-flex justify-content-center align-items-center">
        <div className="registerCard  d-flex flex-column flex-md-row">
          <div className="LoginForm bg-white  d-flex flex-column justify-content-center align-items-center">
            <h3>Login</h3>
            <Form
              onSubmit={Login}
              className="d-flex flex-column justify-content-center align-items-center"
            >
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Control
                  type="email"
                  placeholder="EmailAddress@g**.com"
                  className="bg-dark inputData"
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput2"
              >
                <Form.Control
                  type="password"
                  autoComplete="password"
                  placeholder="password"
                  className="bg-dark inputData "
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
              <Link className="mt-2" to={"/register"}>
                Register New Account
              </Link>
            </Form>
          </div>
          <div className="registerImgs ">
            <img src={photo} alt="registerImg" width={"100%"} height={"100%"} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default LoginForm;
