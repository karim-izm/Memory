import React, { useState, useEffect } from 'react';
import authService from '../../services/AuthService'; // Ensure the path is correct
import axios from 'axios'; // To fetch patients

function RegisterCaregiver() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    fullName: '',
    birthDate: '',
    email: '',
    phone: '',
    gender: 'male', // Default value
    user_id: '', // For selecting the patient
  });

  const [patients, setPatients] = useState([]);

  // Fetch patients when the component mounts
  useEffect(() => {
    const fetchPatients = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/users/patients'); // Adjust URL based on your backend
        setPatients(response.data); 
      } catch (error) {
        console.error("Error fetching patients", error);
      }
    };

    fetchPatients();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Pass the user_id (patient ID) along with the formData to registerCareGiver
      await authService.registerCareGiver(formData);
      alert('Caregiver registration successful!');
      // Optionally redirect to another page or clear form
    } catch (error) {
      alert('Caregiver registration failed. Please try again.');
    }
  };

  return (
    <div className="container py-5">
      <div className="row mb-4 mb-lg-5">
        <div className="col-md-8 col-xl-6 text-center mx-auto">
          <p className="fw-bold text-success mb-2">Sign up</p>
          <h2 className="fw-bold">Caregiver Registration</h2>
        </div>
      </div>
      <div className="row d-flex justify-content-center">
        <div className="col-md-6 col-xl-4">
          <div className="card">
            <div className="card-body text-center d-flex flex-column align-items-center">
              <form method="post" onSubmit={handleSubmit}>
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

                {/* Patient selection */}
                <div className="mb-3">
                  <select className="form-control" name="user_id" value={formData.user_id} onChange={handleChange}>
                    <option value="">Select a Patient</option>
                    {patients.map(patient => (
                      <option key={patient.id} value={patient.id}>
                        {patient.fullName} ({patient.username})
                      </option>
                    ))}
                  </select>
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterCaregiver;
