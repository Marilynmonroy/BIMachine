"use client";
import { useState } from "react";
import Input from "./Input";
import InputPhone from "./InputPhone";

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
              const res = await fetch("/api/clients", {
                method: "POST",
                body: JSON.stringify({ name, email, phone }),
                headers: {
                  "Content-Type": "application/json",
                },
              });
              const data = await res.json();
              alert("Conta criada com sucesso!");
            } catch (error) {
              alert("Algo deu errado, tente novamente!");
            }
          }}
          className="rounded-md py-10 bg-surface-500/95 p-2 ring-1 ring-white/10 max-w-sm text-center h-auto "
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
              className="text-tertiary-500 font-medium"
            >
              Termos de Uso e Serviços
            </a>
          </p>
        </form>
      </div>
    </>
  );
}
export default Form;
