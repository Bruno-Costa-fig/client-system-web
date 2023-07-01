import { useForm } from "react-hook-form";
import moment from "moment";
import {apiService} from "../../services/api"
import Button from "../Button";
import InputGroup from "../InputGroup";
import ArrowLeftIcon from "../icons/ArrowLeftIcon"
import useBuscaCep from "../../hooks/useBuscaCep";
import * as yup from "yup"
import {yupResolver} from "@hookform/resolvers/yup"
import Toast from "../Toast"
import { useRef, useState } from "react";

function FormCadastrarLoja({ showForm = false, handleChangeShowForm }) {
  const [showToast, setShowToast] = useState(false)
  const toastMessage = useRef("")

  const storeSchema = yup.object({
    name: yup.string().required("Nome da loja é obrigatório"),
    city: yup.string().required("Cidade é obrigatório"),
    street: yup.string().required("Rua é obrigatório"),
    zipcode: yup.string().required("CEP é obrigatório"),
    latitude: yup.string().required("Latitude é obrigatório"),
    longitude: yup.string().required("Longitude é obrigatório"),
    amount: yup.string().required("Montante é obrigatório"),
  })

  const { register, reset, formState: { errors }, handleSubmit } = useForm({resolver: yupResolver(storeSchema)})

  const handleCadastrarLoja = async (dados) => {
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
        toastMessage.current = "Cadastrado com sucesso!"
        setShowToast(true)
        handleChangeShowForm()
      }
      
    } catch (error){
      toastMessage.current = "Erro ao cadastrar a loja"
    }
  }

  return (
    <>
      <Toast show={showToast} setShowToast={setShowToast} message={"Aula agendada com sucesso!"} />
      {showForm && <div style={{ zIndex: 100 }} className="absolute top-0 pt-24 p-10 right-0 w-96 max-h-fit bg-white shadow-lg shadow-gray-300">
        <p className="paragraph-md text-center">
          <ArrowLeftIcon title="Fechar formulário" handleClick={() => handleChangeShowForm()}/>
          Cadastrar loja
        </p>
        <form onSubmit={handleSubmit(handleCadastrarLoja)} className="mt-5">
          <InputGroup {...register("name")} name="name" helperText={errors?.name?.message} labelText="Nome da loja" placeholder="Digite aqui" />
          <InputGroup {...register("city")} name="city" helperText={errors?.city?.message} labelText="Cidade" placeholder="Digite aqui" />
          <InputGroup {...register("street")} name="street" helperText={errors?.street?.message} labelText="Logradouro" placeholder="Digite aqui" />
          <InputGroup {...register("zipcode")} name="zipcode" helperText={errors?.zipcode?.message} labelText="CEP" placeholder="Digite aqui" />
          <InputGroup {...register("latitude")} name="latitude" helperText={errors?.latitude?.message} labelText="Latitude" placeholder="Digite aqui" />
          <InputGroup {...register("longitude")} name="longitude" helperText={errors?.longitude?.message} labelText="Longitude" placeholder="Digite aqui" />
          <InputGroup {...register("amount")} name="amount" helperText={errors?.amount?.message} labelText="Montante do mês" placeholder="Digite aqui" />
          <Button type='submit' onClick={handleSubmit(handleCadastrarLoja)}>Cadastrar</Button>
          <Button variant={2} onClick={() => reset()}>Limpar dados</Button>
        </form>
      </div>
      }
    </>
  )
}

export default FormCadastrarLoja;