import { Link } from 'react-router-dom';
import './styles.css';

const Navbar = () => (
  <header className="panel-bg">
    <h1 className="Bookstore-CMS">BookStore CMS</h1>
    <nav>
      <Link className="link-books" to="/">BOOKS</Link>
      <Link className="link-categories" to="/Categories">CATEGORIES</Link>
    </nav>
    <img src="https://www.apkmirror.com/wp-content/themes/APKMirror/ap_resize/ap_resize.php?src=https%3A%2F%2Fdownloadr2.apkmirror.com%2Fwp-content%2Fuploads%2F2023%2F06%2F27%2F649982c38215a_com.meizu.account.png&w=96&h=96&q=100" alt="profile-pic" className="nav-img" />
  </header>
);

export default Navbar;
