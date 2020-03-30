import dynamic from 'next/dynamic';
import Spinner from '../components/Spinner';
import { useMediaQuery } from 'react-responsive';
import { PDFDownloadLink, PDFViewer } from '@react-pdf/renderer';
import CV from '../components/CVComponent';
import * as gtag from '../lib/gtag';
import { buttonStyles } from '../styles/javascript/pdf';

const PDFView = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-device-width: 1224px)',
  });

  return (
    <div className="pdf-view">
      {!isDesktopOrLaptop && (
        <div className="error download">
          The PDF Viewer is only available on desktop or laptop, but
          you can download the file directly here:
          <PDFDownloadLink
            style={buttonStyles.button}
            document={<CV />}
            fileName="clare_bee_CV.pdf"
          >
            {({ _blob, _url, loading, error }) => {
              if (loading) {
                return 'Loading...';
              }
              if (error) {
                return 'Try refreshing the page';
              }
              gtag.event({
                action: 'mobile_pdf',
              });
              return 'Download CV as PDF';
            }}
          </PDFDownloadLink>
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
