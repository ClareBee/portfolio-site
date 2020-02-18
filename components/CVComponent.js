import React from 'react';
import {
  Page,
  Text,
  Link,
  View,
  Document,
  StyleSheet,
} from '@react-pdf/renderer';

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: '#E4E4E4',
  },
  section: {
    fontFamily: 'Courier', // Helvetica/Times also available, w diff weights
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
});

// Create Document Component
const CV = () => (
  <Document
    title="ClareBee"
    subject="Software Developer CV 2020"
    author="ClareBee"
  >
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text>ClareBee</Text>
        <Text>Software Developer</Text>
        <Text>
          <Link>www.github.com/clarebee</Link>
        </Text>
      </View>
      <View style={styles.section}>
        <Text>Section #2</Text>
      </View>
      <View style={styles.section}>
        <Text>ClareBee</Text>
        <Text>Software Developer</Text>
        <Text>
          <Link>www.github.com/clarebee</Link>
        </Text>
      </View>
      <View style={styles.section}>
        <Text>Section #2</Text>
      </View>
    </Page>
  </Document>
);

export default CV;
