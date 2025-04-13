import React from 'react';
import PDF from "../assets/html-css-bootstrap-javascript-and-jquery-pdf.3266.pdf";
// import PDF2 from "../assets/30-days-of-react-ebook-fullstackio.pdf";
// import PDF3 from "../assets/frontend-en.pdf";
// import PDF4 from "../assets/EverythingYouNeedtoKnowAboutFront-EndDevelopment.pdf";
// import PDF5 from "../assets/React.js_for_Beginners.pdf";


const DownloadPDF = () => {
    return (
        <div>
            <a href={PDF} download>
            <button className="btn-download">Download PDF</button>
            </a>
        </div>
      )
};

export default DownloadPDF;