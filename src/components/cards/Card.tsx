"use client";
import {IoGitNetworkSharp} from "react-icons/io5";

interface CardProps {
  icon?: any;
  title?: string;
  text?: string;
  href?: string;
}

export default function Card({icon, title, text, href}: CardProps) {
  return (
    <div className="group relative rounded-md py-5 bg-gradient-to-b from-white/5 ring-white/10 ring-1 p-5 text-center transition-all duration-300 ease-in-out hover:bg-primary-500 hover:ring-primary-600 hover:shadow-lg hover:scale-105">
      {/* Ícono con animación en hover */}
      <button className="btn-icon btn-icon-xl bg-primary-500 text-black text-3xl transition-all duration-300 ease-in-out group-hover:bg-black group-hover:text-primary-500 group-hover:scale-110">
        {icon}
      </button>

      {/* Contenido */}
      <div className="h-auto md:h-40 mt-4">
        <h3 className="text-base font-semibold py-2 transition-all duration-300 ease-in-out group-hover:text-black">
          {title}
        </h3>
        <p className="font-thin text-sm transition-all duration-300 ease-in-out group-hover:text-black">{text}</p>
      </div>

      {/* Botón "Saiba mais" solo visible en desktop */}
      <a
        href={href}
        target="_blank"
        className="hidden md:block opacity-0 absolute bottom-5 left-1/2 -translate-x-1/2 px-4 py-2 bg-black text-white rounded-md text-sm font-medium transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:translate-y-0"
      >
        Saiba mais
      </a>

      {/* Botón fijo en mobile con margen extra para evitar solapamientos */}
      <div className="mt-4 md:hidden">
        <a
          href={href}
          target="_blank"
          className="block w-full px-4 py-2 bg-primary-500 text-black rounded-md text-sm font-medium transition-all duration-300 ease-in-out hover:bg-primary-600"
        >
          Saiba mais
        </a>
      </div>
    </div>
  );
}
