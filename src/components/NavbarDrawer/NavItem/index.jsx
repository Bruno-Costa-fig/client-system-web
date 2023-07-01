import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function NavItem({children, text, to}) {
  return ( 
    <Link to={to}>
      <li title={"Link para " + text} className="ms-8 flex items-center h-12 cursor-pointer hover:border-solid border-e-4 border-brand-color-blue-100">
        {children}
        <span className="paragraph-md ms-3">{text}</span>
      </li>
    </Link>
  );
}

NavItem.propTypes = {
  text: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired
}

export default NavItem;