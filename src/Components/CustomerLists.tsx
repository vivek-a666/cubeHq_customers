import React from 'react';
import { Customer } from '../types/customer';

interface CustomerListProps {
  customers: Customer[];
  selectedCustomerId: number | null;
  onSelectCustomer: (customer: Customer) => void;
}

const CustomerLists: React.FC<CustomerListProps> = ({ customers, selectedCustomerId, onSelectCustomer }) => {
  return (
    <div className="h-full overflow-y-auto scrollbar-thin scrollbar-thumb-darkorg">
      {customers.map((customer) => (
        <div
          key={customer.id}
          className={`p-4 cursor-pointer ${selectedCustomerId === customer.id ? 'bg-gray-300 border border-r-slate-600 border-r-2' : 'hover:bg-gray-200'}`}
          onClick={() => onSelectCustomer(customer)}
        >
          <h3 className="font-bold">{customer.name}</h3>
          <p className="text-sm text-gray-600">{customer.title}</p>
        </div>
      ))}
    </div>
  );
};

export default CustomerLists;