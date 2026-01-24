import windowWrapper from '#hoc/windowWrapper'
import React from 'react'
import WindowControls from '#components/WindowControls'
import { Download } from 'lucide-react'


import { Document,Page ,pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString();

import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';


const Resume = () => {
  return (
    <>
    <div id="window-header">
        <WindowControls target="resume"/>
        <h2>Sahil_Resume.pdf</h2>
        <a href="files/Sahil_resume.pdf" download
         className='cursor-pointer'
         title='Download Resume' >
            <Download className='icon'/>
         </a>
    </div>

        <div>
      <Document file="files/Sahil_resume.pdf" >
        <Page pageNumber={1} 
        renderTextLayer
        renderAnnotationLayer />
      </Document>
    </div>
    </>
  )
}

const ResumeWindow=windowWrapper(Resume,"resume")

export default ResumeWindow;