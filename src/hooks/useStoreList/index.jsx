import { useState, useEffect } from "react"
import {apiService} from "../../services/api"

function useStoreList () {
  const [data, setData] = useState([])
  const [error, setError] = useState(null)

  const campareStore = (a, b) => {
    if(a.amount > b.amount){
      return -1
    } else if (a.amount < b.amount){
      return 1
    }

    return 0
  }

  const fetchData = async () => {
    debugger
    const response = await apiService.get('/stores')

    setError(response.error)
    setData(response.data.sort(campareStore))
  }

  useEffect(() => {
    fetchData()
  }, [])

  return {
    stores: data,
    error
  }
}

export default useStoreList