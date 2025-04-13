import React from 'react';
import './WizardSteps.css';

const WizardSteps = ({ currentStep }) => {
  const steps = [
    { number: 1, label: 'Fill Details' },
    { number: 2, label: 'Make Payment' },
    { number: 3, label: 'Access Materials' },
  ];

  return (
    <div className="steps-bar">
      {steps.map((step) => (
        <div
          key={step.number}
          className={`step ${
            step.number < currentStep ? 'completed' :
            step.number === currentStep ? 'active' : ''
          }`}
        >
          <span className="step-number">{step.number}</span>
          <span className="step-label">{step.label}</span>
        </div>
      ))}
    </div>
  );
};

export default WizardSteps;
