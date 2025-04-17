import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebaseConfig';
import PDF from "../assets/html-css-bootstrap-javascript-and-jquery-pdf.3266.pdf";

const DownloadPDF = ({ userEmail }) => {
  const handleDownload = async () => {
    await addDoc(collection(db, 'downloads'), {
      email: userEmail,
      timestamp: serverTimestamp(),
      file: 'html-css-bootstrap-javascript-and-jquery.pdf'
    });
  };

  return (
    <div>
      <a href={PDF} download onClick={handleDownload}>
        <button className="btn-download">Download PDF</button>
      </a>
    </div>
  );
};

export default DownloadPDF;
