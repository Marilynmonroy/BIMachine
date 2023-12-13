"use client";
import { useState } from "react";

interface cardsProps {
  title?: string;
  isSelected?: boolean;
  onClick?: () => void;
}

export default function CardStepper(props: cardsProps) {
  const [isSelect, setIsSelect] = useState(false);

  const handleCardClick = () => {
    setIsSelect(!isSelect);
  };

  const baseCardStyle =
    "rounded-md bg-white/5 items-center align-center p-5 variant-outline-primary hover:bg-primary-500 hover:text-black hover:transform scale-100";
  const selectCardStyle =
    "rounded-md bg-primary-500 ring-white/10 ring-1 variant-outline-white items-center align-center p-5 hover:transform scale-110 transition duration-100 card-hover";

  const baseTitleStyle =
    "h3 text-sm font-semibold text-white align-center hover:text-black";
  const selectTitleStyle = "h3 text-sm font-semibold text-black";

  return (
    <div
      className={props.isSelected ? selectCardStyle : baseCardStyle}
      onClick={props.onClick}
    >
      <h3 className={props.isSelected ? selectTitleStyle : baseTitleStyle}>
        {props.title}
      </h3>
    </div>
  );
}
