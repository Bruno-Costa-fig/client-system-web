import PropTypes from 'prop-types';

function PlusIcon({ className, handleclick = null, size = 24, color = '#2382A0' }) {
  return (
    <button className={`cursor-pointer ${className}`} onClick={() => handleclick()} type='button'>
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 12H18" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 18V6" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </button>
  )
}

PlusIcon.propTypes = {
  handleclick: PropTypes.func,
  size: PropTypes.number,
  color: PropTypes.string
}

export default PlusIcon;