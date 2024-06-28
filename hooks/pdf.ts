// "use client"
        
// import { FileUpload } from '@/components/file-upload';
// import React, { useState } from 'react';
// import { Document, Page } from 'react-pdf';
// import { pdfjs } from 'react-pdf';
// import { Worker, Viewer } from '@react-pdf-viewer/core';

// pdfjs.GlobalWorkerOptions.workerSrc = '/path/to/pdf.worker.js';


// const PdfPage = () => {
//   const [numPages, setNumPages] = useState(0);
//   const [pageNumber, setPageNumber] = useState(1);
//   const [pdfUrl, setPdfUrl] = useState<string | null>("");

//   const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
//     setNumPages(numPages);
//   };

//   const onSubmit = (data: any) => {
//     console.log("data", data);
//     setPdfUrl(data.pdfUrl);
//   };

//   return (
//     <div>
//       <FileUpload
//         endpoint='courseAttachment'
//         onChange={(url) => {
//           if (url) {
//             onSubmit({ pdfUrl: url });
//           }
//         }}
//       />
//       <div style={{ width: '100%' }}>
//         <Document file={pdfUrl} onLoadSuccess={onDocumentLoadSuccess} >
//           {[...Array(numPages)].map((_, index) => (
//             <Page key={`page_${index + 1}`} pageNumber={index + 1} />
//           ))}
//         </Document>
//       </div>
//       <p>
//         Page {pageNumber} of {numPages}
//       </p>
//     </div>
//   );
// };

// export default PdfPage;



// const loadPageText = async () => {
//   try {
//     const doc = await pdfjs.getDocument('/story.pdf').promise;
//     for (let i = 1; i <= doc.numPages; i++) {
//       const page = await doc.getPage(i);
//       const content = await page.getTextContent();
//       let text = '';
//       for (const item of content.items) {
//         if ('str' in item) {
//           text += item.str;
//         } else if ('items' in item) {
//           const markedContentItem = item as TextMarkedContent;
//           for (const markedItem of markedContentItem.items) {
//             if ('str' in markedItem) {
//               text += markedItem.str;
//             }
//           }
//         }
//       }
//       onPageTextExtracted(text);
//     }
//   } catch (error) {
//     console.error('Error extracting text:', error);
//   }
// };