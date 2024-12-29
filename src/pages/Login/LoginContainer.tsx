import { Input } from "../../components/Input/Input";
import bgLogin from "../../assets/unsplash_o0Qqw21-0NI (1).svg";
import { Button } from "../../components/Button/Button";
import { InputPassword } from "../../components/Input/InputPassword";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

export type LoginData = {
  email: string;
  password: string;
};

export type LoginContainerProps = {
  onSubmit: (data: LoginData) => void;
};

export function LoginContainer({ onSubmit }: LoginContainerProps) {
  const { register, handleSubmit } = useForm<LoginData>();

  return (
    <main className="w-full min-h-screen flex items-center justify-center">
      <div className="flex flex-col w-[50%]  items-center max-md:w-full max-md:px-10 justify-center px-12 gap-10">
        <div className="flex flex-col w-full items-center justify-center gap-12 ">
          <h1 className="font-poppins text-2xl font-medium">Entrar</h1>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full flex flex-col gap-3"
          >
            <div className="flex flex-col items-start gap-2">
              <label htmlFor="" className="font-poppins text-base">
                Email
              </label>
              <Input
                {...register("email")}
                placeholder="Insira seu email"
                size="regular"
                borderColor="gray"
              />
            </div>
            <div className="flex flex-col items-start gap-2">
              <label htmlFor="" className="font-poppins text-base">
                Senha
              </label>
              <InputPassword
                {...register("password")}
                placeholder="Insira sua senha"
              />
            </div>
            <div className="w-full px-2 flex items-center">
              <Button title="Entrar" type="submit">
                Entrar
              </Button>
            </div>
          </form>
        </div>
        <p className="text-sm font-poppins text-center">
          Ainda não tem uma conta?{" "}
          <Link to="/cadastrar">
            <span className="text-blue-700 underline">Cadastrar</span>
          </Link>{" "}
        </p>
      </div>
      <div className="w-[50%] max-md:hidden max-md:invisible">
        <img
          src={bgLogin}
          alt="pilha de livros"
          className="w-full h-screen object-cover"
        />
      </div>
    </main>
  );
}
