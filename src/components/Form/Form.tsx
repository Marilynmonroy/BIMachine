"use client";
import { useState } from "react";
import Input from "./Input";
import InputPhone from "./InputPhone";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
interface formProps {
  onClose?: () => void;
}

function Form(props: formProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  return (
    <>
      <div className="basis-1/2 flex justify-evenly h-[35rem] ">
        <form
          onSubmit={async (e) => {
            e.preventDefault();
            try {
              if (name.length <= 2) {
                toast.info("O nome deve ter mais de 2 letras!", {
                  position: toast.POSITION.BOTTOM_RIGHT,
                });
                return;
              }
              if (phone.length < 10) {
                toast.info(
                  "O número de telefone deve ter pelo menos 10 dígitos!",
                  {
                    position: toast.POSITION.BOTTOM_RIGHT,
                  }
                );
                return;
              }

              const res = await fetch("/api/clients", {
                method: "POST",
                body: JSON.stringify({ name, email, phone }),
                headers: {
                  "Content-Type": "application/json",
                },
              });

              const data = await res.json();
              if (data.message === "E-mail já cadastrado") {
                toast.warning(
                  "O e-mail já está registrado. Tente acessar sua conta.",
                  {
                    position: toast.POSITION.BOTTOM_RIGHT,
                  }
                );
                return;
              } else {
                toast.success("Conta criada com sucesso!", {
                  position: toast.POSITION.BOTTOM_RIGHT,
                });
              }
            } catch (error) {
              console.error("Erro ao processar a solicitação:", error);
              toast.error("Algo deu errado, tente novamente!", {
                position: toast.POSITION.BOTTOM_RIGHT,
              });
            }
          }}
          className="rounded-md py-10 bg-surface-500/95 p-2 ring-1 ring-white/10 max-w-sm text-center h-auto"
        >
          <h3 className="h3 text-3xl font-semibold">Crie sua conta</h3>
          <div>
            <div className="py-5">
              <Input
                id="email"
                value={email}
                type="email"
                autoComplete="email"
                placeholder="E-mail"
                title={"E-mail *"}
                onChange={setEmail}
              />
              <Input
                id="name"
                value={name}
                type="text"
                autoComplete="name"
                placeholder="Nome ou empresa"
                title={"Nome ou empresa *"}
                onChange={setName}
              />
              <InputPhone
                id={"phone"}
                value={phone}
                onChange={setPhone}
                autoComplete={"phone"}
                placeholder={"Telefone"}
                title={"Telefone *"}
              />
            </div>
          </div>
          <button type="submit" className="btn variant-filled-primary ">
            Crie sua conta
          </button>
          <p className="text-xs p-5 pb-0">
            Criando sua conta BIMACHINE você aceita os nossos {""}
            <a
              href="https://support.bimachine.com.br/termos-de-uso-e-servicos/"
              target="_blank"
              className="text-tertiary-500 font-medium"
            >
              Termos de Uso e Serviços
            </a>
          </p>
        </form>
      </div>
      <ToastContainer />
    </>
  );
}
export default Form;
