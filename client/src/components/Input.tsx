type Props = {
  type?: React.HTMLInputTypeAttribute;
  label?: string;
  placeholder?: string;
  right?: React.ReactNode;
};

export const Input: React.FC<Props> = ({
  type = "text",
  label,
  placeholder,
  right,
}: Props) => {
  return (
    <div className="flex w-full flex-col space-y-2">
      {label !== undefined && <label className="font-bold">{label}</label>}

      <div className="relative flex w-full rounded-lg bg-[#F9F9F9]">
        <input
          type={type}
          className="z-10 w-full appearance-none rounded-lg bg-transparent p-4 focus:outline-[#5DBD76] focus:outline-none"
          placeholder={placeholder}
        />
        {right && right}
      </div>
    </div>
  );
};
