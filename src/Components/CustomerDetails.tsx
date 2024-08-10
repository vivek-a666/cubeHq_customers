import React from 'react';
import { Customer } from '../types/customer';
import PhotoGrid from './Photogrid';

interface CustomerDetailsProps {
  customer: Customer | null;
}

const CustomerDetails: React.FC<CustomerDetailsProps> = ({ customer }) => {
  if (!customer) {
    return <div className="p-4">Select a customer to view details</div>;
  }

  return (
    <div className="p-4 h-full">
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-2">{customer.name}</h2>
        <p className="mb-2"><strong>Title:</strong> {customer.title}</p>
        <p className="mb-4"><strong>Address:</strong> {customer.address}</p>
      </div>
      <div className="flex-grow overflow-scroll scrollbar-thin">
        <PhotoGrid />
      </div>
    </div>
  );
};

export default CustomerDetails;