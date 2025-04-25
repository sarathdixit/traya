import AdditionalServices from "@/components/AdditionalServices";
import AppHeader from "@/components/appHeader";
import ProductKit from "@/components/ProductKit";
import ProgressSection from "@/components/ProgressSection";
import RootCauses from "@/components/RootCauses";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <AppHeader />
      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-6">
            <ProgressSection />
            <RootCauses />
            {/* <AdditionalServices /> */}
          </div>
          <div className="h-[calc(100vh-6rem)] md:sticky md:top-24">
            <ProductKit />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
