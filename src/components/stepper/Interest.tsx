"use client";
import {useState, useEffect} from "react";
import CardStepper from "./CardStepper";
import CardSkeleton from "./CardSkeleton";

interface interestProps {
  id: number;
  name?: string;
  onNextStep?: () => void;
  onSelectInterest?: any;
}

export default function Interest(props: interestProps) {
  const [interests, setInterests] = useState<interestProps[]>([]);
  const [selectedInterest, setSelectedInterest] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("/api/interests")
      .then((res) => res.json())
      .then((interests) => {
        setInterests(interests);
        setIsLoading(false);
      });
  }, []);

  const handleInterestClick = (interestId: number) => {
    setSelectedInterest(interestId);
    props.onSelectInterest && props.onSelectInterest(interestId);
  };
  return (
    <div className="rounded-md py-10 bg-surface-500 p-2 ring-1 ring-white/10 w-full text-center h-[26rem]">
      <h3 className="h3 text-3xl font-semibold text-primary-500 ">Segmento de interesse</h3>
      <p className="pt-5">Marque a opção que melhor define o segmento de atuação da sua empresa</p>
      <div className="grid p-10 gap-5 grid-cols-5 w-[60rem]">
        {isLoading && <CardSkeleton cards={10} />}
        {interests.map((interest) => (
          <CardStepper
            key={interest.id}
            title={interest.name}
            isSelected={interest.id === selectedInterest}
            onClick={() => handleInterestClick(interest.id)}
          />
        ))}
      </div>
      <div className="flex gap-5 justify-end pr-10 ">
        <button className="btn variant-filled-primary" onClick={props.onNextStep}>
          Seguinte
        </button>
      </div>
    </div>
  );
}
