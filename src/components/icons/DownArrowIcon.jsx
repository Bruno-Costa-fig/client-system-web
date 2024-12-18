import PropTypes from 'prop-types';

function DownArrowIcon({ className, size = 16, color = "#E64B4B" }) {
  return (
    <svg className={`cursor-pointer ${className}`} width={size} height={Number.parseInt(size) + 1} viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M11.9466 5.95331H7.79329H4.05329C3.41329 5.95331 3.09329 6.72664 3.54662 7.17997L6.99995 10.6333C7.55329 11.1866 8.45329 11.1866 9.00662 10.6333L10.32 9.31997L12.46 7.17997C12.9066 6.72664 12.5866 5.95331 11.9466 5.95331Z" fill={color} />
    </svg>
  )
}

DownArrowIcon.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string
}

export default DownArrowIcon;