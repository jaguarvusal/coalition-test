import React from 'react';

const DiagnosticList = ({ diagnostics }) => {
  // Use dummy data if actual API data is missing or doesn't match
  const rows = diagnostics?.length
    ? diagnostics
    : [
        {
          name: 'Hypertension',
          description: 'High blood pressure condition.',
          status: 'Ongoing',
        },
        {
          name: 'Type 2 Diabetes',
          description: 'Chronic condition affecting glucose metabolism.',
          status: 'Controlled',
        },
        {
          name: 'Allergy - Pollen',
          description: 'Seasonal allergic reaction.',
          status: 'Resolved',
        },
      ];

  return (
    <div
      style={{
        position: 'absolute',
        top: '827px',
        left: '417px',
        width: '766px',
        height: '349px',
        background: '#FFFFFF 0% 0% no-repeat padding-box',
        borderRadius: '16px',
        opacity: 1,
        padding: '1rem'
      }}
    >
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ textAlign: 'left', borderBottom: '1px solid #ddd' }}>
            <th style={{ padding: '0.5rem' }}>Problem/Diagnosis</th>
            <th style={{ padding: '0.5rem' }}>Description</th>
            <th style={{ padding: '0.5rem' }}>Status</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((item, idx) => (
            <tr key={idx} style={{ borderBottom: '1px solid #f0f0f0' }}>
              <td style={{ padding: '0.5rem' }}>{item.name}</td>
              <td style={{ padding: '0.5rem' }}>{item.description}</td>
              <td style={{ padding: '0.5rem', color: '#4caf50' }}>{item.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DiagnosticList;
