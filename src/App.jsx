import React, { useEffect, useState } from 'react';
import Sidebar from './components/Sidebar';
import MainPanel from './components/MainPanel';
import PatientInfo from './components/PatientInfo';
import LabResults from './components/LabResults.jsx';
import Navbar from './components/Navbar';
import { fetchJessicaTaylor } from './api/fetchPatient';
import './index.css';

const App = () => {
  const [patient, setPatient] = useState(null);

  useEffect(() => {
    const getPatient = async () => {
      const data = await fetchJessicaTaylor();
      setPatient(data);
    };
    getPatient();
  }, []);

  if (!patient) return <div className="loading">Loading...</div>;

  return (
    <div className="app-container" style={{ 
      position: 'fixed',
      top: '0px',
      left: '0px',
      width: '100vw',
      height: '100vh',
      background: '#F6F7F8',
      opacity: 1,
      display: 'flex',
      overflow: 'auto'
    }}>
      <div style={{ minHeight: '155vh', width: '100%', display: 'flex' }}>
        <Navbar />
        <Sidebar patient={patient} />
        <main style={{ flex: 1, padding: '2rem' }}>
          <MainPanel patient={patient} />
        </main>
        <aside style={{ width: '300px', padding: '2rem', background: '#f9f9f9' }}>
          <PatientInfo patient={patient} />
          <LabResults patient={patient} />
        </aside>
      </div>
    </div>
  );
};

export default App;
