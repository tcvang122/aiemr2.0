import React, { useState } from 'react';
  import { Link } from 'react-router-dom';

  function Sidebar() {
    const [isOpen, setIsOpen] = useState(true);
    const userName = 'John Doe'; // Placeholder for the logged-in user's name

    const handleLogout = () => {
      // Logic for logging out the user
      alert('Logged out');
    };

    const toggleSidebar = () => {
      setIsOpen(!isOpen);
    };

    return (
      <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', backgroundColor: '#2c3e50', color: '#ecf0f1', boxShadow: '2px 0 5px rgba(0, 0, 0, 0.1)', transition: 'width 0.3s', width: isOpen ? '250px' : '60px' }}>
        <button onClick={toggleSidebar} style={{ backgroundColor: '#34495e', color: '#ecf0f1', border: 'none', cursor: 'pointer', padding: '10px', textAlign: 'center' }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 6H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M3 12H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M3 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        {isOpen && (
          <div style={{ padding: '20px' }}>
            <h2 style={{ fontSize: '1.5em', marginBottom: '20px' }}>Menu</h2>
            <p style={{ marginBottom: '20px', fontSize: '1em' }}>Logged in as: <strong>{userName}</strong></p>
            <ul style={{ listStyleType: 'none', padding: 0 }}>
              <li style={{ marginBottom: '15px' }}>
                <Link to="/" style={{ textDecoration: 'none', color: '#ecf0f1', display: 'block', padding: '10px', borderRadius: '5px', transition: 'background-color 0.3s' }} onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#34495e'} onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'transparent'}>Dashboard</Link>
              </li>
              <li style={{ marginBottom: '15px' }}>
                <Link to="/residents" style={{ textDecoration: 'none', color: '#ecf0f1', display: 'block', padding: '10px', borderRadius: '5px', transition: 'background-color 0.3s' }} onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#34495e'} onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'transparent'}>Residents</Link>
              </li>
              <li style={{ marginBottom: '15px' }}>
                <Link to="/" style={{ textDecoration: 'none', color: '#ecf0f1', display: 'block', padding: '10px', borderRadius: '5px', transition: 'background-color 0.3s' }} onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#34495e'} onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'transparent'}>Appointments</Link>
              </li>
              <li style={{ marginBottom: '15px' }}>
                <Link to="/" style={{ textDecoration: 'none', color: '#ecf0f1', display: 'block', padding: '10px', borderRadius: '5px', transition: 'background-color 0.3s' }} onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#34495e'} onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'transparent'}>Analytics</Link>
              </li>
            </ul>
            <button onClick={handleLogout} style={{ marginTop: '20px', padding: '10px 15px', borderRadius: '5px', backgroundColor: '#e74c3c', color: '#fff', border: 'none', cursor: 'pointer', width: '100%' }}>Logout</button>
          </div>
        )}
      </div>
    );
  }

  export default Sidebar;
