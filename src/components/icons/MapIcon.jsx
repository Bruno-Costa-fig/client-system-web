import PropTypes from 'prop-types';

function MapIcon({handleclick = null, size = 20, color = '#2382A0'}) {
  return (
    <button onClick={() => handleclick()} type='button'>
      <svg width={size} height={size} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6.35834 2.975C6.50783 2.89347 6.66667 3.01891 6.66667 3.18918V14.4666C6.66667 14.6639 6.53159 14.8305 6.35834 14.925L4.40001 16.0417C3.03334 16.825 1.90834 16.175 1.90834 14.5917V6.48334C1.90834 5.95834 2.28334 5.30834 2.75001 5.04167L6.35834 2.975Z" fill={color}/>
        <path d="M12.2219 5.06227C12.3922 5.14662 12.5 5.32026 12.5 5.51033V16.2869C12.5 16.6554 12.115 16.8973 11.783 16.7374L8.40798 15.1113C8.23498 15.028 8.125 14.8529 8.125 14.6609V3.8389C8.125 3.46804 8.51456 3.22625 8.8469 3.39084L12.2219 5.06227Z" fill={color}/>
        <path d="M18.3333 5.40831V13.5166C18.3333 14.0416 17.9583 14.6916 17.4917 14.9583L14.7069 16.5543C14.3736 16.7453 13.9583 16.5046 13.9583 16.1205V5.32363C13.9583 5.14411 14.0546 4.97838 14.2105 4.88939L15.8417 3.95831C17.2083 3.17497 18.3333 3.82497 18.3333 5.40831Z" fill={color}/>
      </svg>
    </button>
  )
}

MapIcon.propTypes = {
  handleclick: PropTypes.func,
  size: PropTypes.number,
  color: PropTypes.string
}

export default MapIcon;