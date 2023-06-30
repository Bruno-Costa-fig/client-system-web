import PropTypes from 'prop-types';

function UpArrowIcon({ className, size = 16, color = "#00A843" }) {
  return (
    <svg className={`cursor-pointer ${className}`} width={size} height={Number.parseInt(size) + 1} viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M11.9467 11.0467H7.79335H4.05335C3.41335 11.0467 3.09335 10.2734 3.54668 9.82003L7.00002 6.36669C7.55335 5.81336 8.45335 5.81336 9.00668 6.36669L10.32 7.68003L12.46 9.82003C12.9067 10.2734 12.5867 11.0467 11.9467 11.0467Z" fill={color} />
    </svg>
  )
}

UpArrowIcon.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string
}

export default UpArrowIcon;