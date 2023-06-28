import PropTypes from 'prop-types';

function MenuLeftIcon({handleclick, size = 24, color = '#4F4F4F'}) {
  return (
    <button onClick={() => handleclick()} type='button'>
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 7H20" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M4 17H16" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    </button>
  )
}

MenuLeftIcon.propTypes = {
  handleclick: PropTypes.func,
  size: PropTypes.number,
  color: PropTypes.string
}

export default MenuLeftIcon;