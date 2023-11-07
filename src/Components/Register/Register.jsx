import "./Register.css";
import photo from "./pexels-life-of-pix-67468.jpg";
import Form from "react-bootstrap/Form";
import { userSchema } from "../Validations/UserValidtaion";
import { useDispatch, useSelector } from "react-redux";
import { adduser } from "../../Redux/userSlice";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  let x = useSelector((state) => state.user);
  let dispatch = useDispatch();
  const creatUse = async (event) => {
    event.preventDefault();
    let user = {
      name: event.target[0].value,
      email: event.target[1].value,
      password: event.target[2].value,
      FavMeals:[]
    };
    const isValid = await userSchema.isValid(user);
    if (isValid) {
      dispatch(adduser(user));
      navigate("/login");
    }
   

    
  };

 
  return (
    <div className="registerParen   overflow-hidden d-flex justify-content-center align-items-center">
      <div className="registerCard  d-flex flex-column flex-md-row">
        <div className="registerImg ">
          <img src={photo} alt="registerImg" width={"100%"} height={"100%"} />
        </div>
        <div className="RegisterForm bg-white  d-flex flex-column justify-content-center align-items-center">
          <h3>Register</h3>
          <Form
            onSubmit={creatUse}
            className="d-flex flex-column justify-content-center align-items-center p-2"
          >
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control
                type="text"
                placeholder="UserName"
                name="username"
                className="bg-dark inputData"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
              <Form.Control
                type="email"
                name="email"
                placeholder="EmailAddress@g**.com"
                className="bg-dark inputData"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
              <Form.Control
                type="password"
                name="password"
                placeholder="password"
                className="bg-dark inputData"
                autoComplete="password"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput4 ">
              <Form.Control
                type="submit"
                value={"submit"}
                className="bg-dark inputData"
              />
            </Form.Group>
          </Form>
        </div>
      </div>
    </div>
  );
};
export default Register;
