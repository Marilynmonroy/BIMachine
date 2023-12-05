import partners from "../assets/partners.svg";

function Partner() {
  return (
    <>
      <div className="flex">
        <div className="">
          <h2 className="h2 font-semibold">
            Seu aliado{" "}
            <span className="bg-gradient-to-br from-primary-500 to-tertiary-500 bg-clip-text text-transparent box-decoration-clone">
              estratégico{" "}
            </span>
            em dados
          </h2>
          <p className="text-surface-200 font-light">
            Na BIMachine, não oferecemos apenas ferramentas poderosas, mas nos
            tornamos seu aliado mais confiável no mundo dos dados. Com soluções
            intuitivas, análises preditivas e integração sem esforço de
            múltiplas fontes, comprometemo-nos a ser seu melhor parceiro na
            jornada em direção a decisões empresariais mais inteligentes e
            estratégicas.
          </p>
        </div>
        <div className="flex items-center justify-evenly p-10">
          <img src={partners} alt="partners" />
        </div>
      </div>
    </>
  );
}

export default Partner;
