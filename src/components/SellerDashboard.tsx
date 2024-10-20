import React from 'react';
import { Package, DollarSign, Users, BarChart2 } from 'lucide-react';

const SellerDashboard: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-600 text-white p-4">
        <div className="container mx-auto">
          <h1 className="text-2xl font-bold">Seller Dashboard</h1>
        </div>
      </header>
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <DashboardCard icon={<Package />} title="Products" value="15" />
          <DashboardCard icon={<DollarSign />} title="Revenue" value="$1,234" />
          <DashboardCard icon={<Users />} title="Customers" value="45" />
          <DashboardCard icon={<BarChart2 />} title="Orders" value="28" />
        </div>
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">Recent Orders</h2>
          {/* Add a table or list of recent orders here */}
        </div>
      </main>
    </div>
  );
};

const DashboardCard: React.FC<{ icon: React.ReactNode; title: string; value: string }> = ({ icon, title, value }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-center justify-between">
        <div className="text-blue-500">{icon}</div>
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
      <p className="text-3xl font-bold mt-2">{value}</p>
    </div>
  );
};

export default SellerDashboard;