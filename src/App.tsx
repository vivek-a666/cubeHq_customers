import React, { useState, useEffect } from 'react';
import CustomerLists from './Components/CustomerLists';
import CustomerDetails from './Components/CustomerDetails';
import { fetchCustomers } from './Services/ApiServices';
import { Customer } from './types/customer';
import PhotoGrid from './Components/Photogrid';

const App: React.FC = () => {
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [selectedCustomer, setSelectedCustomer] = useState<Customer | null>(null);

  useEffect(() => {
    const loadCustomers = async () => {
      const fetchedCustomers = await fetchCustomers();
      setCustomers(fetchedCustomers);
    };
    loadCustomers();
  }, []);

  return (
    <div className="flex h-screen bg-gradient-to-r from-pampas to-stone-100">
      {/* Left Panel */}
      <div className="w-1/3 border-r flex flex-col">
        <h1 className="text-2xl font-bold p-4">Customer List</h1>
        <div className="flex-grow overflow-y-auto scrollbar-thin scrollbar-thumb-darkorg">
          <CustomerLists
            customers={customers}
            selectedCustomerId={selectedCustomer?.id || null}
            onSelectCustomer={setSelectedCustomer}
          />
        </div>
      </div>
      
      {/* Right Panel */}
      <div className="w-2/3 bg-gray-100 flex flex-col">
        <h1 className="text-2xl p-4 text-center text-gray-700 font-semibold">Customer Details</h1>
        <div className="flex-grow flex flex-col overflow-hidden">
          {selectedCustomer ? (
            <div className="flex flex-col h-full">
              <div className="flex-shrink-0">
                <CustomerDetails customer={selectedCustomer} />
              </div>
              <div className="flex-grow overflow-auto">
                <PhotoGrid category={selectedCustomer.title} />
              </div>
            </div>
          ) : (
            <div className="flex items-center justify-center h-full text-gray-500">
              Select a customer to view details
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;