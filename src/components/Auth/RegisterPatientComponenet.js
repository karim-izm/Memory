import React, { useState } from 'react';
import authService from '../../services/AuthService'; // Adjust the import path as needed

function RegisterPatient() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    role: 'patient', // Default role
    fullName: '',
    birthDate: '',
    email: '',
    phone: '',
    gender: 'male', // Default gender
  });

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'file' ? files[0] : (type === 'checkbox' ? checked : value)
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await authService.register(formData); // Pass formData object directly
      alert('Registration successful!');
      // Optionally redirect to another page or clear form
    } catch (error) {
      alert('Registration failed. Please try again.');
    }
  };

  return (
    <div className="container py-5">
      <div className="row mb-4 mb-lg-5">
        <div className="col-md-8 col-xl-6 text-center mx-auto">
          <p className="fw-bold text-success mb-2">Sign up</p>
          <h2 className="fw-bold">Patient Registration</h2>
        </div>
      </div>
      <div className="row d-flex justify-content-center">
        <div className="col-md-6 col-xl-4">
          <div className="card">
            <div className="card-body text-center d-flex flex-column align-items-center">
              <div className="bs-icon-xl bs-icon my-4" style={{ width: '100px', height: '50px', background: 'transparent', border: 'none' }}>
                <svg
                  className="bi bi-person"
                  xmlns="http://www.w3.org/2000/svg"
                  width="50%"
                  height="50%"
                  fill="blue"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664z"></path>
                </svg>
              </div>
              <form method="post" data-bs-theme="light" style={{ paddingLeft: 0 }} onSubmit={handleSubmit}>
                <div className="mb-3">
                  <input className="form-control" type="text" name="username" placeholder="Username" value={formData.username} onChange={handleChange} />
                </div>
                <div className="mb-3">
                  <input className="form-control" type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} />
                </div>
                <div className="mb-3">
                  <input className="form-control" type="text" name="fullName" placeholder="Full Name" value={formData.fullName} onChange={handleChange} />
                </div>
                <div className="mb-3">
                  <input className="form-control" type="date" name="birthDate" value={formData.birthDate} onChange={handleChange} />
                </div>
                <div className="mb-3">
                  <input className="form-control" type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
                </div>
                <div className="mb-3">
                  <input className="form-control" type="tel" name="phone" placeholder="Telephone" value={formData.phone} onChange={handleChange} />
                </div>
                <div className="mb-3">
                  <div className="btn-group mb-3" role="group" aria-label="Basic radio toggle button group">
                    <input id="btnradio1" className="btn-check" type="radio" name="gender" value="male" autoComplete="off" checked={formData.gender === 'male'} onChange={handleChange} />
                    <label className="form-label btn btn-outline-primary" htmlFor="btnradio1">Male</label>
                    <input id="btnradio2" className="btn-check" type="radio" name="gender" value="female" autoComplete="off" checked={formData.gender === 'female'} onChange={handleChange} />
                    <label className="form-label btn btn-outline-primary" htmlFor="btnradio2">Female</label>
                  </div>
                </div>
                <button className="btn btn-primary shadow d-block w-100" type="submit">
                  Sign up
                </button>
              </form>
              <p className="text-muted mt-5">
                Already have an account? <a href="login.html">Log in</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterPatient;
