import React from 'react';

const LabResults = ({ patient }) => {
  const labs = patient.lab_results || [
    { name: 'CT Scan - Head', status: 'Available', active: true },
    { name: 'Blood Test - CBC', status: 'Pending', active: false },
    { name: 'X-Ray - Chest', status: 'Available', active: false },
  ];

  return (
    <div
      style={{
        position: 'absolute',
        top: '880px',
        left: '1215px',
        width: '367px',
        height: '296px',
        background: '#FFFFFF 0% 0% no-repeat padding-box',
        borderRadius: '16px',
        opacity: 1,
        padding: '1rem'
      }}
    >
      <h4 style={{ fontSize: '1.1rem', marginBottom: '1rem' }}>Lab Results</h4>
      <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
        {labs.map((lab, index) => (
          <li
            key={index}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '0.75rem 0.5rem',
              borderRadius: '8px',
              background: lab.active ? '#f4f0ff' : 'transparent',
              marginBottom: '0.5rem',
              fontWeight: lab.active ? '600' : '400',
            }}
          >
            <span>{lab.name}</span>
            <span style={{ color: '#888' }}>📥</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LabResults;
