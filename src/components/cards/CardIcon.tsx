interface cardProps {
  icon?: any;
  type?: string;
  children?: any;
  onClick?: () => void;
  className?: string;
  text?: string;
}

export default function CardIcon(props: cardProps) {
  return (
    <div className="flex items-center gap-5 lg:gap-3 w-5/6 lg:w-1/4">
      <button
        onClick={props.onClick}
        className={`btn-icon w-11 h-11 lg:w-12 lg:h-12 font-size-[30px] line-heigth-[40px] bg-gradient-to-b from-white/5 ring-white/10 ring-1 btn-icon-xl bg-primary-500  text-black text-2xl`}
      >
        {props.icon}
      </button>
      <p className="font-light text-left text-sm lg:text-base">{props.text}</p>
    </div>
  );
}
