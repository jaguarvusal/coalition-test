import React from 'react';

const Sidebar = ({ patient }) => {
  const additionalPatients = [
    { name: 'Emily Williams', gender: 'Female', age: 18, profile_picture: '/src/img/Layer 8.png' },
    { name: 'Ryan Johnson', gender: 'Male', age: 45, profile_picture: '/src/img/Layer 1.png' },
    { name: 'Brandon Mitchell', gender: 'Male', age: 36, profile_picture: '/src/img/Layer 3.png' },
    { name: 'Samantha Johnson', gender: 'Female', age: 56, profile_picture: '/src/img/Layer 6.png' },
    { name: 'Ashley Martinez', gender: 'Female', age: 54, profile_picture: '/src/img/Layer 12.png' },
    { name: 'Olivia Brown', gender: 'Female', age: 32, profile_picture: '/src/img/Layer 10.png' },
    { name: 'Tyler Davis', gender: 'Male', age: 19, profile_picture: '/src/img/Layer 9.png' },
    { name: 'Kevin Anderson', gender: 'Male', age: 30, profile_picture: '/src/img/Layer 4.png' },
    { name: 'Dylan Thompson', gender: 'Male', age: 36, profile_picture: '/src/img/Layer 5.png' },
    { name: 'Nathan Evans', gender: 'Male', age: 58, profile_picture: '/src/img/Layer 7.png' },
    { name: 'Mike Nolan', gender: 'Male', age: 31, profile_picture: '/src/img/pexels-photo-1222271.png' }
  ];

  const PatientBox = ({ patient, topPosition, isLast, style }) => (
    <div style={{
      position: 'absolute',
      top: `${topPosition}px`,
      left: '12px',
      width: '264px',
      height: '40px',
      opacity: 1,
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      ...style
    }}>
      <img
        src={patient.profile_picture}
        alt={patient.name}
        style={{
          position: 'absolute',
          top: `${topPosition}px`,
          left: '12px',
          width: '40px',
          height: '40px',
          background: 'transparent',
          opacity: 1
        }}
      />
      <div style={{
        position: 'absolute',
        top: `${topPosition}px`,
        left: '64px',
        display: 'flex',
        flexDirection: 'column',
        gap: '2px'
      }}>
        <div style={{
          fontFamily: "'Manrope', sans-serif",
          fontWeight: 700,
          fontSize: '13px',
          lineHeight: '17px',
          letterSpacing: '0px',
          color: '#072635',
          textAlign: 'left',
          opacity: 1
        }}>{patient.name}</div>
        <div style={{
          fontFamily: "'Manrope', sans-serif",
          fontWeight: 400,
          fontSize: '12px',
          lineHeight: '16px',
          letterSpacing: '0px',
          color: '#707070',
          textAlign: 'left',
          opacity: 1
        }}>{patient.gender}, {patient.age}</div>
      </div>
      <div style={{
        position: 'absolute',
        top: `${topPosition + 12}px`,
        left: '280px',
        width: '16px',
        height: '4px',
        background: 'transparent',
        opacity: 1
      }}>
        <img 
          src="/src/img/more_horiz_FILL0_wght300_GRAD0_opsz24.svg" 
          alt="more options"
          style={{
            width: '100%',
            height: '100%'
          }}
        />
      </div>
    </div>
  );

  return (
    <aside
      style={{
        position: 'absolute',
        top: '122px',
        left: '18px',
        width: '350px',
        height: '900px',
        background: '#FFFFFF 0% 0% no-repeat padding-box',
        borderRadius: '16px',
        opacity: 1,
        padding: '0'
      }}
    >
      <div style={{
        position: 'absolute',
        top: '80px',
        left: '344px',
        width: '6px',
        height: '100px',
        background: '#072635 0% 0% no-repeat padding-box',
        borderRadius: '3px',
        opacity: 1
      }} />
      <div style={{
        position: 'absolute',
        top: '180px',
        left: '344px',
        width: '6px',
        height: '670px',
        background: '#E3E4E6 0% 0% no-repeat padding-box',
        borderRadius: '3px',
        opacity: 1
      }} />
      <h2 style={{ 
        position: 'absolute',
        top: '20px',
        left: '25px',
        width: '100px',
        height: '33px',
        fontFamily: "'Manrope', sans-serif",
        fontWeight: 800,
        fontSize: '24px',
        lineHeight: '33px',
        letterSpacing: '0px',
        color: '#072635',
        textAlign: 'left',
        opacity: 1,
        margin: 0,
        fontStyle: 'normal'
      }}>Patients</h2>
      
      <div style={{
        position: 'absolute',
        top: '28px',
        left: '310px',
        width: '18px',
        height: '18px',
        opacity: 1
      }}>
        <img 
          src="/src/img/search_FILL0_wght300_GRAD0_opsz24.svg" 
          alt="search"
          style={{
            width: '100%',
            height: '100%'
          }}
        />
      </div>

      {/* Additional patients */}
      {additionalPatients.map((p, index) => {
        // Skip the first 3 cards for Jessica Taylor's position
        const adjustedIndex = index >= 3 ? index + 1 : index;
        return (
          <PatientBox 
            key={p.name} 
            patient={p} 
            topPosition={40 + (adjustedIndex * 35)} 
            isLast={false}
          />
        );
      })}

      {/* Jessica Taylor's card with green background */}
      <div style={{
        position: 'absolute',
        top: '270px',
        left: '0px',
        width: '338px',
        height: '75px',
        background: '#D8FCF7 0% 0% no-repeat padding-box',
        opacity: 1,
        zIndex: 0
      }} />
      
      <div style={{
        position: 'absolute',
        top: '286px',
        left: '12px',
        width: '264px',
        height: '48px',
        opacity: 1,
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        zIndex: 1
      }}>
        <div style={{
          position: 'absolute',
          top: '14px',
          left: '280px',
          width: '16px',
          height: '4px',
          background: 'transparent',
          opacity: 1
        }}>
          <img 
            src="/src/img/more_horiz_FILL0_wght300_GRAD0_opsz24.svg" 
            alt="more options"
            style={{
              width: '100%',
              height: '100%'
            }}
          />
        </div>
        <img
          src={patient.profile_picture}
          alt={patient.name}
          style={{
            position: 'absolute',
            top: '0px',
            left: '12px',
            width: '40px',
            height: '40px',
            background: 'transparent',
            opacity: 1
          }}
        />
        <div style={{
          position: 'absolute',
          top: '0px',
          left: '64px',
          display: 'flex',
          flexDirection: 'column',
          gap: '4px'
        }}>
          <div style={{
            fontFamily: "'Manrope', sans-serif",
            fontWeight: 700,
            fontSize: '13px',
            lineHeight: '17px',
            letterSpacing: '0px',
            color: '#072635',
            textAlign: 'left',
            opacity: 1
          }}>{patient.name}</div>
          <div style={{
            fontFamily: "'Manrope', sans-serif",
            fontWeight: 400,
            fontSize: '12px',
            lineHeight: '16px',
            letterSpacing: '0px',
            color: '#707070',
            textAlign: 'left',
            opacity: 1
          }}>{patient.gender}, {patient.age}</div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
