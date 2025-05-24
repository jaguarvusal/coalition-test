import React from 'react';

const PatientInfo = ({ patient }) => {
  const infoItem = (label, value, icon) => (
    <div style={{ marginBottom: '1.75rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
      {icon && <img src={icon} alt={label} style={{ width: '38px', height: '38px', marginLeft: '-12px' }} />}
      <div>
        <div style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 400, fontSize: '12px', color: '#888' }}>{label}</div>
        <div style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 700, fontSize: '12px' }}>{value}</div>
      </div>
    </div>
  );

  return (
    <div
      style={{
        position: 'absolute',
        top: '108px',
        left: '1176px',
        width: '187px',
        height: '600px',
        background: '#FFFFFF 0% 0% no-repeat padding-box',
        borderRadius: '16px',
        opacity: 1,
        padding: '1.5rem',
        textAlign: 'center'
      }}
    >
      <img
        src="/src/img/Layer 2@2x.png"
        alt={patient.name}
        style={{ width: '150px', height: '150px', borderRadius: '50%', marginBottom: '0.5rem' }}
      />
      <h3 style={{ 
        fontFamily: "'Manrope', sans-serif",
        fontWeight: 800,
        fontSize: '24px',
        marginBottom: '0.25rem',
        marginTop: '0'
      }}>{patient.name}</h3>

      <div style={{ marginTop: '2.5rem', textAlign: 'left' }}>
        {infoItem('Date of Birth', patient.date_of_birth, '/src/img/BirthIcon.svg')}
        {infoItem('Gender', patient.gender, '/src/img/FemaleIcon.svg')}
        {infoItem('Phone Number', patient.phone_number, '/src/img/PhoneIcon.svg')}
        {infoItem('Emergency Contact', patient.emergency_contact, '/src/img/PhoneIcon.svg')}
        {infoItem('Insurance Type', patient.insurance_type, '/src/img/InsuranceIcon.svg')}
      </div>

      <button
        style={{
          marginTop: '0.25rem',
          padding: '0.5rem 1rem',
          borderRadius: '41px',
          border: 'none',
          background: '#01F0D0',
          color: '#072635',
          fontFamily: "'Manrope', sans-serif",
          fontWeight: 700,
          fontSize: '14px',
          cursor: 'pointer',
          width: '100%'
        }}
      >
        Show All Information
      </button>
    </div>
  );
};

export default PatientInfo;
