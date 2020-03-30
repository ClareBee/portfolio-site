import React from 'react';
import {
  Page,
  Text,
  Link,
  View,
  Document,
  Image,
} from '@react-pdf/renderer';
import { useMediaQuery } from 'react-responsive';
import { styles, mobileStyles } from '../styles/javascript/pdf';

const CV = () => {
  const handleMediaQueryChange = () => {
    console.log('changing');
  };

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
