import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Signup() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      const response = await axios.post(
        "http://localhost:3002/api/auth/signup",
        formData
      );

      console.log(response.data);

      // Save JWT
      localStorage.setItem(
        "token",
        response.data.token
      );

      // Save user
      localStorage.setItem(
        "user",
        JSON.stringify(response.data.user)
      );

      // Go to dashboard (separate app running on port 3001)
      window.location.href = `http://localhost:3001?token=${response.data.token}`;

    } catch (error) {

      console.log(error);

      setMessage(
        error.response?.data?.message ||
        "Signup failed"
      );
    }
  };


  return (
    <div className="container mt-5">

      <div className="row justify-content-center">

        <div className="col-md-5">

          <h2 className="text-center mb-4">
            Create your Zerodha account
          </h2>

          {message && (
            <div className="alert alert-danger">
              {message}
            </div>
          )}

          <form onSubmit={handleSubmit}>

            <div className="mb-3">

              <label>Name</label>

              <input
                type="text"
                name="name"
                className="form-control"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
              />

            </div>


            <div className="mb-3">

              <label>Email</label>

              <input
                type="email"
                name="email"
                className="form-control"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
              />

            </div>


            <div className="mb-3">

              <label>Password</label>

              <input
                type="password"
                name="password"
                className="form-control"
                placeholder="Enter password"
                value={formData.password}
                onChange={handleChange}
              />

            </div>


            <button
              type="submit"
              className="btn btn-primary w-100"
            >
              Sign Up
            </button>

          </form>


          <p className="text-center mt-3">

            Already have an account?

            <button
              className="btn btn-link"
              onClick={() => navigate("/login")}
            >
              Login
            </button>

          </p>

        </div>

      </div>

    </div>
  );
}

export default Signup;