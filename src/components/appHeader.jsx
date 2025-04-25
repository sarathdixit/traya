import { ShoppingCart } from "lucide-react";

const AppHeader = () => {
  return (
    <header className="bg-[#2C2C2C] py-4 px-6 flex justify-between items-center sticky top-0 z-50">
      <div className="text-white text-2xl font-bold">Traya.</div>
      <div className="relative">
        <ShoppingCart className="text-white w-6 h-6" />
        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
          1
        </span>
      </div>
    </header>
  );
};

export default AppHeader;
