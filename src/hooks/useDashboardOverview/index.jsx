import { useState, useEffect } from "react"
import {apiService} from "../../services/api"

function useDashboardOverview () {
  const [data, setData] = useState([])
  const [error, setError] = useState(null)

  const fetchData = async () => {
    const response = await apiService.get('/dashboardOverview')

    setError(response.error)
    setData(response.data)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return {
    dashboardOverview: data,
    error
  }
}

export default useDashboardOverview