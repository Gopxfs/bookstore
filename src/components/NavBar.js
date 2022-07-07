import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <nav>
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
