import React from 'react';
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { auth } from '../firebaseConfig';

const Login = () => {
  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({ hd: 'stu.cu.edu.ng' });

  const handleLogin = async () => {
    try {
      await signInWithPopup(auth, provider);
    } catch (err) {
      alert('Login failed. Use a CU student email.');
      console.error(err);
    }
  };

  return (
    <div className="container text-center">
      <div className="card p-4 shadow-sm mx-auto" style={{ maxWidth: '400px' }}>
        <h3 className="mb-3">Sign in to proceed</h3>
        <button onClick={handleLogin} className="btn btn-dark w-100">
          Sign in with CU Email
        </button>
      </div>
    </div>
  );
};

export default Login;
