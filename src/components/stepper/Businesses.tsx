import { useEffect, useState } from "react";
import CardStepper from "./CardStepper";
import { toast } from "react-toastify";

interface businessesProps {
  id: number;
  name?: string;
  onNextStep?: () => void;
  prevStep?: () => void;
  onSelectBusiness: (businessId: number) => void; // Prop para manejar la selección de negocio
  selectedInterest: number | null; // Debes pasar el interés seleccionado desde el componente Form
}
export default function Businesses(props: businessesProps) {
  const [businesses, setBusinesses] = useState<any[]>([]);
  const [selectedBusiness, setSelectedBusiness] = useState<number[]>();

  useEffect(() => {
    const fetchInterests = async () => {
      try {
        const res = await fetch("/api/business", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const data = await res.json();
        setBusinesses(data);
      } catch (error) {
        // Manejar errores de solicitud
        console.error("Error fetching interests:", error);
      }
    };

    fetchInterests();
  }, []);

  const handleInterestClick = (businessId: number) => {
    if (!Array.isArray(selectedBusiness)) {
      setSelectedBusiness([businessId]);
    } else if (selectedBusiness.includes(businessId)) {
      setSelectedBusiness(selectedBusiness.filter((id) => id !== businessId));
    } else if (selectedBusiness.length < 3) {
      setSelectedBusiness([...selectedBusiness, businessId]);
    } else {
      toast.warning("Ya has seleccionado tres opciones", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    }
    props.onSelectBusiness && props.onSelectBusiness(businessId);
  };

  return (
    <div className="rounded-md py-10 bg-surface-500 p-2 ring-1 ring-white/10 w-full text-center h-auto btn-icon-">
      <h3 className="h3 text-3xl font-semibold text-primary-500 ">
        Segmento de interesse
      </h3>
      <p className="pt-5">
        Marque a opção que melhor define o segmento de atuação da sua empresa
      </p>
      <div className="grid p-10 gap-5 grid-cols-5	">
        {businesses.map((business) => (
          <CardStepper
            key={business.id}
            title={business.name}
            isSelected={
              selectedBusiness !== undefined &&
              selectedBusiness.includes(business.id)
            }
            onClick={() => handleInterestClick(business.id)}
          />
        ))}
      </div>
      <div className="flex gap-5 justify-end pr-10">
        <button className="btn variant-soft-primary" onClick={props.prevStep}>
          Anterior
        </button>
        <button
          className="btn variant-filled-primary"
          onClick={props.onNextStep}
        >
          Siguente
        </button>
      </div>
    </div>
  );
}
