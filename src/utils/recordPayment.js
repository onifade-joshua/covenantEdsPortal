import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebaseConfig';

const recordPayment = async ({ reference, email, name, matric, amount }) => {
  try {
    await addDoc(collection(db, 'payments'), {
      email,
      name,
      matric,
      amount,
      reference,
      timestamp: serverTimestamp(),
    });
    console.log('Payment saved successfully.');
  } catch (error) {
    console.error('Error saving payment:', error);
  }
};

export default recordPayment;
