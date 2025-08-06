// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Hero from './components/Hero.jsx';
import Generator from './components/Generator.jsx';
import Workout from './components/Workout.jsx';
import FeaturesSection from './components/FeaturesSection.jsx';
import PricingSection from './components/PricingSection.jsx';
import Footer from './components/Footer.jsx';
import MembershipSection from './components/Membership.jsx';
import Header from './components/Header.jsx';
import QuickAccess from './components/QuickAccess.jsx';
import MembersPage from './pages/Members';

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
                <FeaturesSection />
                <Generator />
                <Workout />
                <PricingSection />
                <MembershipSection />
                <Footer />
              </>
            } />
            <Route path="/members" element={<MembersPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;