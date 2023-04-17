type Props = {
  children: React.ReactNode;
};

export const NavBar: React.FC<Props> = ({ children }) => {
  return (
    <nav className="flex w-full justify-between border-b-2 border-gray-100 bg-white px-8 pb-6 pt-10">
      {children}
    </nav>
  );
};
