"use client";
import "react-phone-number-input/style.css";
import { useState } from "react";
import PhoneInput from "react-phone-number-input";

function Form() {
  const [value, setValue] = useState("");
  return (
    <>
      <section className="flex md:flex-row flex-col justify-center min-h-screen">
        <div className="flex xl:px-0 sm:px-16 gap-10 px-12">
          <div className="basis-1/2 justify-evenly h-[30rem] p-10">
            <h1 className="h1 flex-1 font-semibold ss:text-[70px] text-[55px] text-white ss:leading-[100px] leading-[75px] pb-10">
              Simplifique a análise de dados e maximize seus resultados com a{" "}
              <span className="bg-gradient-to-br from-primary-500 to-tertiary-500 bg-clip-text text-transparent box-decoration-clone">
                BIMachine.
              </span>
            </h1>
            {/* Añadir link */}
            <button
              type="button"
              className="btn variant-outline-primary p-y hover:fill-primary-400 "
            >
              Saiba mais
            </button>
          </div>
          <div className="basis-1/2 flex justify-evenly h-[30rem] ">
            <form className="rounded-md py-10 bg-white/5 p-2 ring-1 ring-white/10 max-w-sm text-center">
              <h3 className="h3 font-semibold">Crie sua conta</h3>
              <div>
                <div className="py-10">
                  <input
                    id="email-address"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:tertiary-500  sm:text-sm sm:leading-6"
                    placeholder="Email *"
                  />{" "}
                  {/* Arreglar focus de los inputs */}
                </div>
                <div className="pb-10">
                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    required
                    className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                    placeholder="Nome ou empresa *"
                  />{" "}
                </div>
                <div className="pb-10 justify-items-center px-[78px]">
                  <PhoneInput
                    placeholder="Telefone *"
                    value={value}
                    onChange={(value: any) => setValue(value)}
                    defaultCountry="BR"
                    rules={{ required: true }}
                    numberInputProps={{
                      className:
                        "rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6",
                    }}
                    countrySelectProps={{
                      className: "text-gray-800 bg-white hover:bg-gray-200",
                    }}
                  />{" "}
                </div>
              </div>
              <button type="button" className="btn variant-filled-primary">
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
        </div>
      </section>
    </>
  );
}
export default Form;
