import { NavLink } from 'react-router-dom';
import '../styles/Navbar.css';

const links = [
  { to: '/', label: 'Home' },
  { to: '/skills', label: 'Skills' },
  { to: '/projects', label: 'Projects' },
  { to: '/certifications', label: 'Certifications' },
  { to: '/contact', label: 'Contact' },
];

function Navbar() {
  return (
    <nav className="navbar">
      <NavLink to="/" className="brand">
        Geetha<span>Shankar</span>
      </NavLink>
      <ul className="nav-links">
        {links.map((link) => (
          <li key={link.to}>
            <NavLink
              to={link.to}
              className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
            >
              {link.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;