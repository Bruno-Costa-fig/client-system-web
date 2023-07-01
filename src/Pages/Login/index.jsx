import InputGroup from "../../components/InputGroup"
import Button from "../../components/Button"
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth"
import { useNavigate } from "react-router-dom";

function Login() {
  const { register, formState: { errors }, handleSubmit } = useForm()
  const {signIn} = useAuth()
  const navigate = useNavigate()

  const handleSignIn = async (dados) => {
    if(!!dados && !!dados?.email && !!dados.password){
      const res = await signIn(dados.email, dados.password)

      if(!!res){
        // error
      }

      navigate("/")
    }
  }

  return ( 
    <main className="w-screen h-screen flex">
      <div className="w-full md:3/6 lg:w-2/6 max-h-full px-10 mt-12 flex flex-col justify-between">
        <img src="/logo.svg" alt="Logo" />
        <div className="h-4/5">
          <h3 className="mb-2">Login</h3>
          <p>Informe os dados abaixo para acessar a nossa plataforma.</p>
          <form className="mt-5" onSubmit={handleSubmit(handleSignIn)}>
            <InputGroup {...register("email")} name="email" helperText={errors?.email?.message} labelText="Login" placeholder="Digite aqui" />
            <InputGroup {...register("password")} name="password" helperText={errors?.password?.message} labelText="Senha" type="password" placeholder="Digite aqui" />
            <Button type='submit' onClick={handleSubmit(handleSignIn)}>Acessar</Button>
          </form>
        </div>
      </div>
      <div className="hidden md:flex w-full h-full bg-imagem-fundo-2 bg-center bg-no-repeat">
      </div>
    </main>
  );
}

export default Login;