type ContainerProps = {
  children: React.ReactNode;
};
const Container = ({ children }: ContainerProps) => {
  return (
    <div className="max-w-7xl flex flex-col m-auto bg-white/[2%] min-h-screen">
      {children}
    </div>
  );
};

export default Container;
