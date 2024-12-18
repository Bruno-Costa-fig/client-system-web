import PropTypes from 'prop-types';

function EqualIcon({ className, size = 16, color = "#F3D11B" }) {
  return (
    <svg className={`cursor-pointer ${className}`} width={size} height={Number.parseInt(size) + 1} viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10.7933 1.83331H5.20665C2.77998 1.83331 1.33331 3.27998 1.33331 5.70665V11.2866C1.33331 13.72 2.77998 15.1666 5.20665 15.1666H10.7866C13.2133 15.1666 14.66 13.72 14.66 11.2933V5.70665C14.6666 3.27998 13.22 1.83331 10.7933 1.83331ZM10.6666 8.99998H5.33331C5.05998 8.99998 4.83331 8.77331 4.83331 8.49998C4.83331 8.22665 5.05998 7.99998 5.33331 7.99998H10.6666C10.94 7.99998 11.1666 8.22665 11.1666 8.49998C11.1666 8.77331 10.94 8.99998 10.6666 8.99998Z" fill={color} />
    </svg>
  )
}

EqualIcon.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string
}

export default EqualIcon;