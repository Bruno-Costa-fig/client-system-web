import PropTypes from 'prop-types';

function EyeIcon({handleclick = null, size = 20, color = '#BDBDBD'}) {
  return (
    <button className='absolute me-3 z-10 cursor-pointer bg-white' onClick={() => handleclick()} type='button'>
      <svg width={size} height={size} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M17.7083 7.62494C15.7833 4.59994 12.9666 2.85828 9.99996 2.85828C8.51663 2.85828 7.07496 3.29161 5.75829 4.09994C4.44163 4.91661 3.25829 6.10828 2.29163 7.62494C1.45829 8.93328 1.45829 11.0583 2.29163 12.3666C4.21663 15.3999 7.03329 17.1333 9.99996 17.1333C11.4833 17.1333 12.925 16.6999 14.2416 15.8916C15.5583 15.0749 16.7416 13.8833 17.7083 12.3666C18.5416 11.0666 18.5416 8.93328 17.7083 7.62494ZM9.99996 13.3666C8.13329 13.3666 6.63329 11.8583 6.63329 9.99994C6.63329 8.14161 8.13329 6.63328 9.99996 6.63328C11.8666 6.63328 13.3666 8.14161 13.3666 9.99994C13.3666 11.8583 11.8666 13.3666 9.99996 13.3666Z" fill={color}/>
        <path d="M10 7.6167C8.69167 7.6167 7.625 8.68337 7.625 10C7.625 11.3084 8.69167 12.375 10 12.375C11.3083 12.375 12.3833 11.3084 12.3833 10C12.3833 8.6917 11.3083 7.6167 10 7.6167Z" fill={color}/>
      </svg>
    </button>
  )
}

EyeIcon.propTypes = {
  handleclick: PropTypes.func,
  size: PropTypes.number,
  color: PropTypes.string
}

export default EyeIcon;