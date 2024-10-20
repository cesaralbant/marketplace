import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import { useCart } from '../context/CartContext';

const steps = ['Información de Envío', 'Método de Pago', 'Revisar Pedido'];

const Checkout: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const { items, clearCart } = useCart();

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handlePlaceOrder = () => {
    alert('¡Pedido realizado!');
    clearCart();
    // Redirect to a thank you page or back to the marketplace
    window.location.href = '/';
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 0:
        return <ShippingInfo />;
      case 1:
        return <PaymentMethod />;
      case 2:
        return <OrderReview items={items} />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header cartItemsCount={items.length} onCartClick={() => {}} isAuthenticated={true} onAuthClick={() => {}} />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-8">Finalizar Compra</h1>
        <div className="flex justify-center mb-8">
          {steps.map((step, index) => (
            <div key={step} className="flex items-center">
              <div className={`w-8 h-8 rounded-full ${index <= currentStep ? 'bg-yellow-400' : 'bg-gray-300'} flex items-center justify-center text-white font-bold`}>
                {index + 1}
              </div>
              <div className={`ml-2 ${index <= currentStep ? 'text-yellow-600' : 'text-gray-500'}`}>{step}</div>
              {index < steps.length - 1 && <div className={`w-12 h-1 mx-2 ${index < currentStep ? 'bg-yellow-400' : 'bg-gray-300'}`}></div>}
            </div>
          ))}
        </div>
        {renderStepContent()}
        <div className="flex justify-between mt-8">
          {currentStep > 0 && (
            <button onClick={prevStep} className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400 transition-colors">
              Anterior
            </button>
          )}
          {currentStep < steps.length - 1 ? (
            <button onClick={nextStep} className="bg-yellow-400 text-white px-4 py-2 rounded hover:bg-yellow-500 transition-colors">
              Siguiente
            </button>
          ) : (
            <button onClick={handlePlaceOrder} className="bg-yellow-400 text-white px-4 py-2 rounded hover:bg-yellow-500 transition-colors">
              Realizar Pedido
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

// ShippingInfo and PaymentMethod components remain the same

const OrderReview: React.FC<{ items: CartItem[] }> = ({ items }) => {
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="max-w-lg mx-auto">
      <h2 className="text-2xl font-bold mb-4">Resumen del Pedido</h2>
      <div className="border-t border-b py-4 mb-4">
        {items.map((item) => (
          <div key={item.id} className="flex justify-between mb-2">
            <span>{item.name} x{item.quantity}</span>
            <span>${(item.price * item.quantity).toFixed(2)}</span>
          </div>
        ))}
      </div>
      <div className="flex justify-between font-bold">
        <span>Total</span>
        <span>${total.toFixed(2)}</span>
      </div>
      <div className="mt-8">
        <h3 className="text-xl font-bold mb-2">Dirección de Envío</h3>
        <p>Juan Pérez</p>
        <p>Calle Principal 123</p>
        <p>Ciudad, 12345</p>
      </div>
      <div className="mt-4">
        <h3 className="text-xl font-bold mb-2">Método de Pago</h3>
        <p>Tarjeta de Crédito terminada en 1234</p>
      </div>
    </div>
  );
};

export default Checkout;