// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Hero from './components/Hero.jsx';
import Footer from './components/Footer.jsx';
import MembershipSection from './components/MembershipSection.jsx';
import Header from './components/Header.jsx';
import QuickAccess from './components/QuickAccess.jsx';
import MembersPage from './pages/Members';
import ClassScheduling from './pages/ClassScheduling'; 
import TrainersManagement from './pages/TrainersManagement'; 
import Membership from './pages/Membership';
function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route exact path="/" element={
              <>
                <Hero />
                <QuickAccess />       
                <MembershipSection />
              </>
            } />
            <Route path="/members" element={<MembersPage />} />
            <Route path="/classes" element={<ClassScheduling />} />
            <Route path="/trainers" element={<TrainersManagement />} />
            <Route path="/memberships" element={<Membership />} />
            {/* Add more routes as needed */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;