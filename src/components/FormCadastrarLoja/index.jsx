import Button from "../Button";
import InputGroup from "../InputGroup";
import ArrowLeftIcon from "../icons/ArrowLeftIcon"

function FormCadastrarLoja({ showForm = false, handleChangeShowForm }) {
  return (
    <>
      {showForm && <div style={{ zIndex: 100 }} className="absolute top-0 pt-24 p-10 right-0 w-96 max-h-fit bg-white shadow-lg shadow-gray-300">
      {/* handleChangeShowFrom */}

        <p className="paragraph-md text-center">
          <ArrowLeftIcon handleClick={() => handleChangeShowForm()}/>
          Cadastrar loja
        </p>
        <form className="mt-5">
          <InputGroup labelText="Nome da loja" placeholder="Digite aqui" />
          <InputGroup labelText="Cidade" placeholder="Digite aqui" />
          <InputGroup labelText="Latitude" placeholder="Digite aqui" />
          <InputGroup labelText="Longitude" placeholder="Digite aqui" />
          <InputGroup labelText="Montante do mês" placeholder="Digite aqui" />
          <Button onClick={() => {}}>Acessar</Button>
          <Button variant={2} onClick={() => alert('aqui')}>Limpar dados</Button>
        </form>
      </div>
      }
    </>
  )
}

export default FormCadastrarLoja;