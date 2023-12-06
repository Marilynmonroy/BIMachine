interface ModalProps {
  visible?: boolean;
  children: any;
  onClose?: () => void;
  onClick?: () => void;
}

export default function Modal(props: ModalProps) {
  if (!props.visible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
      {props.children}
    </div>
  );
}
