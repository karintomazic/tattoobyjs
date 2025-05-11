export default function GeneralContainer({ children, className = "" }) {
  return (
    <div className={`py-16 lg:py-24 mx-auto px-6 md:px-8 max-w-7xl ${className}`}>
      {children}
    </div>
  );
}
