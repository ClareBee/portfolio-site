import React from 'react';
import {
  Page,
  Text,
  Link,
  View,
  Document,
  StyleSheet,
  Image,
  Font,
} from '@react-pdf/renderer';
import { useMediaQuery } from 'react-responsive';

// Font.register({
//   family: 'Oswald',
//   src: 'https://fonts.gstatic.com/s/oswald/v13/Y_TKV6o8WovbUd3m_X9aAA.ttf'
// });
// Create styles
const palette = {
  background: '#ECEFF2',
  white: '#FDFDFD',
  primary: '#DA2497',
  secondary: '#536390',
  heading: '#696673',
  font: '#373F51',
  divider: '#C1CAD6',
};

const styles = StyleSheet.create({
  page: {
    width: '90%',
    maxWidth: '800pt',
    background: palette.background,
    paddingHorizontal: 15,
  },
  header: {
    fontFamily: 'Helvetica', // Helvetica/Times also available, w diff weights
    padding: 20,
    width: '100%',
    background: palette.white,
    display: 'flex',
    color: palette.heading,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  headerRight: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  name: {
    fontSize: 24,
    fontWeight: '700',
    color: palette.primary,
  },
  jobTitle: {
    fontSize: 20,
    fontWeight: '500',
    color: palette.secondary,
  },
  contactDetails: {
    fontSize: 12,
    marginRight: 10,
  },
  main: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 15,
    paddingTop: 10,
    paddingRight: 10,
    borderTop: `5pt solid ${palette.divider}`,
    fontSize: 12,
    color: palette.font,
  },
  body: {
    color: palette.font,
    fontSize: 12,
  },
  codeContainer: {
    width: '20%',
  },
  code: {
    width: '100%',
  },
  heading: {
    width: '100%',

    fontFamily: 'Helvetica',
    fontStyle: 'italic',
    fontSize: 18,
    color: palette.heading,
    marginBottom: 10,
  },
  skills: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  skill: {
    marginLeft: 10,
    padding: 10,
    border: `1pt solid ${palette.divider}`,
    borderRadius: '3pt',
  },
  experience: {
    borderBottom: `1pt solid ${palette.primary}`,
    width: '100%',
    marginBottom: 10,
  },
  jobContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
    marginBottom: 5,
    borderLeft: `10pt solid ${palette.divider}`,
    paddingLeft: 5,
  },
  positionContainer: {
    width: '100%',
    marginLeft: '10%',
  },
  position: {
    fontSize: 14,
  },
  duration: {
    fontSize: 12,
    color: palette.heading,
    fontStyle: 'italic',
  },
  jobDescription: {
    marginLeft: '10%',
  },
  listItem: {
    width: '100%',
  },
});

const mobileStyles = StyleSheet.create({
  header: {
    display: 'flex',
    flexDirection: 'column',
    fontFamily: 'Helvetica', // Helvetica/Times also available, w diff weights
    padding: 20,
    background: palette.white,
    color: palette.heading,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contactDetails: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
// Create Document Component
const CV = () => {
  const handleMediaQueryChange = () => {
    console.log('changing');
  };
  const isBigScreen = useMediaQuery(
    { minDeviceWidth: 1824 },
    undefined,
    handleMediaQueryChange,
  );
  const isMediumScreen = useMediaQuery(
    { maxWidth: 800 },
    undefined,
    handleMediaQueryChange,
  );
  const isSmallScreen = useMediaQuery(
    { maxWidth: 420 },
    undefined,
    handleMediaQueryChange,
  );

  const header = isSmallScreen ? mobileStyles.header : styles.header;
  const details = isSmallScreen
    ? mobileStyles.contactDetails
    : styles.contactDetails;
  return (
    <Document
      title="Clare Bee"
      subject="Software Developer CV 2020"
      author="ClareBee"
    >
      <Page size="A4" style={styles.page}>
        <View style={header}>
          <View style={details}>
            <Text style={styles.name}>ClareBee</Text>
            <Text style={styles.jobTitle}>Software Developer</Text>
          </View>
          <View style={styles.headerRight}>
            <View style={details}>
              <Text>clarebee@protonmail.com</Text>
              <Link>www.github.com/clarebee</Link>
            </View>
            <View style={styles.codeContainer}>
              <Image
                style={styles.code}
                src={require(`../images/qr-code.png`)}
              />
            </View>
          </View>
        </View>
        <View style={styles.main}>
          <Text style={styles.heading}>About Me</Text>
          <Text style={styles.body}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Integer dolor metus, interdum at scelerisque in, porta at
            lacus. Maecenas dapibus luctus cursus. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Donec ultricies
            massa et erat luctus hendrerit. Curabitur non consequat
            enim. Vestibulum bibendum mattis dignissim. Proin id
            sapien quis libero interdum porttitor.
          </Text>
        </View>
        <View style={styles.main}>
          <Text style={styles.heading}>Skills</Text>
          <View style={styles.skills}>
            <Text style={styles.skill}>ReactJS</Text>
            <Text style={styles.skill}>GraphQL</Text>
            <Text style={styles.skill}>JAMStack</Text>
            <Text style={styles.skill}>SCSS & CSS-in-JS</Text>
            <Text style={styles.skill}>JavaScript Testing</Text>
          </View>
        </View>
        <View style={styles.main}>
          <View style={styles.experience}>
            <Text style={styles.heading}>Relevant Experience</Text>
          </View>
          <View style={styles.jobContainer}>
            <Text style={styles.position}>Position 1</Text>
            <Text style={styles.duration}>12/03 - 17/08</Text>
          </View>
          <View style={styles.positionContainer}>
            <Text style={styles.listItem}>
              - Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Integer dolor metus
            </Text>
            <Text style={styles.listItem}>
              - Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Integer dolor metus
            </Text>
            <Text style={styles.listItem}>
              - Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Integer dolor metus
            </Text>
          </View>
        </View>
        <View style={styles.main}>
          <View style={styles.experience}>
            <Text style={styles.heading}>Relevant Education</Text>
          </View>
          <View style={styles.jobContainer}>
            <Text style={styles.position}>CodeClan</Text>
            <Text style={styles.duration}>12/03 - 17/08</Text>
          </View>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Integer dolor metus, interdum at scelerisque in, porta at
          </Text>
        </View>
        <View style={styles.main}>
          <Text style={styles.heading}>
            Other Education & Experience{' '}
          </Text>
          <Text style={styles.duration}>12/03 - 17/08</Text>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Integer dolor metus, interdum at scelerisque in, porta at
          </Text>
          <View style={styles.jobContainer}>
            <Text style={styles.position}>Position 2</Text>
            <Text style={styles.duration}>12/03 - 17/08</Text>
          </View>
          <View style={styles.positionContainer}>
            <Text style={styles.listItem}>
              - Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Integer dolor metus
            </Text>
            <Text style={styles.listItem}>
              - Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Integer dolor metus
            </Text>
            <Text style={styles.listItem}>
              - Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Integer dolor metus
            </Text>
          </View>
        </View>
      </Page>
    </Document>
  );
};

export default CV;
