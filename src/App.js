import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/LandingPage/Layout';
import Header  from './components/LandingPage/Header';
import Services from './components/LandingPage/Services';
import RoleChooseComponent from './components/Auth/RoleChooseComponenet';
import Testimonials from './components/LandingPage/Testimonials';
import RegisterPatient from './components/Auth/RegisterPatientComponenet';
import Login from './components/Auth/Login';
import RegisterCareGiver from './components/Auth/RegisterCareGiverComponent';
import PatientHomePage from './components/Patient/PatientHome';
import PatientNavBar from './components/Patient/PatientNavBar';
import Footer from './components/LandingPage/Footer';
import CareGiverHomePage from './components/CareGiver/CareGiverHome';
import MedicalFollowUp from './components/Patient/MedicalFollowUp';
import CareGiverNavbar from './components/CareGiver/CareGiverNavbar';
import SuiviMedical from './components/CareGiver/SuiviMedical';
import SudokuGame from './components/games/SudokuGame';
import PatientLocation from './components/Patient/PatientLocation';
import SoutienAffectif from './components/Patient/SoutienAffectif';
import CareGiverLogin from './components/Auth/LoginCG';
import CareGiverLocation from './components/CareGiver/CareGiverLocation';
import RelativesPage from './components/Patient/RelativesPage';
import 'bootstrap-icons/font/bootstrap-icons.css';

function App() {
  return (
    <Router>
  <Routes>
    <Route path="/login" element={<Layout><Login /></Layout>} />
    <Route path="/login-caregiver" element={<Layout><CareGiverLogin /></Layout>} />
    
    <Route path="/role-choose" element={<Layout><RoleChooseComponent /></Layout>} />
    <Route path="/register-patient" element={<Layout><RegisterPatient /></Layout>} />
    <Route path="/register-caregiver" element={<Layout><RegisterCareGiver /></Layout>} />

    <Route path="/" element={
      <Layout>
        <>
          <Header />
          <Services />
          <Testimonials />
        </>
      </Layout>
    } />
    
    <Route path="/patient-home" element={<div><PatientNavBar /><PatientHomePage /><Footer/> </div>} />
    <Route path="/suivi-medical" element={<div><PatientNavBar /><SuiviMedical /><Footer/> </div>} />
    <Route path="/suivi-direct" element={<div><PatientNavBar /><PatientLocation /><Footer/> </div>} />
    <Route path="/soutien-affectif" element={<div><PatientNavBar /><SoutienAffectif /><Footer/> </div>} />
    <Route path="/relatives-page" element={<div><PatientNavBar /><RelativesPage /><Footer/> </div>} />


    <Route path="/caregiver-home" element={<div><CareGiverNavbar /><CareGiverHomePage /><Footer/> </div>} />
    <Route path="/suivi-medicalCG" element={<div><CareGiverNavbar /><SuiviMedical /><Footer/> </div>} />
    <Route path="/track-patient" element={<div><CareGiverNavbar /><CareGiverLocation /><Footer/> </div>} />

    <Route path="/caregiver-followUp" element={<div><CareGiverNavbar /><SuiviMedical /><Footer/> </div>} />
    <Route path="/soduko" element={<SudokuGame />} />

    {/* other routes */}
  </Routes>
</Router>
  );
}

export default App;