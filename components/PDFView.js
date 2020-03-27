import dynamic from 'next/dynamic';
import Spinner from './Spinner';
import { useMediaQuery } from 'react-responsive';
import {
  PDFDownloadLink,
  PDFViewer,
  StyleSheet,
} from '@react-pdf/renderer';
import CV from '../components/CVComponent';
const styles = StyleSheet.create({
  button: {
    fontSize: 15,
    textTransform: 'uppercase',
    border: 'none',
    borderRadius: '3pt',
    cursor: 'pointer',
    backgroundColor: '#536390',
    color: '#fff',
    padding: 25,
    display: 'inline-block',
    marginTop: 25,
    minWidth: '33%',
  },
});
const PDFView = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-device-width: 1224px)',
  });

  return (
    <div>
      {!isDesktopOrLaptop && (
        <div className="error download">
          The PDF Viewer is only available on desktop or laptop, but
          you can download the file directly here:
          <PDFDownloadLink
            style={styles.button}
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
