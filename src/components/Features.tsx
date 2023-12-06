"use client";

import { IoGitNetworkSharp } from "react-icons/io5";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { MdOutlineSecurity } from "react-icons/md";
import { MdOutlineSettingsSuggest } from "react-icons/md";

import Card from "./cards/Card";

function Features() {
  return (
    <section className="flex md:flex-row flex-col justify-center">
      <div className="text-center justify-center">
        <div className="rounded-2xl pb-10">
          <h2 className="h2 text-4xl font-semibold">
            Nossas{" "}
            <span className="bg-gradient-to-br from-primary-500 to-tertiary-500 bg-clip-text text-transparent box-decoration-clone">
              funcionalidades
            </span>
          </h2>
          <p className="p-5 text-surface-200 font-light">
            Descubra os poderosos recursos da BIMachine para impulsionar seus
            negócios.
          </p>
        </div>
        <div className="flex items-center justify-evenly p-12 gap-10 h-72 mb-7">
          <Card
            className="hover: text-black"
            icon={<IoGitNetworkSharp />}
            title="Integração"
            text="Permite a integração de múltiplas fontes de dados, consolidando-as em um único local para uma análise mais completa e precisa."
          />
          <Card
            icon={<MdOutlineDashboardCustomize />}
            title="Dashboards"
            text="Facilita a criação de relatórios e painéis personalizados de forma intuitiva, permitindo uma visualização clara e compreensível dos dados."
          />
          <Card
            icon={<MdOutlineSecurity />}
            title="Segurança"
            text="Oferece funcionalidades robustas de segurança, permitindo um controle preciso sobre quem acessa quais dados, garantindo a privacidade."
          />
          <Card
            icon={<MdOutlineSettingsSuggest />}
            title="Gestão (EPM)"
            text="Permite monitorar e gerenciar o desempenho empresarial por meio de indicadores e métricas, facilitando a tomada de decisões estratégicas."
          />
        </div>
        <a
          href="https://www.bimachine.com.br/"
          target="_blank"
          className="btn variant-outline-primary hover:bg-primary-500 hover:text-black"
        >
          VOY A SER UN MODAL DE REGISTRO
        </a>
      </div>
    </section>
  );
}

export default Features;
