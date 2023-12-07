"use client";
import { useState } from "react";

interface interestProps {
  title?: string;
  isSelected?: boolean;
  onClick?: () => void;
}

export default function CardStepper(props: interestProps) {
  const [isSelect, setIsSelect] = useState(false);

  const handleCardClick = () => {
    setIsSelect(!isSelect);
  };

  const baseCardStyle =
    "rounded-md bg-white/5 items-center align-center p-5 variant-outline-primary hover:bg-primary-500 hover:text-black";
  const selectCardStyle =
    "rounded-md bg-primary-500 ring-white/10 ring-1 variant-outline-white items-center align-center p-5";

  const baseTitleStyle = "h3 text-sm font-semibold text-white hover:text-black";
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
