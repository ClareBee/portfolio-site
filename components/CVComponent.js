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
    padding: 10,
    paddingBottom: 20,
    paddingTop: 15,
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
    marginBottom: 2.5,
  },
  main: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 10,
    paddingBottom: 15,
    borderTop: `3pt solid ${palette.divider}`,
    fontSize: 11,
    color: palette.font,
  },
  body: {
    color: palette.font,
    fontSize: 11,
  },
  codeContainer: {
    width: '20%',
  },
  code: {
    width: '100%',
  },
  headingContainer: {
    borderBottom: `1pt solid ${palette.primary}`,
    width: '100%',
    marginBottom: 5,
  },
  heading: {
    width: '100%',
    fontFamily: 'Helvetica',
    fontStyle: 'italic',
    fontSize: 14,
    color: palette.heading,
    marginBottom: 10,
  },
  skills: {
    display: 'flex',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  skill: {
    padding: 7,
    border: `1pt solid ${palette.divider}`,
    borderRadius: '3pt',
  },

  jobContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginBottom: 5,
    marginTop: 5,
    borderLeft: `10pt solid ${palette.divider}`,
    paddingLeft: 5,
  },
  positionContainer: {
    width: '100%',
    marginLeft: '5%',
  },
  position: {
    fontSize: 12,
    fontWeight: '700',
  },
  educationItem: {
    width: '100%',
    marginLeft: '5%',
    fontSize: 10,
  },
  duration: {
    fontSize: 10,
    color: palette.heading,
    fontStyle: 'italic',
  },
  jobDescription: {
    marginLeft: '5%',
  },
  listItem: {
    width: '100%',
    fontSize: 10,
  },
  otherContainer: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
  },
  otherDuration: {
    color: palette.heading,
    fontStyle: 'italic',
    marginRight: 20,
    fontSize: 10,
  },
  otherSubHeading: {
    marginTop: 5,
    color: palette.secondary,
  },
  otherContent: {
    marginLeft: '5%',
  },
  otherItem: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginBottom: 5,
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

  const headingContent = text => {
    return (
      <View style={styles.headingContainer}>
        <Text style={styles.heading}>{text}</Text>
      </View>
    );
  };
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
              <Text style={styles.contactDetails}>
                clarebee@protonmail.com
              </Text>
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
            enim. Vestibulum bibendum mattis.
          </Text>
        </View>
        <View style={styles.main}>
          <Text style={styles.heading}>Main Skills</Text>
          <View style={styles.skills}>
            <Text style={styles.skill}>ReactJS</Text>
            <Text style={styles.skill}>GraphQL</Text>
            <Text style={styles.skill}>JAMStack</Text>
            <Text style={styles.skill}>SCSS & CSS-in-JS</Text>
            <Text style={styles.skill}>Ruby on Rails</Text>
            <Text style={styles.skill}>JavaScript Testing</Text>
          </View>
        </View>
        <View style={styles.main}>
          {headingContent('Relevant Experience')}
          <View style={styles.jobContainer}>
            <Text style={styles.position}>
              Fullstack Developer, Example Company
            </Text>
            <Text style={styles.duration}>02/18 - 02/20</Text>
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
          {headingContent('Relevant Education & Training')}
          <View style={styles.jobContainer}>
            <Text style={styles.position}>Example Course Title</Text>
            <Text style={styles.duration}>09/17 - 02/18</Text>
          </View>
          <Text style={styles.educationItem}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Integer dolor metus, interdum at scelerisque in, porta at
          </Text>
          <View style={styles.jobContainer}>
            <Text style={styles.position}>Other Course Title</Text>
            <Text style={styles.duration}>08/17 - 09/17</Text>
          </View>
          <Text style={styles.educationItem}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Integer dolor metus, interdum at scelerisque in, porta at
          </Text>
          <View style={styles.jobContainer}>
            <Text style={styles.position}>Online</Text>
            <Text style={styles.duration}>Ongoing</Text>
          </View>
          <Text style={styles.educationItem}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Integer dolor metus, interdum at scelerisque in, porta at
          </Text>
        </View>
        <View style={styles.main}>
          {headingContent('Other Experience')}
          <View style={styles.otherContainer}>
            <View style={styles.otherItem}>
              <Text style={styles.otherSubHeading}>
                Example Job Title
              </Text>
              <Text style={styles.otherDuration}>
                02/2015 - 10/2017
              </Text>
            </View>
            <Text style={styles.otherContent}>
              - Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Integer dolor metus
            </Text>
          </View>
          <View style={styles.otherContainer}>
            <View style={styles.otherItem}>
              <Text style={styles.otherSubHeading}>
                Other Example Job Title
              </Text>
              <Text style={styles.otherDuration}>
                02/2015 - 10/2016
              </Text>
            </View>
            <Text style={styles.otherContent}>
              - Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Integer dolor metus
            </Text>
          </View>
          <View style={styles.otherContainer}>
            <View style={styles.otherItem}>
              <Text style={styles.otherSubHeading}>
                Example Job Titem
              </Text>
              <Text style={styles.otherDuration}>
                02/2015 - 10/2016
              </Text>
            </View>
            <Text style={styles.otherContent}>
              - Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Integer dolor metus
            </Text>
          </View>
        </View>
        <View style={styles.main}>
          {headingContent('Other Education')}
          <View style={styles.otherContainer}>
            <View style={styles.otherItem}>
              <Text style={styles.otherSubHeading}>
                MRes - Distinction in Example Course, University of
                Examples
              </Text>
              <Text style={styles.otherDuration}>
                02/2015 - 10/2016
              </Text>
            </View>
          </View>
          <View style={styles.otherContainer}>
            <View style={styles.otherItem}>
              <Text style={styles.otherSubHeading}>
                PhD & MA - Example Course - Example University
              </Text>
              <Text style={styles.otherDuration}>
                02/2015 - 10/2016
              </Text>
            </View>
          </View>
          <View style={styles.otherContainer}>
            <View style={styles.otherItem}>
              <Text style={styles.otherSubHeading}>
                BA Hons 1:1 - Example Course, University of Example
              </Text>
              <Text style={styles.otherDuration}>
                02/2015 - 10/2016
              </Text>
            </View>
          </View>
        </View>
      </Page>
    </Document>
  );
};

export default CV;
