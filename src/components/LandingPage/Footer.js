import React from 'react';

function Footer() {
  return (
    <footer className="bg-primary-gradient" style={{background: 'linear-gradient(135deg, #f8faff, #fef7fd)'}}>
      <div className="container py-4 py-lg-5" >
      <div className="row justify-content-center">
          <div className="col-sm-4 col-md-3 text-center text-lg-start d-flex flex-column">
            <h3 className="fs-6 fw-bold">Services</h3>
            <ul className="list-unstyled">
            <li><span>Web design</span></li>
        <li><span>Development</span></li>
        <li><span>Hosting</span></li>
            </ul>
          </div>
          <div className="col-sm-4 col-md-3 text-center text-lg-start d-flex flex-column">
            <h3 className="fs-6 fw-bold">About</h3>
            <ul className="list-unstyled">
            <li><span>Company</span></li>
        <li><span>Team</span></li>
        <li><span>Legacy</span></li>
            </ul>
          </div>
          <div className="col-sm-4 col-md-3 text-center text-lg-start d-flex flex-column">
            <h3 className="fs-6 fw-bold">Careers</h3>
            <ul className="list-unstyled">
            <li><span>Job openings</span></li>
        <li><span>Employee success</span></li>
        <li><span>Benefits</span></li>
            </ul>
          </div>
          <div className="col-lg-3 text-center text-lg-start d-flex flex-column align-items-center order-first align-items-lg-start order-lg-last">
            <div className="fw-bold d-flex align-items-center mb-2">
              <span className="bs-icon-sm bs-icon-circle bs-icon-primary d-flex justify-content-center align-items-center bs-icon me-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" className="bi bi-bezier">
                  <path fillRule="evenodd" d="M0 10.5A1.5 1.5 0 0 1 1.5 9h1A1.5 1.5 0 0 1 4 10.5v1A1.5 1.5 0 0 1 2.5 13h-1A1.5 1.5 0 0 1 0 11.5zm1.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm10.5.5A1.5 1.5 0 0 1 13.5 9h1a1.5 1.5 0 0 1 1.5 1.5v1a1.5 1.5 0 0 1-1.5 1.5h-1a1.5 1.5 0 0 1-1.5-1.5zm1.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zM6 4.5A1.5 1.5 0 0 1 7.5 3h1A1.5 1.5 0 0 1 10 4.5v1A1.5 1.5 0 0 1 8.5 7h-1A1.5 1.5 0 0 1 6 5.5zM7.5 4a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5z"></path>
                  <path d="M6 4.5H1.866a1 1 0 1 0 0 1h2.668A6.517 6.517 0 0 0 1.814 9H2.5c.123 0 .244.015.358.043a5.517 5.517 0 0 1 3.185-3.185A1.503 1.503 0 0 1 6 5.5zm3.957 1.358A1.5 1.5 0 0 0 10 5.5v-1h4.134a1 1 0 1 1 0 1h-2.668a6.517 6.517 0 0 1 2.72 3.5H13.5c-.123 0-.243.015-.358.043a5.517 5.517 0 0 0-3.185-3.185z"></path>
                </svg>
              </span>
              <span>Memory</span>
            </div>
            <p className="text-muted">Sem eleifend donec molestie, integer quisque orci aliquam.</p>
          </div>
        </div>
        <hr />
        <div className="text-muted d-flex justify-content-between align-items-center pt-3">
          <p className="mb-0">Copyright © 2024 Memory</p>
          <ul className="list-inline mb-0">
            <li className="list-inline-item">
              <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" className="bi bi-facebook">
                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"></path>
              </svg>
            </li>
            <li className="list-inline-item">
              <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" className="bi bi-twitter">
                <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115c-.21 0-.417-.02-.615-.058a3.283 3.283 0 0 0 3.067 2.279A6.588 6.588 0 0 1 0 13.026a9.29 9.29 0 0 0 5.031 1.475"></path>
              </svg>
            </li>
            <li className="list-inline-item">
              <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" className="bi bi-instagram">
                <path d="M8 0c2.175 0 2.446.008 3.299.048.852.04 1.43.176 1.947.37a4.092 4.092 0 0 1 1.485.962 4.086 4.086 0 0 1 .962 1.485c.194.516.33 1.095.37 1.947.04.853.048 1.124.048 3.299 0 2.174-.008 2.445-.048 3.298-.04.852-.176 1.43-.37 1.947a4.086 4.086 0 0 1-.962 1.485 4.086 4.086 0 0 1-1.485.962c-.516.194-1.095.33-1.947.37-.853.04-1.124.048-3.299.048-2.174 0-2.445-.008-3.298-.048-.853-.04-1.431-.176-1.947-.37a4.086 4.086 0 0 1-1.485-.962 4.086 4.086 0 0 1-.962-1.485c-.194-.516-.33-1.095-.37-1.947C.008 10.445 0 10.174 0 8c0-2.175.008-2.446.048-3.299.04-.852.176-1.43.37-1.947a4.086 4.086 0 0 1 .962-1.485 4.086 4.086 0 0 1 1.485-.962c.516-.194 1.095-.33 1.947-.37C5.555.008 5.826 0 8 0zm0 1.46c-2.145 0-2.398.008-3.243.047-.783.037-1.208.166-1.49.276a2.637 2.637 0 0 0-.948.616 2.627 2.627 0 0 0-.615.948c-.11.282-.239.707-.276 1.49-.04.845-.047 1.098-.047 3.243 0 2.144.008 2.398.047 3.243.037.783.166 1.208.276 1.49.132.347.31.668.615.948.28.28.6.484.948.615.282.11.707.239 1.49.276.845.04 1.098.047 3.243.047 2.144 0 2.398-.008 3.243-.047.783-.037 1.208-.166 1.49-.276a2.64 2.64 0 0 0 1.563-1.563c.11-.282.239-.707.276-1.49.04-.845.047-1.098.047-3.243 0-2.144-.008-2.398-.047-3.243-.037-.783-.166-1.208-.276-1.49a2.64 2.64 0 0 0-1.563-1.563c-.282-.11-.707-.239-1.49-.276-.845-.04-1.098-.047-3.243-.047zM8 3.892a4.108 4.108 0 1 0 0 8.216 4.108 4.108 0 0 0 0-8.216zM8 10.78A2.78 2.78 0 1 1 8 5.22a2.78 2.78 0 0 1 0 5.56zm5.214-6.937a.96.96 0 1 1-1.92 0 .96.96 0 0 1 1.92 0z"></path>
              </svg>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
