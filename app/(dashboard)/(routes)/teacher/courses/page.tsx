import React from 'react';
import { DataTable } from './_components/data-table';
import { columns } from './_components/columns';
import { db } from '@/lib/db';
import { auth } from '@clerk/nextjs';
import { redirect } from 'next/navigation';


const CoursesPage = async() => {

  const { userId } = auth();

  if(!userId) {
    return redirect("/");
  }

const courseData = await db.course.findMany({
  where: {
    userId
  },
  orderBy: {
    createdAt: "desc"
  }
});
  
  return (
      <div className='p-6'>
          <DataTable columns={columns} data={courseData} />
      </div>
    )
}
    
export default CoursesPage;

// const PdfPage = () => {
//   const [uploadedFile, setUploadedFile] = useState<string | null>("");

//   const onSubmit = (data: any) => {
//     console.log("data", data);
//     setUploadedFile(data.pdfUrl); // Corrected to use data.pdfUrl
//   };

//   console.log("setUploadedFile", uploadedFile);

//   return (
//     <div>
//       <FileUpload
//         endpoint='courseAttachment'
//         onChange={(url) => {
//           if (url) {
//             onSubmit({ pdfUrl: url }); // Corrected to pass pdfUrl property
//           }
//         }}
//       />
//       <p>
//         contents: {uploadedFile}
//       </p>
//       <div style={{ width: '100%', height: '500px' }}>
//         <PdfLoader url={uploadedFile}>
//           {({ url }) => <Viewer fileUrl={url} />}
//         </PdfLoader>
//       </div>
//     </div>
//   );
// };

// export default PdfPage;


        
// "use client"
        
// // import { FileUpload } from '@/components/file-upload';
// // import React, { useState } from 'react';
// // import { Document, Page, pdfjs } from 'react-pdf';


// // pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

// type TextMarkedContent = {
//   items: any[]; // Define the structure of the TextMarkedContent type
// };

// import { FileUpload } from '@components/file-upload';
// // const PdfPage = () => {
//   // const [numPages, setNumPages] = useState(0);
//   // const [pageNumber, setPageNumber] = useState(1);
// //   const [pdfUrl, setPdfUrl] = useState<string | null>("");
// //   const [textContent, setTextContent] = useState('');

//   // const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
//   //   setNumPages(numPages);
//   // };

// //   const onPageTextExtracted = (pageText: any) => {
// //     setTextContent((prevTextContent) => prevTextContent + pageText);
// //   };

// //   const loadPageText = async ({ pageIndex }: any) => {
// //     try {
// //       const doc = await pdfjs.getDocument('/story.pdf').promise;
// //       const page = await doc.getPage(pageIndex + 1); // pageIndex is 0-based
// //       const content = await page.getTextContent();
// //       let text = '';
// //       for (const item of content.items) {
// //         if ('str' in item) {
// //           text += item.str;
// //         }
// //       }
// //       onPageTextExtracted(text);
// //     } catch (error) {
// //       console.error('Error extracting text:', error);
// //     }
// //   };
  

// //   return (
// //     <div>
// //       <div>
// //         {textContent && (
// //           <p className="bg-blue-700 p-2">
// //             <strong>Extracted Text:</strong> {textContent}
// //           </p>
// //         )}
// //       </div>
// //       <Document file="/story.pdf">
// //         {Array.from({ length: numPages }, (_, index) => (
// //           <Page key={`page_${index + 1}`} pageNumber={index + 1} onLoadSuccess={loadPageText} />
// //         ))}
// //       </Document>
// //   </div>
// //   );
// // };

// // export default PdfPage;

// import { useEffect, useState } from 'react';
// import { pdfjs } from 'react-pdf';

// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

// const PdfPage = () => {
//   const [textContent, setTextContent] = useState('');
//   const [numPages, setNumPages] = useState(0);
//   const [pdfUrls, setPdfUrl] = useState("");

//   const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
//     setNumPages(numPages);
//   };

//   const onPageTextExtracted = (pageText: any) => {
//     setTextContent((prevTextContent) => prevTextContent + pageText);
//   };

//   const onSubmit = (data: any) => {
//     console.log("data", data);
//     setPdfUrl(data.pdfUrl);
//   }

//   const loadPageText = async () => {
//   try {
//     const doc = await pdfjs.getDocument(pdfUrls).promise;
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



// useEffect(() => {
//   if (pdfUrls) {
//     loadPageText();
//   }
// }, [pdfUrls]);

//   return (
//     <div>
//       <div>
//         <FileUpload
//           endpoint='courseAttachment'
//           onChange={(url) => {
//             if(url) {
//               onSubmit({ pdfUrl: url })
//             }
//           }}        
//         />
//       </div>
//       <div>
//         {textContent && (
//           <p className="bg-blue-700 p-2">
//             <strong>Extracted Text:</strong> {textContent}
//           </p>
//         )}
//       </div>
//       </div>
//   );
// };

// export default PdfPage;

