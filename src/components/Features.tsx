"use client";

import {IoGitNetworkSharp} from "react-icons/io5";
import {MdOutlineDashboardCustomize} from "react-icons/md";
import {MdOutlineSecurity} from "react-icons/md";
import {MdOutlineSettingsSuggest} from "react-icons/md";

import Card from "./cards/Card";
import {useState} from "react";
import Modal from "./Modal";
import Form from "./Form/Form";

function Features() {
  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };
  return (
    <section className="flex flex-col items-center justify-center">
      <div className="text-center w-full px-10 md:px-20">
        <div className="rounded-2xl pb-5 lg:pb-10 max-w-xl mx-auto">
          <h2 className="h2 text-2xl md:text-4xl font-semibold">
            Nossas{" "}
            <span className="bg-gradient-to-br from-primary-500 to-tertiary-500 bg-clip-text text-transparent">
              funcionalidades
            </span>
          </h2>
          <p className="p-2 md:p-5 text-surface-200 font-light md:text-base text-sm">
            Descubra os poderosos recursos da BIMachine para impulsionar seus negócios.
          </p>
        </div>

        {/* Tarjetas organizadas con grid responsivo */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:p-12">
          <Card
            icon={<IoGitNetworkSharp />}
            title="Integração"
            text="Permite a integração de múltiplas fontes de dados, consolidando-as em um único local para uma análise mais completa e precisa."
            href="https://support.bimachine.com/conectores-de-dados/"
          />
          <Card
            icon={<MdOutlineDashboardCustomize />}
            title="Dashboards"
            text="Facilita a criação de relatórios e painéis personalizados de forma intuitiva, permitindo uma visualização clara e compreensível dos dados."
            href="https://support.bimachine.com/category/dashboards/"
          />
          <Card
            icon={<MdOutlineSecurity />}
            title="Segurança"
            text="Oferece funcionalidades robustas de segurança, permitindo um controle preciso sobre quem acessa quais dados, garantindo a privacidade."
            href="https://support.bimachine.com/seguranca-no-compartilhamento-do-whatsapp/"
          />
          <Card
            icon={<MdOutlineSettingsSuggest />}
            title="Gestão (ERP)"
            text="Permite monitorar e gerenciar o desempenho empresarial por meio de indicadores e métricas, facilitando a tomada de decisões estratégicas."
            href="https://support.bimachine.com/integracao-do-bi-com-o-erp/"
          />
        </div>

        {/* Botón centrado */}
        <div className="mt-10">
          <button
            onClick={openModal}
            className="btn lg:btn-xl variant-outline-primary hover:bg-primary-500 hover:text-black transition duration-150 shadow-lg shadow-primary-700/40"
          >
            Faça um teste grátis
          </button>
        </div>

        {/* Modal */}
        <Modal visible={modalVisible} onClose={closeModal}>
          <Form />
        </Modal>
      </div>
    </section>
  );
}

export default Features;
