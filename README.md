Covenant EDS Payment Portal

An enterprise web application designed to securely process online payments from Covenant University students for accessing electronic handouts and reading materials. This portal leverages React with Vite for rapid development, Firebase for authentication, Firestore for database storage, Firebase Storage for file hosting, and Paystack for processing Naira card payments.

Table of Contents

Overview

Features

Tech Stack

Setup and Installation

Configuration

Usage

Project Structure

Security Considerations

Testing

Deployment

License


Overview

The Covenant EDS Payment Portal enables Covenant University students to:

Sign in using their institutional Google accounts (restricted to a designated email domain, e.g., @yourinstitution.edu).

Process payments via Paystack to access educational materials.

View and download handouts and reading materials after successful payment.

Benefit from a responsive, user-friendly interface using React and Bootstrap.


Features

Firebase Authentication: Secure sign-in using Google accounts with domain restriction to ensure only authorized students can log in.

Payment Integration: Leverage Paystack to collect payments in Nigerian Naira.

Secure Data Storage: Record payment details in Firebase Firestore.

File Hosting: Serve handouts and reading materials from Firebase Storage.

Responsive UI: Developed with React and styled using Bootstrap for a modern, responsive design.


Tech Stack

Frontend: React, Vite, Bootstrap

Backend/Cloud Services: Firebase (Authentication, Firestore, Storage)

Payment Gateway: Paystack

Version Control & CI/CD: Git, GitHub (or your preferred repository/CI tool)


Setup and Installation

Prerequisites

Node.js (v12 or higher)

npm (v6 or higher)


Installation Steps

1. Clone the Repository:

git clone https://github.com/onifade-joshua/covenant-eds-payment-portal.git
cd covenant-eds-payment-portal


2. Install Dependencies:

npm install


3. Run the Development Server:

npm run dev

The application should now be running on http://localhost:3000 (or the port specified by Vite).



Configuration

Firebase

1. Firebase Project Setup:

Create a Firebase project via the Firebase Console.

Enable the Authentication (Email/Password and/or Google), Firestore, and Storage modules.



2. Firebase Configuration:

Update your firebaseConfig.js file with your Firebase project credentials:

// firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "covenant-payment-app.firebaseapp.com",
  projectId: "covenant-payment-app",
  storageBucket: "covenant-payment-app.appspot.com",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };



3. Authorized Domains:

In the Firebase Console, under Authentication > Sign-in method, add your institutional domain to the authorized domains list.




Paystack

1. Setup Paystack Account:

Create a Paystack account and obtain your public key.



2. Update PaymentPage:

Replace 'YOUR_PAYSTACK_PUBLIC_KEY' in the payment configuration with your actual public key.




Environment Variables

For production, consider moving sensitive API keys (Firebase API keys, Paystack keys) to environment variables using a .env file. For example:

VITE_FIREBASE_API_KEY=YOUR_API_KEY
VITE_PAYSTACK_PUBLIC_KEY=YOUR_PAYSTACK_PUBLIC_KEY

Update your code to use these variables (Vite automatically exposes variables prefixed with VITE_).

Usage

Login: Users access the portal and sign in with their institutional Google account via LoginPage.jsx. Only emails matching the specified domain (e.g., @yourinstitution.edu) will be accepted.

Payment: Once authenticated, students are redirected to the Payment page (PaymentPage.jsx) to complete a payment of ₦1,500 via Paystack.

Access Materials: Upon successful payment, the system records the transaction in Firestore and displays the materials dashboard (MaterialsDashboard.jsx), where students can download handouts and reading materials.


Project Structure

A sample project structure might look like:

covenant-eds-payment-portal/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── CompanyHeader.jsx
│   │   ├── LoginPage.jsx
│   │   ├── MaterialsDashboard.jsx
│   │   └── PaymentPage.jsx
│   ├── utils/
│   │   └── recordPayment.js
│   ├── firebaseConfig.js
│   ├── App.jsx
│   └── index.jsx
├── package.json
└── README.md

Security Considerations

Firebase Security Rules: Make sure to configure Firestore and Storage rules to restrict access to authenticated users.

API Key Protection: Use environment variables to store sensitive keys.

Domain Restriction: The Google Sign-In is restricted by using the hd parameter, ensuring that only institutional email addresses can sign in.

Error Handling: Comprehensive error handling and logging have been incorporated, and you may further integrate tools like Sentry for production monitoring.


Testing

Unit Tests: Use Jest and React Testing Library for components.

Integration Tests: Ensure critical flows such as sign-in, payment, and data retrieval have sufficient coverage.

CI/CD: Set up GitHub Actions or a similar CI service for automated testing and deployment.


Deployment

Hosting: Consider deploying your app to Firebase Hosting, Vercel, or Netlify for a production-ready environment.

CI/CD Pipeline: Automate your deployments using GitHub Actions or similar services.

Production Build: Run npm run build to generate the production bundle.


License

This project is licensed under the MIT License.