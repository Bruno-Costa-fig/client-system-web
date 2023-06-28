import PropTypes from 'prop-types';

function NavItem({children, text}) {
  return ( 
    <li title={"Link para " + text} className="ms-8 flex items-center h-12 cursor-pointer hover:border-solid border-e-4 border-brand-color-blue-100">
      {children}
      <span className="paragraph-md ms-3">{text}</span>
    </li>
  );
}

NavItem.propTypes = {
  text: PropTypes.string.isRequired
}

export default NavItem;