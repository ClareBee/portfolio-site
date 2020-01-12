import dynamic from 'next/dynamic';
import Spinner from './Spinner';

import Icons from '../components/Icons';
import { PDFViewer } from '@react-pdf/renderer';
import CV from '../components/CVComponent';
const PDFView = () => (
  <div>
    <PDFViewer width="100%" style={{ height: '100vh'}}>
      <CV />
    </PDFViewer>
  </div>
);

export default dynamic(() => Promise.resolve(PDFView), {
  loading: () => <Spinner />,
  ssr: false
});
