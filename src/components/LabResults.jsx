import React from 'react';

const LabResults = ({ patient }) => {
  const items = [
    'Blood Tests',
    'CT Scans',
    'Radiology Reports',
    'X-Rays',
    'Urine Tests'
  ];

  return (
    <div
      style={{
        position: 'absolute',
        top: '780px',
        left: '1176px',
        width: '205px',
        height: '210px',
        background: '#FFFFFF 0% 0% no-repeat padding-box',
        borderRadius: '16px',
        opacity: 1,
        padding: '1rem'
      }}
    >
      <div style={{
        position: 'absolute',
        right: '0px',
        top: '60%',
        transform: 'translateY(0%)',
        width: '6px',
        height: '80px',
        background: '#E3E4E6 0% 0% no-repeat padding-box',
        borderRadius: '3px',
        opacity: 1,
        zIndex: 0
      }} />
      <div style={{
        position: 'absolute',
        right: '0px',
        top: '50%',
        transform: 'translateY(-50%)',
        width: '6px',
        height: '51px',
        background: '#072635 0% 0% no-repeat padding-box',
        borderRadius: '3px',
        opacity: 1,
        zIndex: 2
      }} />
      <h4 style={{ 
        fontFamily: "'Manrope', sans-serif",
        fontWeight: 800,
        fontSize: '22px',
        marginBottom: '1rem',
        marginTop: '0'
      }}>Lab Results</h4>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
        {items.map((item, index) => (
          <div
            key={index}
            style={{
              fontFamily: "'Manrope', sans-serif",
              fontWeight: 400,
              fontSize: '13px',
              color: '#072635',
              display: 'flex',
              justifyContent: 'flex-start',
              alignItems: 'center',
              background: item === 'CT Scans' ? '#F6F7F8 0% 0% no-repeat padding-box' : 'transparent',
              opacity: 1,
              padding: item === 'CT Scans' ? '0.75rem 0.5rem 0.75rem 0.75rem' : '0.15rem',
              borderRadius: item === 'CT Scans' ? '8px' : '0',
              width: '100%',
              position: 'relative',
              marginLeft: item === 'CT Scans' ? '-0.5rem' : '0'
            }}
          >
            {item === 'CT Scans' && (
              <div style={{
                position: 'absolute',
                left: '-2rem',
                top: 0,
                bottom: 0,
                right: '0.5rem',
                background: '#F6F7F8 0% 0% no-repeat padding-box',
                borderRadius: '8px',
                zIndex: -1
              }} />
            )}
            <span style={{ flex: 1, marginLeft: item === 'CT Scans' ? '0rem' : '0' }}>{item}</span>
            <img 
              src="/src/img/download_FILL0_wght300_GRAD0_opsz24 (1).svg" 
              alt="download"
              style={{
                width: '16px',
                height: '16px',
                marginLeft: item === 'CT Scans' ? '-1rem' : '-1rem',
                position: 'relative',
                right: item === 'CT Scans' ? '0.1rem' : '0'
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LabResults;
