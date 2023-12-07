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
  const [currentStep, setCurrentStep] = useState(1);
  const [interestData, setInterestData] = useState<any>(null);
  const [businessData, setBusinessData] = useState<any>(null);

  const openModal = () => {
    setModalVisible(true);
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

  const handleInterestSelection = (idInterest: number) => {
    setInterestId(idInterest);
    setInterestData(idInterest);
  };

  useEffect(() => {}, [interestId]);

  useEffect(() => {}, [interestData]);

  const handleBusinessSelection = (businessId: number) => {
    if (!businessIds.includes(businessId)) {
      if (businessIds.length < 3) {
        setBusinessIds([...businessIds, businessId]);
      } else {
        toast.warning("Ya has seleccionado tres opciones", {
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
                toast.info("Tiene que tener un interés seleccionado.", {
                  position: toast.POSITION.BOTTOM_RIGHT,
                });
                return;
              }
              if (businessIds.length < 1) {
                toast.info("Tiene que tener un negocio!", {
                  position: toast.POSITION.BOTTOM_RIGHT,
                });
                return;
              }
              console.log("Información a enviar:", {
                name,
                email,
                phone,
                interestId,
                businessIds,
              });
              const res = await fetch("/api/clients", {
                method: "POST",
                body: JSON.stringify({
                  name,
                  email,
                  phone,
                  businessIds,
                  interestId,
                }),
                headers: {
                  "Content-Type": "application/json",
                },
              });

              const data = await res.json();
              console.log(data);

              if (data.message === "E-mail já cadastrado") {
                toast.warning(
                  "O e-mail já está registrado. Tente acessar sua conta.",
                  {
                    position: toast.POSITION.BOTTOM_RIGHT,
                  }
                );
                return;
              } else {
                console.log(data);

                toast.success("Conta criada com sucesso!", {
                  position: toast.POSITION.BOTTOM_RIGHT,
                });
                closeModal();
              }
            } catch (error) {
              console.error("Erro ao processar a solicitação:", error);
              console.log(error);

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
            {currentStep === 1 && (
              <Interest
                id={0}
                onNextStep={nextStep}
                onSelectInterest={handleInterestSelection}
              />
            )}
            {currentStep === 2 && (
              <Business
                id={0}
                onNextStep={nextStep}
                prevStep={prevStep}
                onSelectBusiness={handleBusinessSelection}
                selectedInterest={interestId}
              />
            )}{" "}
            {currentStep === 3 && (
              <button type="submit" className="btn variant-filled-primary">
                Hacer fetch
              </button>
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
