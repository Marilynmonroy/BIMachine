"use client";
import { useState } from "react";

interface cardProps {
  icon?: any;
  type?: string;
  children?: any;
  href?: string;
  className?: string;
  text?: string;
  title?: string;
}

export default function Card(props: cardProps) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const baseCardStyle =
    "rounded-md py-5 bg-gradient-to-b from-white/5 ring-white/10 ring-1 items-center gap-3 w-1/4 align-center p-5";
  const enlargedCardStyle =
    "rounded-md py-5 bg-primary-500 ring-white/10 ring-1 items-center gap-3 w-1/4 align-center p-5";

  const baseTitleStyle = "h3 text-base font-semibold py-4";
  const enlargedTitleStyle = "h3 text-base font-semibold py-4 text-black";

  const baseTextStyle = "font-thin text-sm pb-4";
  const enlargedTextStyle = "font-extralight text-sm pb-5 text-black";

  const baseButtonStyle =
    "btn-icon btn-icon-xl bg-primary-500  text-black text-3xl";
  const enlargedButtonStyle =
    "btn-icon btn-icon-xl bg-black text-primary-500 transition-all";

  return (
    <div
      className={isHovered ? enlargedCardStyle : baseCardStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        className={`${isHovered ? enlargedButtonStyle : baseButtonStyle} ${
          isHovered ? "transform scale-110" : ""
        }`}
      >
        {props.icon}
      </button>
      <div className="h-40">
        <h3 className={isHovered ? enlargedTitleStyle : baseTitleStyle}>
          {props.title}
        </h3>
        <p className={isHovered ? enlargedTextStyle : baseTextStyle}>
          {props.text}
        </p>
      </div>
      {isHovered && (
        <a href={props.href} target="_blank" className="btn variant-filled">
          Saiba mais
        </a>
      )}
    </div>
  );
}
