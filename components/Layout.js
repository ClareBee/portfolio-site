import Header from './Header';
import '../styles.scss';
const Layout = props => (
  <div>
    <Header />
    {props.children}
  </div>
);

export default Layout;
