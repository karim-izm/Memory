import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import authService from "../../services/AuthService";

const CareGiverLogin = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [errorMessage, setErrorMessage] = useState(""); // For showing errors
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await authService.loginCareGiver(formData.username, formData.password);
      const { data } = response;
      console.log(data);
  
      sessionStorage.setItem('caregiver', JSON.stringify(data));
  
      // Navigate to the caregiver home
      navigate('/caregiver-home');
    } catch (error) {
      setErrorMessage(error.message);
    }
  };
  

  return (
    <section className="py-5">
      <div className="container py-5">
        <div className="row mb-4 mb-lg-5">
          <div className="col-md-8 col-xl-6 text-center mx-auto">
            <p className="fw-bold text-success mb-2">Caregiver Login</p>
            <h2 className="fw-bold">Welcome Back, Caregiver</h2>
          </div>
        </div>
        <div className="row d-flex justify-content-center">
          <div className="col-md-6 col-xl-4">
            <div className="card">
              <div className="card-body text-center d-flex flex-column align-items-center">
                <div className="bs-icon-xl bs-icon-circle bs-icon-primary bs-icon my-4">
                  <svg
                    className="bi bi-person"
                    height="15%"
                    xmlns="http://www.w3.org/2000/svg"
                    width="15%"
                    fill="blue"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664z"></path>
                  </svg>
                </div>
                <form method="post" data-bs-theme="light" onSubmit={handleSubmit}>
                  <div className="mb-3 w-100">
                    <input
                      className="form-control"
                      type="text"
                      name="username"
                      placeholder="Username"
                      value={formData.username}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-3 w-100">
                    <input
                      className="form-control"
                      type="password"
                      name="password"
                      placeholder="Password"
                      value={formData.password}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-3 w-100">
                    <button className="btn btn-primary shadow d-block w-100" type="submit">
                      Log in
                    </button>
                  </div>
                </form>
                {errorMessage && <p className="text-danger">{errorMessage}</p>}
                <p className="text-muted">Forgot your password?</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareGiverLogin;
