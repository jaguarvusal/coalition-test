import React from 'react';

const DiagnosticList = ({ diagnostics }) => {
  return (
    <div
      style={{
        position: 'absolute',
        top: '750px',
        left: '407px',
        width: '715px',
        height: '240px',
        background: '#FFFFFF 0% 0% no-repeat padding-box',
        borderRadius: '16px',
        opacity: 1,
        padding: '1rem',
        overflow: 'hidden'
      }}
    >
      <h2 style={{ 
        fontFamily: "'Manrope', sans-serif",
        fontWeight: 800,
        fontSize: '22px',
        marginBottom: '1rem',
        marginTop: '0.5rem',
        marginLeft: '0.5rem'
      }}>Diagnostic List</h2>

      <div style={{
        position: 'absolute',
        right: '20px',
        top: '130px',
        width: '6px',
        height: '77.5px',
        background: '#072635 0% 0% no-repeat padding-box',
        borderRadius: '3px',
        opacity: 1,
        zIndex: 2
      }} />

      <div style={{
        position: 'absolute',
        right: '20px',
        top: '207.5px',
        width: '6px',
        height: '77.5px',
        background: '#E3E4E6 0% 0% no-repeat padding-box',
        borderRadius: '3px',
        opacity: 1,
        zIndex: 1
      }} />

      <table style={{ 
        width: '100%', 
        borderCollapse: 'separate',
        borderSpacing: '0 8px',
        fontFamily: "'Manrope', sans-serif",
        fontSize: '13px',
        fontWeight: 400,
        tableLayout: 'fixed'
      }}>
        <thead>
          <tr style={{ 
            textAlign: 'left', 
            background: '#F6F7F8 0% 0% no-repeat padding-box',
            opacity: 1,
            borderRadius: '24px'
          }}>
            <th style={{ padding: '0.75rem 1rem', fontWeight: 700, borderRadius: '24px 0 0 24px', width: '35%', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>Problem/Diagnosis</th>
            <th style={{ padding: '0.75rem 1rem', fontWeight: 700, width: '45%', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>Description</th>
            <th style={{ padding: '0.75rem 1rem', fontWeight: 700, borderRadius: '0 24px 24px 0', width: '20%', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ padding: '0.75rem 1rem', fontWeight: 400, width: '35%', borderBottom: '1px solid #F6F7F8', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>Hypertension</td>
            <td style={{ padding: '0.75rem 1rem', fontWeight: 400, width: '45%', borderBottom: '1px solid #F6F7F8', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>Chronic high blood pressure</td>
            <td style={{ padding: '0.75rem 1rem', fontWeight: 400, width: '20%', borderBottom: '1px solid #F6F7F8', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>Under Observation</td>
          </tr>
          <tr>
            <td style={{ padding: '0.75rem 1rem', fontWeight: 400, width: '35%', borderBottom: '1px solid #F6F7F8', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>Type 2 Diabetes</td>
            <td style={{ padding: '0.75rem 1rem', fontWeight: 400, width: '45%', borderBottom: '1px solid #F6F7F8', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>Insulin resistance and elevated blood sugar</td>
            <td style={{ padding: '0.75rem 1rem', fontWeight: 400, width: '20%', borderBottom: '1px solid #F6F7F8', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>Cured</td>
          </tr>
          <tr>
            <td style={{ padding: '0.75rem 1rem', fontWeight: 400, width: '35%', borderBottom: '1px solid #F6F7F8', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>Asthma</td>
            <td style={{ padding: '0.75rem 1rem', fontWeight: 400, width: '45%', borderBottom: '1px solid #F6F7F8', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>Recurrent episodes of bronchial constriction</td>
            <td style={{ padding: '0.75rem 1rem', fontWeight: 400, width: '20%', borderBottom: '1px solid #F6F7F8', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>Inactive</td>
          </tr>
          <tr>
            <td style={{ padding: '0.75rem 1rem', fontWeight: 400, width: '35%', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>Osteoarthritis</td>
            <td style={{ padding: '0.75rem 1rem', fontWeight: 400, width: '45%', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>Degenerative joint disease</td>
            <td style={{ padding: '0.75rem 1rem', fontWeight: 400, width: '20%', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>Untreated</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default DiagnosticList;
