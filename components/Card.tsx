import React, { ReactNode } from "react";

type ServiceCardProps = {
  service: string;
  borderClass: string;
  children: ReactNode;
};

// ServiceCard Component
const ServiceCard: React.FC<ServiceCardProps> = ({ service, borderClass, children }) => {
  return (
    <div
      className={`bg-white p-6 rounded-lg shadow-md border-t-4 ${borderClass}`}
    >
      <h3 className="text-xl font-semibold mb-4">{service}</h3>
      <p className="text-gray-700">{children}</p>
    </div>
  );
};

export default ServiceCard;
