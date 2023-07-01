import PropTypes from 'prop-types';

function MenuRightIcon({handleclick, size = 24, color = '#4F4F4F'}) {
  return (
    <button onClick={() => handleclick()} type='button'>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 7H4" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M20 17H8" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    </button>
  )
}

MenuRightIcon.propTypes = {
  handleclick: PropTypes.func,
  size: PropTypes.number,
  color: PropTypes.string
}

export default MenuRightIcon;