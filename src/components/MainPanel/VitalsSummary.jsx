import React from 'react';

const VitalsSummary = ({ vitalSigns }) => {
  // Fallback values if API doesn't provide these directly
  const respiratoryRate = 20;
  const temperature = 98.6;
  const heartRate = 78;

  return (
    <div style={{ display: 'flex', gap: '1rem' }}>
      <div style={{ 
        position: 'absolute',
        top: '530px',
        left: '437px',
        width: '210px',
        height: '230px',
        background: '#E0F3FA 0% 0% no-repeat padding-box',
        borderRadius: '12px',
        opacity: 1,
        padding: '1rem 0 0 1rem',
        textAlign: 'center'
      }}>
        <img 
          src="/src/img/respiratory rate.svg" 
          alt="Respiratory Rate"
          style={{
            width: '96px',
            height: '96px',
            marginBottom: '0.5rem',
            marginLeft: '-7rem'
          }}
        />
        <h4 style={{
          fontFamily: "'Manrope', sans-serif",
          fontWeight: 500,
          fontSize: '16px',
          textAlign: 'left',
          marginLeft: '0rem',
          marginTop: '0.5rem'
        }}>Respiratory Rate</h4>
        <p style={{ 
          fontSize: '30px', 
          fontFamily: "'Manrope', sans-serif",
          fontWeight: 800,
          marginLeft: '0rem',
          textAlign: 'left',
          marginTop: '-1rem'
        }}>{respiratoryRate} bpm</p>
        <p style={{ 
          fontFamily: "'Manrope', sans-serif",
          fontWeight: 400,
          fontSize: '14px',
          color: '#072635',
          textAlign: 'left',
          marginLeft: '0rem',
          marginTop: '-0.75rem'
        }}>Normal</p>
      </div>
      <div style={{ 
        position: 'absolute',
        top: '530px',
        left: '687px',
        width: '210px',
        height: '230px',
        background: '#FFE6E9 0% 0% no-repeat padding-box',
        borderRadius: '12px',
        opacity: 1,
        padding: '1rem 0 0 1rem',
        textAlign: 'center'
      }}>
        <img 
          src="/src/img/temperature.svg" 
          alt="Temperature"
          style={{
            width: '96px',
            height: '96px',
            marginBottom: '0.5rem',
            marginLeft: '-7rem'
          }}
        />
        <h4 style={{
          fontFamily: "'Manrope', sans-serif",
          fontWeight: 500,
          fontSize: '16px',
          textAlign: 'left',
          marginLeft: '0rem',
          marginTop: '0.5rem'
        }}>Temperature</h4>
        <p style={{ 
          fontSize: '30px', 
          fontFamily: "'Manrope', sans-serif",
          fontWeight: 800,
          marginLeft: '0rem',
          textAlign: 'left',
          marginTop: '-1rem'
        }}>{temperature}°F</p>
        <p style={{ 
          fontFamily: "'Manrope', sans-serif",
          fontWeight: 400,
          fontSize: '14px',
          color: '#072635',
          textAlign: 'left',
          marginLeft: '0rem',
          marginTop: '-0.75rem'
        }}>Normal</p>
      </div>
      <div style={{ 
        position: 'absolute',
        top: '530px',
        left: '937px',
        width: '210px',
        height: '230px',
        background: '#FFE6F1 0% 0% no-repeat padding-box',
        borderRadius: '12px',
        opacity: 1,
        padding: '1rem 0 0 1rem',
        textAlign: 'center'
      }}>
        <img 
          src="/src/img/HeartBPM.png" 
          alt="Heart Rate"
          style={{
            width: '96px',
            height: '96px',
            marginBottom: '0.5rem',
            marginLeft: '-7rem'
          }}
        />
        <h4 style={{
          fontFamily: "'Manrope', sans-serif",
          fontWeight: 500,
          fontSize: '16px',
          textAlign: 'left',
          marginLeft: '0rem',
          marginTop: '0.5rem'
        }}>Heart Rate</h4>
        <p style={{ 
          fontSize: '30px', 
          fontFamily: "'Manrope', sans-serif",
          fontWeight: 800,
          marginLeft: '0rem',
          textAlign: 'left',
          marginTop: '-1rem'
        }}>{heartRate} bpm</p>
        <p style={{ 
          fontFamily: "'Manrope', sans-serif",
          fontWeight: 400,
          fontSize: '14px',
          color: '#072635',
          textAlign: 'left',
          marginLeft: '0rem',
          marginTop: '-0.75rem',
          display: 'flex',
          alignItems: 'center',
          gap: '4px'
        }}>
          <img 
            src="/src/img/ArrowDown.svg" 
            alt="arrow down"
            style={{
              width: '10px',
              height: '5px'
            }}
          />
          Lower than Average
        </p>
      </div>
    </div>
  );
};

export default VitalsSummary;
