import {FiDatabase} from "react-icons/fi";
import {HiOutlineDocumentReport} from "react-icons/hi";
import {BsColumnsGap} from "react-icons/bs";

import CardIcon from "./cards/CardIcon";

function What() {
  return (
    <section>
      <div className="text-center justify-center">
        <div className="rounded-2xl pt-10 md:pt-20 bg-gradient-to-b from-white/5 md:p-5 text-center">
          <h2 className="h2 text-2xl md:text-4xl font-semibold">
            O que{" "}
            <span className="bg-gradient-to-br from-primary-500 to-tertiary-500 bg-clip-text text-transparent box-decoration-clone">
              fazemos?
            </span>
          </h2>
          <p className="p-5 text-surface-200 font-light">
            Gerencie, analise e aja com rapidez: a BIMachine torna cada passo possível.
          </p>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-evenly p-3 md:px-10 md:gap-8 lg:p-10 gap-4 lg:gap-0">
          <CardIcon icon={<FiDatabase />} text="Integração de dados de várias fontes facilmente." />
          <CardIcon
            icon={<HiOutlineDocumentReport className={"text-3xl"} />}
            text="Geração de relatórios personalizados e compreensíveis"
          />
          <CardIcon icon={<BsColumnsGap />} text="Visualização de dados em painéis dinâmicos interativos." />
        </div>
      </div>
    </section>
  );
}

export default What;
