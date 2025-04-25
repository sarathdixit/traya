const AdditionalServices = () => {
  return (
    <div className="mb-6">
      <h2 className="text-xl font-semibold mb-4">
        Additionally, we also provide
      </h2>
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-[#FDF8F6] p-4 rounded-lg flex items-center">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <h3 className="font-medium">Hair Coach Support</h3>
              <span className="bg-green-600 text-white text-xs px-2 py-1 rounded">
                FREE
              </span>
            </div>
            <p className="text-sm text-gray-600">
              Experts who are just a call away to support you
            </p>
          </div>
          <img
            src="/lovable-uploads/c8cb095b-0e09-443a-a7ca-eff7ba2127c0.png"
            alt="Hair coach"
            className="w-20 h-20 object-cover rounded-lg"
          />
        </div>
        <div className="bg-[#FDF8F6] p-4 rounded-lg flex items-center">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <h3 className="font-medium">Flexible Diet Plan</h3>
              <span className="bg-green-600 text-white text-xs px-2 py-1 rounded">
                FREE
              </span>
            </div>
            <p className="text-sm text-gray-600">
              Nutritious homely recipes to support your hair health
            </p>
          </div>
          <img
            src="/lovable-uploads/c8cb095b-0e09-443a-a7ca-eff7ba2127c0.png"
            alt="Diet plan"
            className="w-20 h-20 object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default AdditionalServices;
