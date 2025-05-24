import React from 'react';
import BloodPressureChart from './BloodPressureChart';
import VitalsSummary from './VitalsSummary';
import DiagnosticList from './DiagnosticList';

const MainPanel = ({ patient }) => {
  return (
    <div>
      <section style={{ 
        position: 'absolute',
        top: '122px',
        left: '407px',
        width: '680px',
        height: '520px',
        background: '#FFFFFF 0% 0% no-repeat padding-box',
        borderRadius: '16px',
        opacity: 1,
        padding: '2rem'
      }}>
        <h2 style={{ 
          fontFamily: "'Manrope', sans-serif",
          fontWeight: 800,
          fontSize: '24px',
          marginBottom: '1rem',
          marginTop: '-1rem',
          marginLeft: '-0.5rem'
        }}>Diagnosis History</h2>
        <BloodPressureChart vitalSigns={patient.diagnosis_history} />
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Vitals</h2>
        <VitalsSummary vitalSigns={patient.diagnosis_history} />
      </section>

      <section>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Diagnostic List</h2>
        <DiagnosticList diagnostics={patient.diagnostic_list} />
      </section>
    </div>
  );
};

export default MainPanel;
