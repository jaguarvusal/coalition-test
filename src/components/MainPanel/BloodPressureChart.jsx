import React from 'react';
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

// Register Chart.js components
ChartJS.register(
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Title,
  Tooltip,
  Legend
);

const BloodPressureChart = ({ vitalSigns }) => {
  // Create an array of months from October to March
  const months = ['Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar'];
  
  // Transform the data to match the required months
  const bpReadings = months.map((month, index) => {
    // Calculate the year (if month is Oct-Dec, use 2023, otherwise use 2024)
    const year = month === 'Oct' || month === 'Nov' || month === 'Dec' ? 2023 : 2024;
    
    // Define specific systolic values for each month
    const systolicValues = {
      'Oct': 122,
      'Nov': 118,
      'Dec': 160,
      'Jan': 112,
      'Feb': 150,
      'Mar': 158
    };

    // Define specific diastolic values for each month
    const diastolicValues = {
      'Oct': 110,
      'Nov': 65,
      'Dec': 110,
      'Jan': 90,
      'Feb': 70,
      'Mar': 78
    };
    
    // Find matching entry in vitalSigns
    const entry = vitalSigns?.find(vs => {
      const date = new Date(vs.date || vs.diagnosis_date);
      return date.getMonth() === index + 9 && date.getFullYear() === year;
    });

    return {
      label: `${month} ${year}`,
      systolic: systolicValues[month],
      diastolic: diastolicValues[month],
    };
  });

  const labels = bpReadings.map((r) => r.label);
  const data = {
    labels,
    datasets: [
      {
        label: 'Systolic',
        data: bpReadings.map((r) => r.systolic),
        borderColor: '#C26EB4',
        backgroundColor: '#E66FD2',
        tension: 0.4,
        pointRadius: 7,
        pointHoverRadius: 7,
        borderWidth: 2,
        pointBorderColor: '#FFFFFF',
        pointBackgroundColor: '#E66FD2',
        pointBorderWidth: 1,
        pointStyle: 'circle',
        fill: true
      },
      {
        label: 'Diastolic',
        data: bpReadings.map((r) => r.diastolic),
        borderColor: '#7E6CAB',
        backgroundColor: '#818cf8',
        tension: 0.4,
        pointRadius: 7,
        pointHoverRadius: 7,
        pointBorderColor: '#FFFFFF',
        pointBackgroundColor: '#8C6FE6',
        pointBorderWidth: 1,
        pointStyle: 'circle',
        borderWidth: 2
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { 
        position: 'right',
        align: 'start',
        labels: {
          boxWidth: 14,
          boxHeight: 10,
          padding: 15,
          font: {
            family: "'Manrope', sans-serif",
            size: 14,
            weight: '500'
          },
          usePointStyle: true,
          pointStyle: 'circle',
          pointRadius: 7,
          pointStyleWidth: 14,
          pointStyleHeight: 10,
          color: '#072635'
        }
      },
      title: { display: false },
    },
    scales: {
      y: {
        suggestedMin: 60,
        suggestedMax: 180,
        ticks: {
          stepSize: 20,
          callback: function(value) {
            return value % 20 === 0 ? value : '';
          }
        }
      },
      x: {
        grid: {
          display: false
        }
      }
    },
    layout: {
      padding: {
        left: 10,
        right: 20
      }
    }
  };

  return (
    <div style={{ 
      background: '#f4f0ff', 
      borderRadius: '12px', 
      padding: '1rem 0.5rem 0.5rem 0.25rem',
      maxHeight: '350px',
      marginLeft: '-0.5rem',
      width: '102%',
      position: 'relative'
    }}>
      <div style={{ 
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginBottom: '0.75rem',
        marginLeft: '1.5rem',
        marginRight: '0.5rem',
        gap: '10.5rem'
      }}>
        <h3 style={{
          fontFamily: "'Manrope', sans-serif",
          fontWeight: 500,
          fontSize: '18px',
          lineHeight: '24px',
          letterSpacing: '0px',
          color: '#072635',
          textTransform: 'capitalize',
          opacity: 1,
          margin: 0
        }}>Blood Pressure</h3>
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: '0.5rem',
          marginTop: '0.75rem'
        }}>
          <p style={{
            fontFamily: "'Manrope', sans-serif",
            fontWeight: 400,
            fontSize: '14px',
            lineHeight: '19px',
            letterSpacing: '0px',
            color: '#072635',
            opacity: 1,
            margin: 0
          }}>Last 6 Months</p>
          <img 
            src="/src/img/expand_more_FILL0_wght300_GRAD0_opsz24.svg" 
            alt="expand more"
            style={{
              width: '11px',
              height: '6px'
            }}
          />
        </div>
      </div>
      <div style={{ height: '250px', width: '65%', margin: '0 0 0 0.5rem' }}>
        <Line data={data} options={{
          ...options,
          plugins: {
            ...options.plugins,
            legend: {
              ...options.plugins.legend,
              display: false,
              position: 'right',
              align: 'start',
              labels: {
                boxWidth: 14,
                boxHeight: 10,
                padding: 15,
                font: {
                  family: "'Manrope', sans-serif",
                  size: 14,
                  weight: '500'
                },
                usePointStyle: true,
                pointStyle: 'circle',
                pointRadius: 7,
                pointStyleWidth: 14,
                pointStyleHeight: 10,
                color: '#072635'
              }
            }
          }
        }} />
      </div>

      {/* Systolic Stats Section */}
      <div style={{
        position: 'absolute',
        right: '20px',
        top: '20px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: '12px'
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem'
        }}>
          <div style={{
            width: '14px',
            height: '14px',
            borderRadius: '50%',
            backgroundColor: '#E66FD2',
            border: '1px solid #FFFFFF'
          }} />
          <span style={{
            fontFamily: "'Manrope', sans-serif",
            fontWeight: 700,
            fontSize: '14px',
            color: '#072635'
          }}>Systolic</span>
        </div>
        <div style={{
          fontFamily: "'Manrope', sans-serif",
          fontWeight: 700,
          fontSize: '22px',
          color: '#072635',
          marginLeft: '4px'
        }}>160</div>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '4px',
          marginLeft: '4px'
        }}>
          <img 
            src="/src/img/ArrowUp.svg" 
            alt="arrow up"
            style={{
              width: '10px',
              height: '5px'
            }}
          />
          <span style={{
            fontFamily: "'Manrope', sans-serif",
            fontWeight: 400,
            fontSize: '14px',
            color: '#072635'
          }}>Higher Than Average</span>
        </div>
        <div style={{
          width: '220px',
          height: '1px',
          background: '#CBC8D4 0% 0% no-repeat padding-box',
          opacity: 1,
          marginLeft: '-4px',
          marginTop: '8px',
          marginBottom: '8px'
        }} />
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          marginTop: '8px'
        }}>
          <div style={{
            width: '14px',
            height: '14px',
            borderRadius: '50%',
            backgroundColor: '#8C6FE6',
            border: '1px solid #FFFFFF'
          }} />
          <span style={{
            fontFamily: "'Manrope', sans-serif",
            fontWeight: 700,
            fontSize: '14px',
            color: '#072635'
          }}>Diastolic</span>
        </div>
        <div style={{
          fontFamily: "'Manrope', sans-serif",
          fontWeight: 700,
          fontSize: '22px',
          color: '#072635',
          marginLeft: '4px'
        }}>78</div>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '4px',
          marginLeft: '4px'
        }}>
          <img 
            src="/src/img/ArrowDown.svg" 
            alt="arrow down"
            style={{
              width: '10px',
              height: '5px'
            }}
          />
          <span style={{
            fontFamily: "'Manrope', sans-serif",
            fontWeight: 400,
            fontSize: '14px',
            color: '#072635'
          }}>Lower than Average</span>
        </div>
      </div>
    </div>
  );
};

export default BloodPressureChart;
