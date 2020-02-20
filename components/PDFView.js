import dynamic from 'next/dynamic';
import Spinner from './Spinner';
import { useMediaQuery } from 'react-responsive';
import Icons from '../components/Icons';
import { PDFViewer } from '@react-pdf/renderer';
import CV from '../components/CVComponent';
const PDFView = () => {
  const handleMediaQueryChange = () => {
    console.log('changing');
  };
  const isScreen = useMediaQuery(
    { minDeviceWidth: 1224 },
    undefined,
    handleMediaQueryChange,
  );
  const isTabletOrMobile = useMediaQuery(
    { maxWidth: 700 },
    undefined,
    handleMediaQueryChange,
  );

  return (
    <div style={{ '--aspect-ratio': '16/9' }}>
      hi
      {isTabletOrMobile && (
        <PDFViewer width="100%" style={{ height: '100vh' }}>
          <CV />
        </PDFViewer>
      )}
      {isScreen && (
        <PDFViewer width="100%" style={{ height: '100vh' }}>
          <CV />
        </PDFViewer>
      )}
    </div>
  );
};

/*eslint-disable */
export default dynamic(() => Promise.resolve(PDFView), {
  loading: () => <Spinner />,
  ssr: false,
});
