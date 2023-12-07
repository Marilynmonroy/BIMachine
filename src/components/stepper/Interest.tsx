"use client";
import { useState, useEffect } from "react";
import CardStepper from "./CardStepper";

interface interestProps {
  id: number;
  name?: string;
  onNextStep?: () => void;
  onSelectInterest?: any;
}

export default function Interest(props: interestProps) {
  const [interests, setInterests] = useState<interestProps[]>([]);
  const [selectedInterest, setSelectedInterest] = useState<number | null>(null);

  useEffect(() => {
    const fetchInterests = async () => {
      try {
        const res = await fetch("/api/interests", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const data = await res.json();
        setInterests(data);
      } catch (error) {
        // Manejar errores de solicitud
        console.error("Error fetching interests:", error);
      }
    };

    fetchInterests();
  }, []);

  //  const handleInterestClick = (interestId: number) => {
  //  setSelectedInterest(interestId === selectedInterest ? null : interestId);
  //};
  //  const handleInterestClick = (interestId: number) => {
  //  setSelectedInterest(interestId === selectedInterest ? null : interestId);
  //  props.onSelectInterest && props.onSelectInterest(interestId);
  //   console.log("Interés seleccionado:", interestId); // Agregar aquí el console.log
  //  };
  const handleInterestClick = (interestId: number) => {
    setSelectedInterest(interestId);
    props.onSelectInterest && props.onSelectInterest(interestId); // Pasar el interés seleccionado al Form
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
        {interests.map((interest) => (
          <CardStepper
            key={interest.id}
            title={interest.name}
            isSelected={interest.id === selectedInterest}
            onClick={() => handleInterestClick(interest.id)}
          />
        ))}
      </div>
      <div className="flex gap-5 justify-end pr-10">
        <button className="btn variant-soft-primary disabled:opacity-75">
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
