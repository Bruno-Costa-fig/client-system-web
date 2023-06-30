import PropTypes from 'prop-types';

function ArrowLeftIcon({ className, size = 16, handleClick, color = '#333333' }) {
  return (
    <svg  className={`cursor-pointer ${className}`} onClick={() => handleClick()} width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6.38016 3.95331L2.3335 7.99997L6.38016 12.0466" stroke={color} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M13.6668 8H2.44678" stroke={color} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

ArrowLeftIcon.propTypes = {
  handleClick: PropTypes.func,
  size: PropTypes.number,
  color: PropTypes.string
}

export default ArrowLeftIcon;