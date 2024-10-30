import React from 'react';
  import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
  import Header from './components/Header';
  import Sidebar from './components/Sidebar';
  import PatientInfo from './components/PatientInfo';
  import Appointments from './components/Appointments';
  import Analytics from './components/Analytics';
  import AIAgentIcon from './components/AIAgentIcon';
  import Residents from './components/Residents';
  import ResidentDetail from './components/ResidentDetail';

  function App() {
    return (
      <Router>
        <div className="dashboard">
          <Sidebar />
          <div className="content">
            <Header />
            <Routes>
              <Route path="/" element={
                <>
                  <PatientInfo />
                  <Appointments />
                  <Analytics />
                </>
              } />
              <Route path="/residents" element={<Residents />} />
              <Route path="/residents/:id" element={<ResidentDetail />} />
            </Routes>
            <AIAgentIcon />
          </div>
        </div>
      </Router>
    );
  }

  export default App;
