import Aliados from "./svg/Aliados";

function Partner() {
  return (
    <section className="flex md:flex-row flex-col justify-center min-h-screen">
      <div className="flex items-center">
        <div className="p-20 text-left">
          <h2 className="h2 text-6xl font-semibold">
            Seu aliado{" "}
            <span className="bg-gradient-to-br from-primary-500 to-tertiary-500 bg-clip-text text-transparent box-decoration-clone">
              estratégico{" "}
            </span>
            em dados
          </h2>
          <p className="text-surface-100 font-normal pt-7">
            Na BIMachine, não oferecemos apenas ferramentas poderosas, mas nos
            tornamos seu aliado mais confiável no mundo dos dados. Com soluções
            intuitivas, análises preditivas e integração sem esforço de
            múltiplas fontes, comprometemo-nos a ser seu melhor parceiro na
            jornada em direção a decisões empresariais mais inteligentes e
            estratégicas.
          </p>
        </div>
        <div className="p-20">
          <Aliados width="30rem" height="25rem" />
        </div>
      </div>
    </section>
  );
}

export default Partner;
