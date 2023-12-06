"use client";
import "react-phone-number-input/style.css";
import { useState } from "react";
import PhoneInput from "react-phone-number-input";
import Form from "./Form/Form";

function Principal() {
  const [value, setValue] = useState("");
  return (
    <>
      <section className="flex md:flex-row flex-col justify-center min-h-screen">
        <div className="flex xl:px-0 sm:px-16 gap-10 px-12 items-start">
          <div className="basis-1/2 justify-evenly h-[30rem] px-20">
            <h1 className="h1 flex-1 font-semibold ss:text-7xl text-5xl text-white ss:leading-[100px] leading-[75px] pb-10">
              Simplifique a análise de dados e maximize seus resultados com a{" "}
              <span className="bg-gradient-to-br from-primary-500 to-tertiary-500 bg-clip-text text-transparent box-decoration-clone">
                BIMachine.
              </span>
            </h1>
            <a
              href="https://www.bimachine.com.br/"
              target="_blank"
              className="btn variant-outline-primary hover:bg-primary-500 hover:text-black"
            >
              Saiba mais
            </a>
          </div>
          <Form />
        </div>
      </section>
    </>
  );
}
export default Principal;
