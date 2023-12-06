"use client";
import "react-phone-number-input/style.css";
import { useState } from "react";
import PhoneInput from "react-phone-number-input";
import Input from "./Input";
import InputPhone from "./InputPhone";

function Form() {
  const [value, setValue] = useState("");
  return (
    <>
      <div className="basis-1/2 flex justify-evenly h-[35rem]">
        <form className="rounded-md py-10 bg-white/5 p-2 ring-1 ring-white/10 max-w-sm text-center h-auto">
          <h3 className="h3 text-3xl font-semibold">Crie sua conta</h3>
          <div>
            <div className="py-5">
              <Input
                id="email"
                value="email"
                type="email"
                autoComplete="email"
                placeholder="E-mail"
                title={"E-mail *"}
                onChange={function (value: any): void {
                  throw new Error("Function not implemented.");
                }}
              />
              <Input
                id="name"
                value="name"
                type="text"
                autoComplete="name"
                placeholder="Nome ou empresa"
                title={"Nome ou empresa *"}
                onChange={function (value: any): void {
                  throw new Error("Function not implemented.");
                }}
              />
              <InputPhone
                id={"phone"}
                value={"phone"}
                onChange={function (value: any): void {
                  throw new Error("Function not implemented.");
                }}
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
