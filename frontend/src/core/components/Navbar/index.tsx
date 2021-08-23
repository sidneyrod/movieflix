import { Link } from 'react-router-dom';
import { logout } from '../../utils/auth';
import './styles.scss';

const Navbar = () => {
  return (
    <nav className="navbar-container">
      <div className="navbar-content">
        <Link to="/" className="navbar-logo">MovieFlix</Link>
        <div className="navbar-logout-button">
        <span
            className="navbar-logout-button-text"
            onClick={ logout }
          >
            Sair
          </span>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;