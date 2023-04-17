type Props = {
  className?: string;
  strokeWidth?: number;
};

export const ClockIcon = ({ className, strokeWidth = 1.5 }: Props) => {
  return (
    <svg
      className={className}
      strokeWidth={strokeWidth}
      stroke="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  );
};
