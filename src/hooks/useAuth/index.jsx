import { useNavigate } from "react-router-dom"
import { apiService } from "../../services/api"

const useAuth = () => {
  const navigate = useNavigate()

  const signIn = async (email, password) => {
    const result = await apiService.get("/users")
    const userStorage = result.data
    const hasUser = userStorage.filter(user => user.email == email)

    if(!!hasUser && hasUser[0].email == email && hasUser[0].password == password){
      const token = Math.random().toString(36).substring(2)
      localStorage.setItem("user_token", JSON.stringify({email, name: hasUser[0].name, token}))
      return
    } else {
      return "E-mail ou senha inválido!"
    }
  }

  const signOut = () => {
    localStorage.removeItem("user_token")
    navigate("/login")
  }

  const getUser = () => {
    const userToken = JSON.parse(localStorage.getItem("user_token"))

    if(!!userToken) {
      return userToken
    }

    return ""
  }

  return ({getUser, signIn, signOut})
}

export default useAuth