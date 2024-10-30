import React from 'react';

  function PatientInfo() {
    return (
      <section style={{ marginBottom: '20px' }}>
        <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
          <h2 style={{ margin: '0 0 10px 0', color: '#333' }}>Patient Information</h2>
          <p style={{ margin: 0, color: '#555' }}>Details about the patient will be displayed here.</p>
        </div>
      </section>
    );
  }

  export default PatientInfo;
