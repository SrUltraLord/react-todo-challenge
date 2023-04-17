type Props = {
  onClick: () => void;
  text: string;
};

export const Button: React.FC<Props> = ({ text, onClick }: Props) => {
  return (
    <button
      className="w-full rounded-2xl border-none bg-[#5DBD76] py-3 font-bold text-white active:bg-[#408752]"
      onClick={onClick}
    >
      {text}
    </button>
  );
};
