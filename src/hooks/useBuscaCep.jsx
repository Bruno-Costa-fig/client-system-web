import axios from "axios"

async function useBuscaCep(cep) {
  let data = {}
  let error = null

  try {
    const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`)
    data = response.data

  } catch (err){
    error = err.message
  }

  return { data, error }
}
export default useBuscaCep