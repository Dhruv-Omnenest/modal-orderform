import { OrderForm } from '../../features/OrderForm/components/OrderForm';

export const DashBoard = () => {
  return (
    <div className="w-full flex-grow flex items-center justify-center p-8">
      <div className="w-full max-w-4xl flex flex-col items-center">
        <h1 className="text-3xl font-extrabold text-gray-900 mb-8 self-start ml-20">Trading Dashboard</h1>
        <div className="w-full flex justify-center">
          <OrderForm />
        </div>
      </div>
    </div>
  );
};
