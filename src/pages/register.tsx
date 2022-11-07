import Image from "next/image";
import Link from "next/link";
import Router from "next/router";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import Loading from "../components/Loading";
import axios from "../service/axios";

interface IFormInput {
  name: string;
  email: string;
  password: string;
  rePassword: string;
}

export default function Register() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<IFormInput>();

  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [registerError, setRegisterError] = useState(false);
  const [registerSuccess, setRegisterSuccess] = useState(false);

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    setName(data.name);
    setEmail(data.email);
    setPassword(data.password);

    try {
      setLoading(true);
      await axios.post(`/user`, {
        name,
        email,
        password,
      });
      setLoading(false);
      setRegisterSuccess(true);
    } catch (error) {
      setRegisterError(true);
      setLoading(false);
    }
  };

  return (
    <div className="h-screen w-screen bg-black_500">
      {loading && <Loading />}
      <section className="max-w-full mx-auto flex  gap-4">
        <div className="flex flex-col justify-center items-star h-screen w-[550px] px-16 md:p-10">
          <h1 className="uppercase text-white text-xl md:text-3xl font-bold tracking-wider cursor-pointer">
            <Link href="/"> Oliveira trade</Link>
          </h1>
          <p className="text-gray-500 text-left mb-8">Crie sua conta</p>
          {registerError && (
            <p className="error">
              Sinto muito não foi possível criar a conta,tente mais tarde
            </p>
          )}
          {registerSuccess && (
            <p className="success">Conta criada com sucesso</p>
          )}

          <form
            className="text-white mt-8 space-y-8 md:mr-12"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="grid">
              <label className="text-gray-500 text-xs">Nome</label>
              <input
                className="inputRegister"
                type="text"
                {...register("name", {
                  required: true,
                  maxLength: 20,
                  pattern: /([A-Za-z]\s?){3,20}$/g,
                })}
              />
              {errors?.name?.type === "required" && (
                <p className="error">Este campo é obrigatório</p>
              )}
              {errors.name?.type === "maxLength" && (
                <p className="error">
                  Nome não pode ser maior que 20 caracteres
                </p>
              )}
              {errors.name?.type === "pattern" && (
                <p className="error">Somente letras alfabéticas</p>
              )}
            </div>
            <div className="grid">
              <label className="text-gray-500 text-xs">E-mail</label>
              <input
                className="inputRegister "
                type="email"
                {...register("email", {
                  required: true,
                  pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                })}
              />
              {errors?.email?.type === "required" && (
                <p className="error">Este campo é obrigatório</p>
              )}
              {errors?.email?.type === "pattern" && (
                <p className="error">E-mail invalido</p>
              )}
            </div>
            <div className="grid">
              <label className="text-gray-500 text-xs">Senha</label>
              <input
                className="inputRegister"
                type="password"
                {...register("password", {
                  required: true,
                  minLength: 6,
                  pattern:
                    /((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,
                })}
              />
              {errors?.password?.type === "required" && (
                <p className="error">Este campo é obrigatório</p>
              )}
              {errors.password?.type === "minLength" && (
                <p className="error">Senha precisa ter 6 caracteres</p>
              )}
              {errors.password?.type === "pattern" && (
                <p className="error">
                  Senha muito fraca, precisa ter letras e números
                </p>
              )}
            </div>
            <div className="grid">
              <label className="text-gray-500 text-xs">Repita senha</label>
              <input
                className="inputRegister"
                type="password"
                {...register("rePassword", {
                  required: true,
                  minLength: 6,
                  pattern:
                    /((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,
                })}
              />
              {watch("password") !== watch("rePassword") && (
                <p className="error">As senhas estão diferentes</p>
              )}
            </div>
            <input
              className="bg-gray-200 text-gray-700 w-full p-2 rounded-md cursor-pointer hover:bg-primary_500"
              type="submit"
              value="Criar conta"
            />
          </form>
        </div>
        <div className="hidden md:flex justify-center h-screen w-screen ">
          <Image
            className="object-cover"
            src="/imagens/register.jpg"
            alt="Image register and login"
            height={800}
            width={1200}
          />
        </div>
      </section>
    </div>
  );
}
