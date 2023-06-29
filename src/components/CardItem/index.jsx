import PropTypes from 'prop-types';
import DownArrowIcon from '../icons/DownArrowIcon';
import UpArrowIcon from '../icons/UpArrowIcon';
import EqualIcon from '../icons/EqualIcon';

function CardItem({ text, children, percentage, type, value, className }) {

  const getDescription = (type) => {
    switch (type) {
      case "up":
        return "Crescimento de"
      case "equal":
        return "Constância de"
      case "down":
        return "Declinação de"
    }
  }

  const getColor = (type) => {
    switch (type) {
      case "down":
        return "text-brand-color-red"
      case "up":
        return "text-brand-color-green"
      case "equal":
        return "text-brand-color-yellow"
    }
  }

  const getIcon = (type) => {
    switch (type) {
      case "down":
        return <DownArrowIcon />
      case "up":
        return <UpArrowIcon />
      case "equal":
        return <EqualIcon />
    }
  }

  return (
    <div className={`w-full h-32 px-4 flex items-center justify-between rounded shadow-md ${className}`}>
      <div className='flex flex-col'>
        {children}
        <p className="font-bold text-xl mt-2">{text}</p>
        <div className="paragraph-sm text-gray-color-60 flex align-center">
          {getDescription(type)} 
          <span className={`font-bold ${getColor(type)} ms-1`}>{percentage}%</span> 
          {getIcon(type)}
        </div>
      </div>
      <div>
        <span className='font-bold heading-3'>{value}</span>
      </div>
    </div>
  );
}

CardItem.propType = {
  text: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
  value: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['down', 'up', 'equal'])
}

export default CardItem;