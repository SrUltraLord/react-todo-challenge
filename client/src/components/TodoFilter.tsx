type Props = {
  completeFilter?: boolean;
  setCompleteFilter: (completeFilter?: boolean) => void;
};

export const TodoFilter: React.FC<Props> = ({
  completeFilter,
  setCompleteFilter,
}: Props) => {
  const activeStyles = "text-gray-700 border-b-4 border-gray-700";

  return (
    <div className="flex flex-row gap-8 border-b-2 border-gray-100 bg-white px-8 font-sans">
      <button
        className={`pb-4 pt-6 font-bold text-slate-500 ${
          completeFilter === undefined && activeStyles
        } `}
        onClick={() => setCompleteFilter(undefined)}
      >
        All
      </button>

      <button
        className={`pb-4 pt-6 font-bold text-slate-500 ${
          completeFilter === true && activeStyles
        } `}
        onClick={() => setCompleteFilter(true)}
      >
        Completed
      </button>

      <button
        className={`pb-4 pt-6 font-bold text-slate-500 ${
          completeFilter === false && activeStyles
        } `}
        onClick={() => setCompleteFilter(false)}
      >
        Uncompleted
      </button>
    </div>
  );
};
