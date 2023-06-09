type Props = {
  className?: string;
  strokeWidth?: number;
};

export const ChevronLeftIcon = ({ className, strokeWidth = 1.5 }: Props) => {
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
        d="M15.75 19.5L8.25 12l7.5-7.5"
      />
    </svg>
  );
};
