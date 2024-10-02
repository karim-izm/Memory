import React from 'react';

function RoleChooseComponent() {
  return (
    <section className="py-5">
      <div className="container py-5">
        <div className="row mb-5">
          <div className="col-md-8 col-xl-6 text-center mx-auto">
            <h2 className="fw-bold">Register</h2>
            <p className="text-muted">
            Choisissez le type de compte que vous souhaitez créer pour continuer.
            </p>
          </div>
        </div>
        <div className="row g-0 row-cols-1 row-cols-md-2 row-cols-xl-3 d-flex align-items-md-center align-items-xl-center">
          <div className="col offset-xl-2 mb-4">
            <div className="card bg-body-tertiary border-light">
              <div className="card-body p-4">
                <div className="d-flex justify-content-between">
                  <div>
                    <h3 className="fw-bold mb-0">Patient</h3>
                    <p>CCréer un compte pour un patient atteint d'Alzheimer

</p>
                  </div>
                </div>
                <div>
                  <ul className="list-unstyled">
                    <li className="d-flex mb-2">
                      <span className="bs-icon-xs bs-icon-rounded bs-icon-primary-light bs-icon bs-icon-xs me-2">
                        <svg
                          className="bi bi-check-lg text-primary"
                          xmlns="http://www.w3.org/2000/svg"
                          width="1em"
                          height="1em"
                          fill="currentColor"
                          viewBox="0 0 16 16"
                        >
                          <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022"></path>
                        </svg>
                      </span>
                      <span>Suivi de la sécurité et des déplacements.
</span>
                    </li>
                    <li className="d-flex mb-2">
                      <span className="bs-icon-xs bs-icon-rounded bs-icon-primary-light bs-icon bs-icon-xs me-2">
                        <svg
                          className="bi bi-check-lg text-primary"
                          xmlns="http://www.w3.org/2000/svg"
                          width="1em"
                          height="1em"
                          fill="currentColor"
                          viewBox="0 0 16 16"
                        >
                          <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022"></path>
                        </svg>
                      </span>
                      <span>Notifications pour les rendez-vous et les prises de médicaments.
</span>
                    </li>
                    <li className="d-flex mb-2">
                      <span className="bs-icon-xs bs-icon-rounded bs-icon-primary-light bs-icon bs-icon-xs me-2">
                        <svg
                          className="bi bi-check-lg text-primary"
                          xmlns="http://www.w3.org/2000/svg"
                          width="1em"
                          height="1em"
                          fill="currentColor"
                          viewBox="0 0 16 16"
                        >
                          <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022"></path>
                        </svg>
                      </span>
                      <span>Support pour la gestion des soins quotidiens.</span>
                    </li>
                  </ul>
                </div>
                <button className="btn btn-primary d-block w-100" type="button" onClick={() => window.location.href = '/register-patient'}>
                    Register
                </button>
              </div>
            </div>
          </div>
          <div className="col mb-4">
            <div className="card text-white bg-primary">
              <div className="card-body p-4">
                <div className="d-flex justify-content-between">
                  <div>
                    <h3 className="fw-bold text-white mb-0">Accompagnant</h3>
                    <p>
                    Créer un compte en tant qu'aidant pour les patients atteints d'Alzheimer


                    </p>
                  </div>
                  <div></div>
                </div>
                <div>
                  <ul className="list-unstyled">
                    <li className="d-flex mb-2">
                      <span className="bs-icon-xs bs-icon-rounded bs-icon-semi-white bs-icon bs-icon-xs me-2">
                        <svg
                          className="bi bi-check-lg text-primary"
                          xmlns="http://www.w3.org/2000/svg"
                          width="1em"
                          height="1em"
                          fill="white"
                          viewBox="0 0 16 16"
                        >
                          <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022"></path>
                        </svg>
                      </span>
                      <span>Accès aux informations de santé du patient.
</span>
                    </li>
                    <li className="d-flex mb-2">
                      <span className="bs-icon-xs bs-icon-rounded bs-icon-semi-white bs-icon bs-icon-xs me-2">
                        <svg
                          className="bi bi-check-lg text-primary"
                          xmlns="http://www.w3.org/2000/svg"
                          width="1em"
                          height="1em"
                          fill="white"
                          viewBox="0 0 16 16"
                        >
                          <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022"></path>
                        </svg>
                      </span>
                      <span>Outils de gestion des soins et des tâches quotidiennes.
</span>
                    </li>
                    <li className="d-flex mb-2">
                      <span className="bs-icon-xs bs-icon-rounded bs-icon-semi-white bs-icon bs-icon-xs me-2">
                        <svg
                          className="bi bi-check-lg text-primary"
                          xmlns="http://www.w3.org/2000/svg"
                          width="1em"
                          height="1em"
                          fill="white"
                          viewBox="0 0 16 16"
                        >
                          <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022"></path>
                        </svg>
                      </span>
                      <span>Notifications en temps réel pour les situations critiques.
</span>
                    </li>
                  </ul>
                </div>
                <button
                    className="btn btn-primary d-block w-100 bg-white text-primary"
                    type="button"
                    onClick={() => window.location.href = '/register-caregiver'}
                    style={{
                        transition: "background-color 0.3s",
                        "&:hover": {
                            backgroundColor: "gray",
                        },
                    }}
                >
                    Register
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RoleChooseComponent;
