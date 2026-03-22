import { useState } from 'react';
import { OrderForm } from '../../features/OrderForm/components/OrderForm';
import { Button } from '../../shared/components/Button';

export const DashBoard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="w-full flex-grow flex items-center justify-center p-8 relative">
      <div className="w-full max-w-4xl flex flex-col items-center">
        <h1 className="text-3xl font-extrabold text-gray-900 mb-8 self-start ml-20">Trading Dashboard</h1>
        
        <div className="w-full flex justify-center">
          <Button 
            onClick={() => setIsModalOpen(true)}
            className="w-48 text-lg font-semibold py-3 shadow-md bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            Open Order Form
          </Button>
        </div>

        {/* Modal Overlay */}
        {isModalOpen && (
          <div 
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center cursor-pointer transition-opacity"
            onClick={() => setIsModalOpen(false)}
          >
            {/* Modal Content - stopPropagation prevents closing when clicking the form itself */}
            <div 
              className="cursor-default" 
              onClick={(e) => e.stopPropagation()}
            >
              <OrderForm />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
