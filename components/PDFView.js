import dynamic from 'next/dynamic';
import Spinner from './Spinner';
import { useMediaQuery } from 'react-responsive';
import { PDFViewer } from '@react-pdf/renderer';
import CV from '../components/CVComponent';
const PDFView = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-device-width: 1224px)',
  });

  return (
    <div>
      {!isDesktopOrLaptop && (
        <div className="error">
          Not available on ipad or mobile yet. Please view on desktop
          or laptop
        </div>
      )}
      {isDesktopOrLaptop && (
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
