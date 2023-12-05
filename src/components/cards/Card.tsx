interface cardProps {
  icon?: any;
  type?: string;
  children?: any;
  onClick?: () => void;
  className?: string;
  text?: string;
}

export default function Button(props: cardProps) {
  return (
    <div className="flex items-center gap-3 w-1/4">
      <button
        onClick={props.onClick}
        className={`btn-icon w-[50px] h-[50px] font-size-[20px] line-heigth-[30px] bg-gradient-to-b from-white/5 ring-white/10 ring-1`}
      >
        {props.icon}
      </button>
      <p className="font-extralight text-left">{props.text}</p>
    </div>
  );
}
