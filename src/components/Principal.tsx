"use client";
import Form from "./Form/Form";

function Principal() {
  return (
    <>
      <section className="flex md:flex-row flex-col justify-center">
        <div className="flex xl:px-3 md:px-16 gap-10 px-12">
          <div className="basis-3/5 h-auto px-20">
            <h1 className="h1 font-semibold ss:text-7xl text-6xl text-white ss:leading-[100px] leading-[75px] pb-10">
              Simplifique a análise de dados e maximize seus resultados com a{" "}
              <span className="bg-gradient-to-br from-primary-500 to-tertiary-500 bg-clip-text text-transparent box-decoration-clone">
                BIMachine.
              </span>
            </h1>
            <a
              href="https://www.bimachine.com.br/"
              target="_blank"
              className="btn variant-outline-primary hover:bg-primary-500 hover:text-black transition duration-150 shadow-lg shadow-primary-700/40"
            >
              Saiba mais
            </a>
          </div>
          <div className="basis-1/2 flex justify-evenly h-[40rem]">
            <Form />
          </div>
        </div>
      </section>
    </>
  );
}
export default Principal;
