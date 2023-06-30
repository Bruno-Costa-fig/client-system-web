import { useState, useEffect } from "react"
import {apiService} from "../../services/api"

function useStoreList () {
  const [data, setData] = useState([])
  const [error, setError] = useState(null)

  const fetchData = async () => {
    debugger
    const response = await apiService.get('/stores')

    setError(response.error)
    setData(response.data)
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