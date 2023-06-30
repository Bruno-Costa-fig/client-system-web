import { useForm } from "react-hook-form";
import moment from "moment";
import {apiService} from "../../services/api"
import Button from "../Button";
import InputGroup from "../InputGroup";
import ArrowLeftIcon from "../icons/ArrowLeftIcon"
import useBuscaCep from "../../hooks/useBuscaCep";

function FormCadastrarLoja({ showForm = false, handleChangeShowForm }) {

  const { register, reset, formState: { errors }, handleSubmit } = useForm()

  const handleCadastrarLoja = async (dados) => {
    debugger
    try {
      const store = {...dados}

      const {data, error} = await useBuscaCep(dados.zipcode)

      if(!!error){
        alert("Erro ao buscar endereço!")
        return
      }

      const adress = {
        zipcode: data.cep,
        street: dados.street,
        neighborhood: data.bairro,
        state: data.uf,
        city: dados.city
      }

      store.adress = adress

      store.createdAt = moment(new Date).format("YYYY-MM-DD")

      const result = await apiService.post("/stores", store)

      if(result.error == null){
        alert("Cadastrado com sucesso!")
        handleChangeShowForm()
      }

    } catch (error){
      alert("Erro ao cadastrar a loja")
    }
  }

  return (
    <>
      {showForm && <div style={{ zIndex: 100 }} className="absolute top-0 pt-24 p-10 right-0 w-96 max-h-fit bg-white shadow-lg shadow-gray-300">
        <p className="paragraph-md text-center">
          <ArrowLeftIcon title="Fechar formulário" handleClick={() => handleChangeShowForm()}/>
          Cadastrar loja
        </p>
        <form onSubmit={handleSubmit(handleCadastrarLoja)} className="mt-5">
          <InputGroup {...register("name")} name="name" labelText="Nome da loja" placeholder="Digite aqui" />
          <InputGroup {...register("city")} name="city" labelText="Cidade" placeholder="Digite aqui" />
          <InputGroup {...register("street")} name="street" labelText="Logradouro" placeholder="Digite aqui" />
          <InputGroup {...register("zipcode")} name="zipcode" labelText="CEP" placeholder="Digite aqui" />
          <InputGroup {...register("latitude")} name="latitude" labelText="Latitude" placeholder="Digite aqui" />
          <InputGroup {...register("longitude")} name="longitude" labelText="Longitude" placeholder="Digite aqui" />
          <InputGroup {...register("amount")} name="amount" labelText="Montante do mês" placeholder="Digite aqui" />
          <Button type='submit' onClick={handleSubmit(handleCadastrarLoja)}>Cadastrar</Button>
          <Button variant={2} onClick={() => reset()}>Limpar dados</Button>
        </form>
      </div>
      }
    </>
  )
}

export default FormCadastrarLoja;