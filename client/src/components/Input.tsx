import { ChangeEvent } from "react";

type Props = {
  type?: React.HTMLInputTypeAttribute;
  label?: string;
  name?: string;
  placeholder?: string;
  right?: React.ReactNode;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
};

export const Input: React.FC<Props> = ({
  type = "text",
  label,
  name,
  placeholder,
  right,
  onChange,
}: Props) => {
  return (
    <div className="flex w-full flex-col space-y-2">
      {label !== undefined && <label className="font-bold">{label}</label>}

      <div className="relative flex w-full rounded-lg bg-[#F9F9F9]">
        <input
          className="z-10 w-full appearance-none rounded-lg bg-transparent p-4 focus:outline-none focus:outline-[#5DBD76]"
          type={type}
          name={name}
          placeholder={placeholder}
          onChange={onChange}
        />
        {right && right}
      </div>
    </div>
  );
};
