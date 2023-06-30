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
      localStorage.setItem("user_token", JSON.stringify({email, token}))
      return
    } else {
      return "E-mail ou senha inválido!"
    }
  }

  const signOut = () => {
    localStorage.removeItem("user_token")
    navigate("/login")
  }

  const getUser = async () => {
    const userToken = localStorage.getItem("user_token")
    const result = await apiService.get("/users")
    const userStorage = result.data

    if(userToken && userStorage) {
      const hasUser = userStorage.filter(user => user.email === JSON.parse(userToken).email)

      if(hasUser) {
        return hasUser[0]
      }
    }
  }

  return ({getUser, signIn, signOut})
}

export default useAuth