import { StyleSheet } from '@react-pdf/renderer';

const palette = {
  background: '#ECEFF2',
  white: '#FDFDFD',
  primary: '#DA2497',
  secondary: '#536390',
  heading: '#696673',
  font: '#373F51',
  divider: '#C1CAD6',
};

export const styles = StyleSheet.create({
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
    margin: 5,
    marginRight: 10,
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
    marginRight: 5,
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

export const mobileStyles = StyleSheet.create({
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

export const buttonStyles = StyleSheet.create({
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
