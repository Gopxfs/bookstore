import { NavLink } from 'react-router-dom';

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
  </nav>
);

export default Navbar;
