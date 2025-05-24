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
        top: '485px',
        left: '427px',
        width: '195px',
        height: '190px',
        background: '#E0F3FA 0% 0% no-repeat padding-box',
        borderRadius: '12px',
        opacity: 1,
        padding: '0.75rem 0 0 0.75rem',
        textAlign: 'center'
      }}>
        <img 
          src="/src/img/respiratory rate.svg" 
          alt="Respiratory Rate"
          style={{
            width: '85px',
            height: '85px',
            marginBottom: '0.25rem',
            marginLeft: '-6rem'
          }}
        />
        <h4 style={{
          fontFamily: "'Manrope', sans-serif",
          fontWeight: 500,
          fontSize: '14px',
          textAlign: 'left',
          marginLeft: '0rem',
          marginTop: '0.25rem'
        }}>Respiratory Rate</h4>
        <p style={{ 
          fontSize: '24px', 
          fontFamily: "'Manrope', sans-serif",
          fontWeight: 800,
          marginLeft: '0rem',
          textAlign: 'left',
          marginTop: '-0.75rem'
        }}>{respiratoryRate} bpm</p>
        <p style={{ 
          fontFamily: "'Manrope', sans-serif",
          fontWeight: 400,
          fontSize: '12px',
          color: '#072635',
          textAlign: 'left',
          marginLeft: '0rem',
          marginTop: '-1rem'
        }}>Normal</p>
      </div>
      <div style={{ 
        position: 'absolute',
        top: '485px',
        left: '677px',
        width: '195px',
        height: '190px',
        background: '#FFE6E9 0% 0% no-repeat padding-box',
        borderRadius: '12px',
        opacity: 1,
        padding: '0.75rem 0 0 0.75rem',
        textAlign: 'center'
      }}>
        <img 
          src="/src/img/temperature.svg" 
          alt="Temperature"
          style={{
            width: '85px',
            height: '85px',
            marginBottom: '0.25rem',
            marginLeft: '-6rem'
          }}
        />
        <h4 style={{
          fontFamily: "'Manrope', sans-serif",
          fontWeight: 500,
          fontSize: '14px',
          textAlign: 'left',
          marginLeft: '0rem',
          marginTop: '0.25rem'
        }}>Temperature</h4>
        <p style={{ 
          fontSize: '24px', 
          fontFamily: "'Manrope', sans-serif",
          fontWeight: 800,
          marginLeft: '0rem',
          textAlign: 'left',
          marginTop: '-0.75rem'
        }}>{temperature}°F</p>
        <p style={{ 
          fontFamily: "'Manrope', sans-serif",
          fontWeight: 400,
          fontSize: '12px',
          color: '#072635',
          textAlign: 'left',
          marginLeft: '0rem',
          marginTop: '-1rem'
        }}>Normal</p>
      </div>
      <div style={{ 
        position: 'absolute',
        top: '485px',
        left: '927px',
        width: '195px',
        height: '190px',
        background: '#FFE6F1 0% 0% no-repeat padding-box',
        borderRadius: '12px',
        opacity: 1,
        padding: '0.75rem 0 0 0.75rem',
        textAlign: 'center'
      }}>
        <img 
          src="/src/img/HeartBPM.png" 
          alt="Heart Rate"
          style={{
            width: '85px',
            height: '85px',
            marginBottom: '0.25rem',
            marginLeft: '-6rem'
          }}
        />
        <h4 style={{
          fontFamily: "'Manrope', sans-serif",
          fontWeight: 500,
          fontSize: '14px',
          textAlign: 'left',
          marginLeft: '0rem',
          marginTop: '0.25rem'
        }}>Heart Rate</h4>
        <p style={{ 
          fontSize: '24px', 
          fontFamily: "'Manrope', sans-serif",
          fontWeight: 800,
          marginLeft: '0rem',
          textAlign: 'left',
          marginTop: '-0.75rem'
        }}>{heartRate} bpm</p>
        <p style={{ 
          fontFamily: "'Manrope', sans-serif",
          fontWeight: 400,
          fontSize: '12px',
          color: '#072635',
          textAlign: 'left',
          marginLeft: '0rem',
          marginTop: '-1rem',
          display: 'flex',
          alignItems: 'center',
          gap: '4px'
        }}>
          <img 
            src="/src/img/ArrowDown.svg" 
            alt="arrow down"
            style={{
              width: '8px',
              height: '4px'
            }}
          />
          Lower than Average
        </p>
      </div>
    </div>
  );
};

export default VitalsSummary;
