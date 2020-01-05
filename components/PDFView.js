import dynamic from 'next/dynamic';

import Icons from '../components/Icons';
import { PDFViewer } from '@react-pdf/renderer';
import CV from '../components/CVComponent';
const PDFView = () => (
  <div style={{ height: '100vh'}}>
    <PDFViewer width="100%">
      <CV />
    </PDFViewer>
  </div>
);

export default dynamic(() => Promise.resolve(PDFView), {
  ssr: false
});
