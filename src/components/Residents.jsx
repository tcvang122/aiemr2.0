import React from 'react';
  import { useNavigate } from 'react-router-dom';
  import residents from '../data/residents';

  function Residents() {
    const navigate = useNavigate();

    const handleRowClick = (index) => {
      navigate(`/residents/${index}`);
    };

    return (
      <section style={{ marginBottom: '20px' }}>
        <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
          <h2 style={{ margin: '0 0 10px 0', color: '#333' }}>Residents</h2>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr>
                <th style={{ borderBottom: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>Photo</th>
                <th style={{ borderBottom: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>Name</th>
                <th style={{ borderBottom: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>DOB</th>
                <th style={{ borderBottom: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>Diagnosis</th>
                <th style={{ borderBottom: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>Intake Date</th>
                <th style={{ borderBottom: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>Location</th>
                <th style={{ borderBottom: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>Gender</th>
                <th style={{ borderBottom: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>Housing</th>
                <th style={{ borderBottom: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>Status</th>
              </tr>
            </thead>
            <tbody>
              {residents.map((resident, index) => (
                <tr key={index} onClick={() => handleRowClick(index)} style={{ cursor: 'pointer', transition: 'background-color 0.3s' }} onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#f0f0f0'} onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'transparent'}>
                  <td style={{ borderBottom: '1px solid #ddd', padding: '8px' }}>
                    <img src={resident.photo} alt={`${resident.name}'s photo`} style={{ borderRadius: '50%' }} />
                  </td>
                  <td style={{ borderBottom: '1px solid #ddd', padding: '8px' }}>{resident.name}</td>
                  <td style={{ borderBottom: '1px solid #ddd', padding: '8px' }}>{resident.dob}</td>
                  <td style={{ borderBottom: '1px solid #ddd', padding: '8px' }}>{resident.diagnosis}</td>
                  <td style={{ borderBottom: '1px solid #ddd', padding: '8px' }}>{resident.intakeDate}</td>
                  <td style={{ borderBottom: '1px solid #ddd', padding: '8px' }}>{resident.currentLocation}</td>
                  <td style={{ borderBottom: '1px solid #ddd', padding: '8px' }}>{resident.gender}</td>
                  <td style={{ borderBottom: '1px solid #ddd', padding: '8px' }}>{resident.housing}</td>
                  <td style={{ borderBottom: '1px solid #ddd', padding: '8px' }}>{resident.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    );
  }

  export default Residents;
