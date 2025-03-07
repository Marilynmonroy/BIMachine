import Aliados from "./svg/Aliados";

function Partner() {
  return (
    <section className="flex md:flex-row flex-col justify-center pt-10 md:py-20">
      <div className="flex md:flex-row flex-col items-center px-10 md:px-20 md:gap-x-10">
        <div className="text-center md:text-left w-full">
          <h2 className="h2 text-2xl md:text-4xl font-semibold">
            Seu aliado{" "}
            <span className="bg-gradient-to-br from-primary-500 to-tertiary-500 bg-clip-text text-transparent">
              estratégico{" "}
            </span>
            em dados
          </h2>
          <p className="text-surface-100 font-normal pt-7 md:text-base text-sm">
            Na BIMachine, não oferecemos apenas ferramentas poderosas, mas nos tornamos seu aliado mais confiável no
            mundo dos dados. Com soluções intuitivas, análises preditivas e integração sem esforço de múltiplas fontes,
            comprometemo-nos a ser seu melhor parceiro na jornada em direção a decisões empresariais mais inteligentes e
            estratégicas.
          </p>
        </div>
        <div className="w-full flex justify-center pt-5 md:pt-0">
          <Aliados className="lg:w-96 lg:h-96" />
        </div>
      </div>
    </section>
  );
}

export default Partner;
