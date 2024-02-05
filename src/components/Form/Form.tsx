"use client";
import { useEffect, useState } from "react";
import Input from "./Input";
import InputPhone from "./InputPhone";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Modal from "../Modal";
import Interest from "../stepper/Interest";
import Business from "../stepper/Businesses";
interface formProps {
  onClose?: () => void;
}

function Form(props: formProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [interestId, setInterestId] = useState<number | null>(null);
  const [businessIds, setBusinessIds] = useState<number[]>([]);

  const [modalVisible, setModalVisible] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [interestData, setInterestData] = useState<any>(null);
  const [businessData, setBusinessData] = useState<any>(null);

  const openModal = () => {
    if (name.trim() === "" || email.trim() === "" || phone.trim() === "") {
      toast.error("Por favor, preencha todos os campos obrigatórios.", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    } else {
      setModalVisible(true);
    }
  };

  const closeModal = () => {
    setModalVisible(false);
  };
  const nextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    setCurrentStep(currentStep - 1);
  };
  const resetStep = () => {
    if (currentStep === 2) {
      setCurrentStep(currentStep - 0);
    }
  };
  const handleInterestSelection = (idInterest: number) => {
    setInterestId(idInterest);
    setInterestData(idInterest);
  };

  const handleBusinessSelection = (businessId: number) => {
    if (!businessIds.includes(businessId)) {
      if (businessIds.length < 3) {
        setBusinessIds([...businessIds, businessId]);
        setBusinessData(businessId);
      } else {
        toast.warning("Selecione apenas três opções.", {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
      }
    } else {
      setBusinessIds(businessIds.filter((id) => id !== businessId));
    }
  };

  return (
    <>
      <div className="basis-1/2 flex justify-evenly h-[35rem] ">
        <form
          onSubmit={async (e) => {
            e.preventDefault();
            try {
              if (name.length <= 2) {
                toast.info("O nome deve ter mais de 2 letras!", {
                  position: toast.POSITION.BOTTOM_RIGHT,
                });
                return;
              }
              if (phone.length < 10) {
                toast.info(
                  "O número de telefone deve ter pelo menos 10 dígitos!",
                  {
                    position: toast.POSITION.BOTTOM_RIGHT,
                  }
                );
                return;
              }
              if (interestId === null || interestId < 1) {
                toast.info("Tem que ter um interesse selecionado.", {
                  position: toast.POSITION.BOTTOM_RIGHT,
                });
                return;
              }
              if (businessIds.length < 1) {
                toast.info("Tem que ter um selecionado.", {
                  position: toast.POSITION.BOTTOM_RIGHT,
                });
                return;
              }

              const res = await fetch("/api/clients", {
                method: "POST",
                body: JSON.stringify({
                  name,
                  email,
                  phone,
                  interestId,
                  businessIds,
                }),
                headers: {
                  "Content-Type": "application/json",
                },
              });

              const data = await res.json();

              if (data.message === "E-mail já cadastrado") {
                toast.warning(
                  "O e-mail já está registrado. Tente acessar sua conta.",
                  {
                    position: toast.POSITION.BOTTOM_RIGHT,
                  }
                );
                closeModal();
                setTimeout(() => {
                  window.location.reload();
                }, 6000);
                return;
              } else {
                console.log(data);

                toast.success("Conta criada com sucesso!", {
                  position: toast.POSITION.BOTTOM_RIGHT,
                });
                closeModal();
                setTimeout(() => {
                  window.location.reload();
                }, 6000);
              }
            } catch (error) {
              console.error("Erro ao processar a solicitação:", error);
              toast.error("Algo deu errado, tente novamente!", {
                position: toast.POSITION.BOTTOM_RIGHT,
              });
            }
          }}
          className="rounded-md py-10 bg-surface-500/95 p-2 ring-1 ring-white/10 max-w-sm text-center h-auto"
        >
          <h3 className="h3 text-3xl font-semibold">Crie sua conta</h3>
          <div>
            <div className="py-5">
              <Input
                id="email"
                value={email}
                type="email"
                autoComplete="email"
                placeholder="E-mail"
                title={"E-mail *"}
                onChange={setEmail}
              />
              <Input
                id="name"
                value={name}
                type="text"
                autoComplete="name"
                placeholder="Nome ou empresa"
                title={"Nome ou empresa *"}
                onChange={setName}
              />
              <InputPhone
                id={"phone"}
                value={phone}
                onChange={setPhone}
                autoComplete={"phone"}
                placeholder={"Telefone"}
                title={"Telefone *"}
              />
            </div>
          </div>
          <button
            type="button"
            className="btn variant-filled-primary"
            onClick={openModal}
          >
            Crie sua conta
          </button>
          <Modal visible={modalVisible} onClose={closeModal}>
            {currentStep === 0 && (
              <Interest
                id={0}
                onNextStep={nextStep}
                onSelectInterest={handleInterestSelection}
              />
            )}
            {currentStep === 1 && (
              <Business
                id={0}
                onNextStep={nextStep}
                prevStep={prevStep}
                onSelectBusiness={handleBusinessSelection}
                selectedInterest={interestId}
              />
            )}{" "}
            {currentStep === 2 && (
              <div className="rounded-md bg-surface-500/95 ring-1 ring-primary-500/40 w-72 h-48 text-center shadow-sm shadow-primary-500/60">
                <h3 className="h3 text-3xl font-semibold p-10">Vamos lá!</h3>
                <div className="flex justify-evenly">
                  <button
                    className="btn variant-soft-primary text-primary-400"
                    onClick={prevStep}
                  >
                    Voltar
                  </button>
                  <button
                    type="submit"
                    className="btn variant-filled-primary text-white"
                    onClick={resetStep}
                  >
                    Teste grátis
                  </button>
                </div>
              </div>
            )}
          </Modal>
          <p className="text-xs p-5 pb-0">
            Criando sua conta BIMACHINE você aceita os nossos {""}
            <a
              href="https://support.bimachine.com.br/termos-de-uso-e-servicos/"
              target="_blank"
              className="text-tertiary-500 font-medium"
            >
              Termos de Uso e Serviços
            </a>
          </p>
        </form>
      </div>
      <ToastContainer />
    </>
  );
}
export default Form;
