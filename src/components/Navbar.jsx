import React from 'react';

const Navbar = () => {
  const navItems = [
    { text: 'Overview', icon: '/src/img/home_FILL0_wght300_GRAD0_opsz24.svg' },
    { text: 'Patients', icon: '/src/img/group_FILL0_wght300_GRAD0_opsz24.svg' },
    { text: 'Schedule', icon: '/src/img/calendar_today_FILL0_wght300_GRAD0_opsz24.svg' },
    { text: 'Message', icon: '/src/img/chat_bubble_FILL0_wght300_GRAD0_opsz24.svg' },
    { text: 'Transactions', icon: '/src/img/credit_card_FILL0_wght300_GRAD0_opsz24.svg' }
  ];

  return (
    <nav style={{
      position: 'absolute',
      top: '18px',
      left: '18px',
      width: '1350px',
      height: '64px',
      background: '#FFFFFF 0% 0% no-repeat padding-box',
      borderRadius: '48px',
      opacity: 1,
      display: 'flex',
      alignItems: 'center',
      padding: '0 25px',
      justifyContent: 'space-between'
    }}>
      <img 
        src="/src/img/TestLogo.svg" 
        alt="Test Logo"
        style={{
          height: '48px',
          width: 'auto',
          marginLeft: '0px'
        }}
      />

      <div style={{
        display: 'flex',
        gap: '32px',
        alignItems: 'center',
        position: 'absolute',
        right: '300px'
      }}>
        {navItems.map((item) => (
          <button
            key={item.text}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              background: item.text === 'Patients' ? '#01F0D0' : 'transparent',
              border: 'none',
              cursor: 'pointer',
              padding: '6px 12px',
              borderRadius: item.text === 'Patients' ? '41px' : '8px',
              fontFamily: "'Manrope', sans-serif",
              fontWeight: 500,
              fontSize: '13px',
              color: '#072635',
              transition: 'background-color 0.2s'
            }}
            onMouseOver={(e) => {
              if (item.text !== 'Patients') {
                e.currentTarget.style.backgroundColor = '#F6F7F8';
              }
            }}
            onMouseOut={(e) => {
              if (item.text !== 'Patients') {
                e.currentTarget.style.backgroundColor = 'transparent';
              }
            }}
          >
            <img 
              src={item.icon} 
              alt={item.text}
              style={{
                width: '18px',
                height: '18px'
              }}
            />
            {item.text}
          </button>
        ))}
      </div>

      <div style={{ 
        display: 'flex', 
        alignItems: 'center', 
        gap: '8px',
        position: 'absolute',
        right: '16px'
      }}>
        <img 
          src="/src/img/senior-woman-doctor-and-portrait-smile-for-health-2023-11-27-05-18-16-utc.png" 
          alt="Dr. Jose Simmons"
          style={{
            width: '36px',
            height: '36px',
            borderRadius: '50%'
          }}
        />
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '0px'
        }}>
          <div style={{
            fontFamily: "'Manrope', sans-serif",
            fontWeight: 510,
            fontSize: '12px',
            color: '#072635'
          }}>Dr. Jose Simmons</div>
          <div style={{
            fontFamily: "'Manrope', sans-serif",
            fontWeight: 400,
            fontSize: '11px',
            color: '#707070'
          }}>General Practitioner</div>
        </div>
        <div style={{
          width: '1px',
          height: '28px',
          background: '#EDEDED',
          opacity: 1,
          margin: '0 4px'
        }} />
        <img 
          src="/src/img/settings_FILL0_wght300_GRAD0_opsz24.svg" 
          alt="Settings"
          style={{
            width: '16px',
            height: '16px',
            cursor: 'pointer'
          }}
        />
        <img 
          src="/src/img/more_vert_FILL0_wght300_GRAD0_opsz24.svg" 
          alt="More options"
          style={{
            width: '16px',
            height: '16px',
            cursor: 'pointer'
          }}
        />
      </div>
    </nav>
  );
};

export default Navbar; 