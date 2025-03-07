import {
  Button,
  Card,
  CardBody,
  Form,
  FormGroup,
  Input,
  InputGroup,
  InputGroupText,
  Label,
} from "reactstrap";
import APP_LOGO from "/assets/images/APP_LOGO.svg";
import { useState } from "react";
import { errorToast, successToast } from "../../helpers";
import { useNavigate } from "react-router";

const Login = () => {
  const navigate = useNavigate();

  const [formFields, setFormFields] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  const _handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormFields({ ...formFields, [e.target.name]: e.target.value });
  };

  const _onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    if (e) e.preventDefault();

    if (formFields.email === "admin" && formFields.password === "admin") {
      localStorage.setItem("token", "token");
      successToast("Login successful");
      navigate("/");
    } else {
      console.log("herer");
      errorToast("Invalid credentials. Please try again.");
    }
  };

  return (
    <div
      id="login"
      style={{ height: "100vh" }}
      className="d-flex justify-content-center align-items-center"
    >
      <Card style={{ width: "25rem" }}>
        <div id="image_container" className="h-50 ">
          <img src={APP_LOGO} alt="Card image cap" />
        </div>
        <hr />

        <CardBody>
          <Form onSubmit={_onSubmit}>
            <FormGroup className="d-flex flex-column">
              <Label>Email/Username</Label>
              <Input
                type="text"
                id="email"
                name="email"
                className="form-control"
                onChange={_handleInputChange}
                value={formFields.email}
                placeholder="Email/Username"
                required
              />
            </FormGroup>
            <FormGroup className="d-flex flex-column">
              <Label>Password</Label>
              <InputGroup>
                <Input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  className="form-control"
                  onChange={_handleInputChange}
                  value={formFields.password}
                  placeholder="Password"
                  required
                />
                <InputGroupText onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? <i className="fa fa-eye" /> : <i className="fa fa-eye-slash" />}
                </InputGroupText>
              </InputGroup>
            </FormGroup>
            <FormGroup className="d-flex justify-content-center">
              <Button type="submit" color="primary" className="px-3">
                Login
              </Button>
            </FormGroup>
          </Form>
        </CardBody>
      </Card>
    </div>
  );
};

export default Login;
