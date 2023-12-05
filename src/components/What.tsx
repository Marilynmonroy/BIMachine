import { FiDatabase } from "react-icons/fi";
import { HiOutlineDocumentReport } from "react-icons/hi";
import { BsColumnsGap } from "react-icons/bs";

import Card from "./cards/Card";

function What() {
  return (
    <>
      <div className="text-center justify-center">
        <div className="rounded-2xl pt-20 bg-gradient-to-b from-white/5 p-5 text-center">
          <h2 className="h2 font-semibold">
            O que{" "}
            <span className="bg-gradient-to-br from-primary-500 to-tertiary-500 bg-clip-text text-transparent box-decoration-clone">
              fazemos?
            </span>
          </h2>
          <p className="p-5 text-surface-200 font-light">
            Gerencie, analise e aja com rapidez: a BIMachine torna cada passo
            possível.
          </p>
        </div>
        <div className="flex items-center justify-evenly p-10">
          <Card
            icon={<FiDatabase />}
            text="Integração de dados de várias fontes facilmente."
          />
          <Card
            icon={<HiOutlineDocumentReport />}
            text="Geração de relatórios personalizados e compreensíveis"
          />
          <Card
            icon={<BsColumnsGap />}
            text="Visualização de dados em painéis dinâmicos interativos."
          />
        </div>
      </div>
    </>
  );
}

export default What;
