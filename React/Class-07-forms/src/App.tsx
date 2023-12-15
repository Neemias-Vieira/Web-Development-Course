import { SubmitHandler, useForm } from "react-hook-form";
import "./App.css";

type Input = {
  name: string;
  email: string;
};

export function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Input>();

  const onSubmit: SubmitHandler<Input> = (data) => {
    console.log(data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1>Class 07 Forms</h1>

      <section>
        <label>
          Nome:
          <input
            type="text"
            {...register("name", {
              required: "Campo Obrigatório",
              minLength: { value: 3, message: "Mínimo de 3 caracteres" },
              maxLength: {
                value: 1000,
                message: "Não tente fazer um ataque a nosso sistema",
              },
            })}
          />
        </label>
        <span className="error">{errors.name?.message}</span>
      </section>

      <section>
        <label>
          Email:
          <input
            type="email"
            {...register("email", {
              required: "Campo Obrigatório",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
                message: "Email inválido",
              },
            })}
          />
        </label>
        <span className="error">{errors.email?.message}</span>
      </section>

      <button>Cadastrar</button>
      {/*Default esse button ja vem com reload da pagina ao ser clicado, mas no SPA isso nao existe. Entao vamos mudar*/}
    </form>
  );
}
