import { useEffect, useState } from "react";
import CardStepper from "./CardStepper";
import { toast } from "react-toastify";
import CardSkeleton from "./CardSkeleton";

interface businessesProps {
  id: number;
  name?: string;
  onNextStep?: () => void;
  prevStep?: () => void;
  onSelectBusiness: (businessId: number) => void;
  selectedInterest: number | null;
}
export default function Businesses(props: businessesProps) {
  const [businesses, setBusinesses] = useState<any[]>([]);
  const [selectedBusiness, setSelectedBusiness] = useState<number[]>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("/api/business")
      .then((res) => res.json())
      .then((businesses) => {
        setBusinesses(businesses);
        setIsLoading(false);
      });
  }, []);

  const handleInterestClick = (businessId: number) => {
    if (!Array.isArray(selectedBusiness)) {
      setSelectedBusiness([businessId]);
    } else if (selectedBusiness.includes(businessId)) {
      setSelectedBusiness(selectedBusiness.filter((id) => id !== businessId));
    } else if (selectedBusiness.length < 3) {
      setSelectedBusiness([...selectedBusiness, businessId]);
    }
    props.onSelectBusiness && props.onSelectBusiness(businessId);
  };

  return (
    <div className="rounded-md py-10 bg-surface-500 p-2 ring-1 ring-white/10 w-[70rem] text-center h-[32rem]">
      <h3 className="h3 text-3xl font-semibold text-primary-500 ">
        Área de Negócio
      </h3>
      <p className="pt-5">
        Selecione até 3 áreas de negócio que você deseja conhecer com nossas
        aplicações analíticas prontas.
      </p>
      <div className="grid p-10 gap-5 grid-cols-5">
        {isLoading && <CardSkeleton cards={15} />}
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
        <button
          className="btn variant-soft-primary text-white/90"
          onClick={props.prevStep}
        >
          Voltar
        </button>
        <button
          className="btn variant-filled-primary"
          onClick={props.onNextStep}
        >
          Seguinte
        </button>
      </div>
    </div>
  );
}
