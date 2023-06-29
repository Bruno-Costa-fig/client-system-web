function ContainerWrapper({ children, className }) {
  return (
    <div className={`w-100 min-h-full mt-24 m-5 flex flex-col justify-center items-start ${className}`}>
      {children}
    </div>
  );
}

export default ContainerWrapper;