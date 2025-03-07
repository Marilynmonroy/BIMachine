import Plataform from "./svg/Multiplataform";

function Multiplataform() {
  return (
    <section className="flex md:flex-row flex-col justify-center pt-10 md:py-20">
      <div className="flex md:flex-row flex-col items-center px-10 md:px-20 md:gap-x-10">
        <div className="text-center md:text-left w-full">
          <h2 className="h2 text-2xl md:text-4xl font-semibold">
            Potencial ilimitado em todas as{" "}
            <span className="bg-gradient-to-br from-primary-500 to-tertiary-500 bg-clip-text text-transparent box-decoration-clone">
              plataformas{" "}
            </span>
          </h2>
          <p className="text-surface-100 font-normal pt-7 md:text-base text-sm">
            Descubra a liberdade de acessar seus dados desde qualquer lugar. BIMachine é uma solução multiplataforma que
            permite explorar, analisar e tomar decisões estratégicas, não importa o dispositivo que você esteja
            utilizando. Tenha uma visão completa do seu negócio a partir do seu desktop, celular ou tablet,
            proporcionando a capacidade de gerenciar seus dados onde e quando precisar.
          </p>
        </div>
        <div className="w-full flex justify-center pt-5 md:pt-0">
          <Plataform className="lg:w-96 lg:h-96" />
        </div>
      </div>
    </section>
  );
}

export default Multiplataform;
