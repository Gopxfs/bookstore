import { NavLink } from 'react-router-dom';
import profilePlaceholder from '../images/profilePlaceholder.png';

const Navbar = () => (
  <nav>
    <p>Gabriel&apos;s bookstore</p>
    <ul>
      <li>
        <NavLink to="/books">
          BOOKS
        </NavLink>
      </li>
      <li>
        <NavLink to="/categories">
          CATEGORIES
        </NavLink>
      </li>
    </ul>
    <img src={profilePlaceholder} alt="Profile" />
  </nav>
);

export default Navbar;
