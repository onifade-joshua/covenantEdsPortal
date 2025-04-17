import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import EmailForm from './components/Email/EmailForm';
import Payment from './components/Payment/Payment';
import Dashboard from './components/Dashboard/Dashboard';
import AlertModal from './components/AlertModal/AlertModal';
import WizardSteps from './components/WizardSteps/WizardSteps';
import './App.css';

function App() {
  const [step, setStep] = useState(1);
  const [showModal, setShowModal] = useState(true);
  const [student, setStudent] = useState(null);

  const handlePaymentSuccess = () => {
    // When payment is successful, move the student to step 3 (Dashboard)
    setStep(3);
  };

  return (
    <Router>
      <Header />
      {showModal && <AlertModal onClose={() => setShowModal(false)} />}
      <Routes>
        <Route
          path="/"
          element={
            <>
              <WizardSteps currentStep={step} />
              <main className="content">
                {step === 1 && (
                  <EmailForm
                    onFormComplete={(studentData) => {
                      setStudent(studentData);
                      setStep(2); // Proceed to step 2 (Payment)
                    }}
                  />
                )}
                {step === 2 && (
                  <Payment student={student} onPaymentSuccess={handlePaymentSuccess} />
                )}
                {step === 3 && <Dashboard student={student} />}
              </main>
            </>
          }
        />
        {/* <Route path="/admin" element={<AdminPanel />} /> */}
      </Routes>
    </Router>
  );
}

export default App;