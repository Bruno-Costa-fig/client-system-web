import NotificationIcon from "../../icons/NotificationIcon"
import DownArrowIcon from "../../icons/DownArrowIcon"
import useAuth from "../../../hooks/useAuth"
import { useEffect, useState } from "react"

function MenuProfile() {
  const {getUser} = useAuth()

  const [user, setUser] = useState({name: "Agilino José"})

  const getInitialLetters = (name) => {
    let nameArr = name.split(" ")

    let initials = ""

    nameArr.map(item => {
      initials += item.substr(0,1)
    })

    return initials
  }

  useEffect(() => {
    setUser(getUser())
  }, [])

  return ( 
    <div className="me-2 flex items-center">
      <NotificationIcon size={36} className='me-5 pe-2 border-solid border-r-2 border-gray-color-80' />
      <span className="p-3 me-3 text-white rounded-full bg-brand-color-blue-100">
        {getInitialLetters(user.name)}
      </span>
      <p>{user.name}</p>
      <DownArrowIcon className='ms-3' color="#333" />
    </div>
  );
}

export default MenuProfile;