import InputGroup from "../../components/InputGroup"
import Button from "../../components/Button"

function Login() {
  return ( 
    <main className="w-screen h-screen flex">
      <div className="w-full md:3/6 lg:w-2/6 max-h-full px-10 mt-12 flex flex-col justify-between">
        <img src="/logo.svg" alt="Logo" />
        <div className="h-4/5">
          <h3 className="mb-2">Login</h3>
          <p>Informe os dados abaixo para acessar a nossa plataforma.</p>
          <form className="mt-5">
            <InputGroup labelText="Login" />
            <InputGroup labelText="Senha" type="password" />
            <Button>Acessar</Button>
          </form>
        </div>
      </div>
      <div className="hidden md:flex w-full h-full bg-imagem-fundo-2 bg-center bg-no-repeat">
      </div>
    </main>
  );
}

export default Login;