"use client";
import Form from "./Form/Form";

function Principal() {
  return (
    <>
      <section className="flex flex-col md:flex-row justify-center items-center md:items-start px-6 md:px-16 xl:px-20 py-10">
        <div className="flex flex-col lg:flex-row gap-10 w-full max-w-7xl">
          {/* Contenedor del texto */}
          <div className="lg:basis-3/5 w-full text-center lg:text-left">
            <h1 className="text-2xl sm:text-3xl md:text-4xl xl:text-7xl font-semibold text-white leading-tight">
              Simplifique a análise de dados e maximize seus resultados com a{" "}
              <span className="bg-gradient-to-br from-primary-500 to-tertiary-500 bg-clip-text text-transparent">
                BIMachine.
              </span>
            </h1>
            <div className="mt-6">
              <a
                href="https://www.bimachine.com.br/"
                target="_blank"
                className="btn variant-outline-primary text-white hover:bg-primary-500 font-bold hover:text-black transition duration-150 shadow-lg shadow-primary-700/40 px-6 py-3 rounded-md"
              >
                Saiba mais
              </a>
            </div>
          </div>

          {/* Contenedor del formulario */}
          <div className="md:basis-2/5 flex justify-center w-full">
            <div className="w-full max-w-md md:max-w-lg">
              <Form />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Principal;
