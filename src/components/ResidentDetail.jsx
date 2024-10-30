import React, { useState } from 'react';
  import { useParams, useNavigate } from 'react-router-dom';
  import residents from '../data/residents';

  const categories = [
    'Assessments', 'Care Coordination', 'Charges', 'Contacts', 'Diagnoses', 'Documents',
    'Fees/Payers', 'Incidents', 'Provider Orders', 'Medications', 'Notes', 'Reports',
    'Resources', 'Services', 'Tasks', 'Trends', 'Vaccinations', 'Vitals'
  ];

  const mockAssessments = [
    {
      name: 'Current Assessment - October 2023',
      date: '2023-10-01',
      link: '#'
    },
    {
      name: 'Previous Assessment - September 2023',
      date: '2023-09-01',
      link: '#'
    }
  ];

  function ResidentDetail() {
    const { id } = useParams();
    const navigate = useNavigate();
    const resident = residents[id];
    const [activeCategory, setActiveCategory] = useState(categories[0]);
    const [notes, setNotes] = useState([]);
    const [noteInput, setNoteInput] = useState('');

    if (!resident) {
      return <p>Resident not found.</p>;
    }

    const handleBackClick = () => {
      navigate('/residents');
    };

    const handleAddNote = () => {
      if (noteInput.trim()) {
        const newNote = {
          text: noteInput,
          timestamp: new Date().toLocaleString()
        };
        setNotes([...notes, newNote]);
        setNoteInput('');
      }
    };

    const handleAddAssessment = () => {
      // Logic to add a new assessment
      alert('Add Assessment functionality to be implemented.');
    };

    return (
      <section style={{ marginBottom: '20px' }}>
        <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
            <h2 style={{ margin: 0, color: '#333' }}>Resident Details</h2>
            <button onClick={handleBackClick} style={{ padding: '8px 12px', borderRadius: '5px', backgroundColor: '#3498db', color: '#fff', border: 'none', cursor: 'pointer' }}>Back</button>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
            <img src={resident.photo} alt={`${resident.name}'s photo`} style={{ borderRadius: '50%', marginRight: '20px', width: '100px', height: '100px' }} />
            <div>
              <p style={{ margin: '5px 0' }}><strong>Name:</strong> {resident.name}</p>
              <p style={{ margin: '5px 0' }}><strong>Date of Birth:</strong> {resident.dob}</p>
              <p style={{ margin: '5px 0' }}><strong>Gender:</strong> {resident.gender}</p>
            </div>
          </div>
          <div style={{ marginBottom: '20px' }}>
            <h3 style={{ margin: '10px 0', color: '#555' }}>Select Category</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  style={{
                    padding: '8px 12px',
                    borderRadius: '5px',
                    backgroundColor: activeCategory === category ? '#3498db' : '#ecf0f1',
                    color: activeCategory === category ? '#fff' : '#333',
                    border: 'none',
                    cursor: 'pointer'
                  }}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
              <h3 style={{ margin: 0, color: '#555' }}>{activeCategory}</h3>
              {activeCategory === 'Assessments' && (
                <button onClick={handleAddAssessment} style={{ padding: '8px 12px', borderRadius: '5px', backgroundColor: '#3498db', color: '#fff', border: 'none', cursor: 'pointer' }}>Add Assessment</button>
              )}
            </div>
            {activeCategory === 'Assessments' && (
              <div>
                <ul style={{ listStyleType: 'none', padding: 0 }}>
                  {mockAssessments.map((assessment, index) => (
                    <li key={index} style={{ backgroundColor: '#f9f9f9', padding: '10px', borderRadius: '5px', marginBottom: '5px', boxShadow: '0 1px 2px rgba(0, 0, 0, 0.1)' }}>
                      <p style={{ margin: 0 }}><strong>{assessment.name}</strong></p>
                      <p style={{ margin: '5px 0', color: '#888' }}>Date: {assessment.date}</p>
                      <a href={assessment.link} style={{ color: '#3498db', textDecoration: 'none' }}>View Document</a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {activeCategory === 'Notes' && (
              <div>
                <div style={{ marginBottom: '10px' }}>
                  <input
                    type="text"
                    value={noteInput}
                    onChange={(e) => setNoteInput(e.target.value)}
                    placeholder="Add a note"
                    style={{ padding: '8px', width: 'calc(100% - 100px)', marginRight: '10px', borderRadius: '5px', border: '1px solid #ddd' }}
                  />
                  <button onClick={handleAddNote} style={{ padding: '8px 12px', borderRadius: '5px', backgroundColor: '#3498db', color: '#fff', border: 'none', cursor: 'pointer' }}>Add</button>
                </div>
                <ul style={{ listStyleType: 'none', padding: 0 }}>
                  {notes.map((note, index) => (
                    <li key={index} style={{ backgroundColor: '#f9f9f9', padding: '10px', borderRadius: '5px', marginBottom: '5px', boxShadow: '0 1px 2px rgba(0, 0, 0, 0.1)' }}>
                      <p style={{ margin: 0 }}>{note.text}</p>
                      <small style={{ color: '#888' }}>{note.timestamp}</small>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {activeCategory !== 'Notes' && activeCategory !== 'Assessments' && (
              <p style={{ margin: '5px 0' }}>Details about {activeCategory.toLowerCase()} will be displayed here.</p>
            )}
          </div>
        </div>
      </section>
    );
  }

  export default ResidentDetail;
