import NotificationIcon from "../../icons/NotificationIcon"
import DownArrowIcon from "../../icons/DownArrowIcon"

function MenuProfile() {
  return ( 
    <div className="me-2 flex items-center">
      <NotificationIcon size={36} className='me-5 pe-2 border-solid border-r-2 border-gray-color-80' />
      <span className="p-3 me-3 text-white rounded-full bg-brand-color-blue-100">
        AG
      </span>
      <p>Agilino José</p>
      <DownArrowIcon className='ms-3' color="#333" />
    </div>
  );
}

export default MenuProfile;