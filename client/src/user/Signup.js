import React, { useState } from "react";
import Base from "../core/Base";
import { Link } from "react-router-dom";
import { signup } from "../auth/helper";
import imageurl from "../assets/logo@3x.png";

const Signup = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    error: "",
    success: false,
  });

  const { name, email, password, error, success } = values;

  const handleChange = (name) => (event) => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, error: false });
    signup({ name, email, password })
      .then((data) => {
        if (data.error) {
          setValues({ ...values, error: data.error, success: false });
        } else {
          setValues({
            ...values,
            name: "",
            email: "",
            password: "",
            error: "",
            success: true,
          });
        }
      })
      .catch(console.log("Error in signup"));
  };

  const successMessage = () => (
    <div className="row">
      <div className="col-md-6 offset-sm-3 text-left ">
        <div
          className="alert alert-success"
          style={{ display: success ? "" : "none" }}
        >
          New account was created successfully. Please{" "}
          <Link to="/signin">Login Here</Link>
        </div>
      </div>
    </div>
  );
  const errorMessage = () => (
    <div className="row">
      <div className="col-md-6 offset-sm-3 text-left ">
        <div
          className="alert alert-danger"
          style={{ display: error ? "" : "none" }}
        >
          {error}
          <Link to="/sigin">Login Here</Link>
        </div>
      </div>
    </div>
  );

  const signUpForm = () => {
    return (
      <div className="row">
        <div className="col-md-6 offset-sm-3 text-left ">
          <form>
            <div className="form-group">
              <label className="text-muted">Name</label>
              <input
                className="form-control"
                type="text"
                value={name}
                onChange={handleChange("name")}
              />
            </div>
            <div className="form-group">
              <label className="text-muted">Email</label>
              <input
                className="form-control"
                type="email"
                value={email}
                onChange={handleChange("email")}
              />
            </div>
            <div className="form-group">
              <label className="text-muted">Password</label>
              <input
                className="form-control"
                type="password"
                value={password}
                onChange={handleChange("password")}
              />
            </div>
            <button className="btn btn-primary btn-block" onClick={onSubmit}>
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  };

  const logo = () => (
    <div>
      <img
        src={imageurl}
        alt="photo"
        style={{ maxHeight: "100%", maxWidth: "100%" }}
        className="mb-3 mx-auto d-block"
      />
    </div>
  );

  return (
    <Base title="Sign up page" description="A page for user to sign up">
      {successMessage()}
      {errorMessage()}
      {logo()}
      {signUpForm()}
    </Base>
  );
};

export default Signup;
