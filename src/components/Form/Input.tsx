interface inputProps {
  id: string;
  value: any;
  onChange: (value: any) => void;
  type: string;
  autoComplete: string;
  placeholder: string;
  title: string;
  className?: string;
}

function Input(props: inputProps) {
  return (
    <label className="py-4">
      <span className="block text-sm font-medium text-left text-white pb-2  px-20">
        {props.title}
      </span>
      <input
        id={props.id}
        value={props.value}
        type={props.type}
        autoComplete={props.autoComplete}
        required
        onChange={(e) => props.onChange?.(e.target.value)}
        className={`peer rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 sm:text-sm sm:leading-6`}
        placeholder={props.placeholder}
      />
    </label>
  );
}

export default Input;
