import React from 'react';

const PatientInfo = ({ patient }) => {
  const infoItem = (label, value) => (
    <div style={{ marginBottom: '0.75rem' }}>
      <div style={{ fontSize: '0.85rem', color: '#888' }}>{label}</div>
      <div style={{ fontWeight: '500', fontSize: '1rem' }}>{value}</div>
    </div>
  );

  return (
    <div
      style={{
        position: 'absolute',
        top: '108px',
        left: '1216px',
        width: '367px',
        height: '740px',
        background: '#FFFFFF 0% 0% no-repeat padding-box',
        borderRadius: '16px',
        opacity: 1,
        padding: '1.5rem',
        textAlign: 'center'
      }}
    >
      <img
        src={patient.profile_picture}
        alt={patient.name}
        style={{ width: '80px', height: '80px', borderRadius: '50%', marginBottom: '1rem' }}
      />
      <h3 style={{ fontSize: '1.25rem', fontWeight: '600' }}>{patient.name}</h3>
      <p style={{ fontSize: '0.9rem', color: '#777' }}>{patient.age} years old</p>

      <div style={{ marginTop: '1.5rem', textAlign: 'left' }}>
        {infoItem('Date of Birth', patient.date_of_birth)}
        {infoItem('Gender', patient.gender)}
        {infoItem('Phone Number', patient.phone_number)}
        {infoItem('Emergency Contact', patient.emergency_contact)}
        {infoItem('Insurance Type', patient.insurance_type)}
      </div>

      <button
        style={{
          marginTop: '1rem',
          padding: '0.5rem 1rem',
          borderRadius: '8px',
          border: 'none',
          background: '#7879f1',
          color: '#fff',
          fontWeight: '500',
          cursor: 'pointer',
        }}
      >
        Show All Information
      </button>
    </div>
  );
};

export default PatientInfo;
