import Plataform from "./svg/Multiplataform";

function Multiplataform() {
  return (
    <section className="flex md:flex-row flex-col justify-center min-h-screen">
      <div className="flex items-center">
        <div className="p-20 text-left">
          <h2 className="h2 text-[50px] leading-tight font-semibold">
            Potencial ilimitado em todas as{" "}
            <span className="bg-gradient-to-br from-primary-500 to-tertiary-500 bg-clip-text text-transparent box-decoration-clone">
              plataformas{" "}
            </span>
          </h2>
          <p className="text-surface-100 font-normal pt-7">
            Descubra a liberdade de acessar seus dados desde qualquer lugar.
            BIMachine é uma solução multiplataforma que permite explorar,
            analisar e tomar decisões estratégicas, não importa o dispositivo
            que você esteja utilizando. Tenha uma visão completa do seu negócio
            a partir do seu desktop, celular ou tablet, proporcionando a
            capacidade de gerenciar seus dados onde e quando precisar.
          </p>
        </div>
        <div className="p-20">
          <Plataform width="30rem" height="25rem" />
        </div>
      </div>
    </section>
  );
}

export default Multiplataform;
