import type { ReactNode } from "react";

interface GeneralContainerProps {
  children: ReactNode;
  className?: string;
}

export default function GeneralContainer({
  children,
  className = "",
}: GeneralContainerProps) {
  return (
    <div className={`py-16 lg:py-24 mx-auto px-6 md:px-8 max-w-7xl ${className}`}>
      {children}
    </div>
  );
}
