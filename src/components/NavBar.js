import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <nav>
    <p>Gabriel&apos;s bookstore</p>
    <ul>
      <li>
        <NavLink to="/books">
          Books
        </NavLink>
      </li>
      <li>
        <NavLink to="/categories">
          Categories
        </NavLink>
      </li>
    </ul>
  </nav>
);

export default Navbar;
