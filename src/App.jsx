import React, { useState } from 'react';
import Header from './components/Header';
import EmailForm from './components/Email/EmailForm';
import Payment from './components/Payment/Payment'; 
import Dashboard from './components/Dashboard/Dashboard';
import AlertModal from './components/AlertModal/AlertModal';
import WizardSteps from './components/WizardSteps/WizardSteps'; 
import './App.css';

function App() {
  const [step, setStep] = useState(1); // 1: Form, 2: Payment, 3: Dashboard
  const [showModal, setShowModal] = useState(true);
  const [student, setStudent] = useState(null); 

  return (
    <div className="app-container">
      <Header />
      {showModal && <AlertModal onClose={() => setShowModal(false)} />}
      <WizardSteps currentStep={step} />

      <main className="content">
        {step === 1 && (
          <EmailForm
            onFormComplete={(studentData) => {
              setStudent(studentData);
              setStep(2);
            }}
          />
        )}

        {step === 2 && (
          <Payment
            student={student}
            onPaymentSuccess={() => setStep(3)}
          />
        )}

        {step === 3 && <Dashboard />}
      </main>
    </div>
  );
}

export default App;
