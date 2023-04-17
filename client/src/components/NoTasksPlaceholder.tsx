import { ArchiveBoxXMarkIcon } from "../icons";

export const NoTasksPlaceholder = () => {
  return (
    <div className="grid h-full w-full place-items-center bg-white">
      <div className="text-slate-400 grid place-items-center">
        <ArchiveBoxXMarkIcon className="w-24" />
        <p className="font-bold text-xl"> No tasks </p>
      </div>
    </div>
  );
};
