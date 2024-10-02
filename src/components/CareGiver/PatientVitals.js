import React, { useState, useEffect } from 'react';

const generateRandomVitals = () => ({
  heartRate: Math.floor(Math.random() * (100 - 60 + 1)) + 60, // Random heart rate between 60-100
  bloodPressure: `${Math.floor(Math.random() * (120 - 90 + 1)) + 90}/${Math.floor(Math.random() * (80 - 60 + 1)) + 60}`, // Random BP
  bodyTemperature: (Math.random() * (37.5 - 36.5) + 36.5).toFixed(1), // Random temp 36.5 - 37.5
  respiratoryRate: Math.floor(Math.random() * (20 - 12 + 1)) + 12, // Random resp rate between 12-20
  oxygenSaturation: Math.floor(Math.random() * (100 - 95 + 1)) + 95, // Random SpO2 between 95-100
});

const PatientVitals = () => {
  const [vitals, setVitals] = useState(generateRandomVitals());

  // Simulate IoT data by updating vitals every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setVitals(generateRandomVitals());
    }, 1000); // Update every 3 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div>
      <p><strong>Heart Rate:</strong> {vitals.heartRate} BPM</p>
      <p><strong>Blood Pressure:</strong> {vitals.bloodPressure} mmHg</p>
      <p><strong>Body Temperature:</strong> {vitals.bodyTemperature} °C</p>
      <p><strong>Respiratory Rate:</strong> {vitals.respiratoryRate} breaths/min</p>
      <p><strong>Oxygen Saturation:</strong> {vitals.oxygenSaturation} %</p>
      <div className="text-center">
      </div>
    </div>
  );
};

export default PatientVitals;
