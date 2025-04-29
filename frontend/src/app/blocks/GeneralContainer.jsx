export default function GeneralContainer({ children, className = "" }) {
  return (
    <div className={`py-20 lg:py-32 ${className}`}>
      <div className="mx-auto px-8 max-w-7xl">
        {children}
      </div>
    </div>
  );
}

