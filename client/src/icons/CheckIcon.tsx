type Props = {
  className: string;
};

export const CheckIcon = ({ className }: Props) => {
  return (
    <svg
      className={className}
      strokeWidth={1.5}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4.5 12.75l6 6 9-13.5"
      />
    </svg>
  );
};
