type Props = {
  className?: string;
  strokeWidth?: number;
};

export const ChevronDownIcon = ({ className, strokeWidth = 1.5 }: Props) => {
  return (
    <svg
      className={className}
      strokeWidth={strokeWidth}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
};
