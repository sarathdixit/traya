const ProductKit = () => {
  const products = [
    {
      name: "Iron Santulan 120 Tablets",
      description: "Natural iron supplement for hairfall",
      price: "450",
      image: "/image/webp/iron_santulan.png",
    },
    {
      name: "Nasal Drops",
      description: "Ghee for hair growth and restful sleep",
      price: "150",
      image: "/image/webp/ghrit_nasal_drop.png",
    },
    {
      name: "Defence conditioner 50g",
      description: "SLS free conditioner for hydrated and shiny hair",
      price: "199",
      image: "/image/webp/iron_santulan.png",
      isFreebie: true,
    },
    {
      name: "Recap Serum 30ml",
      description: "Scientifically proven Hair growth actives",
      price: "799",
      image: "/image/webp/ghrit_nasal_drop.png",
    },
    {
      name: "Hair Ras",
      description: "Herbal supplement for hair nourishment",
      price: "520",
      image: "/image/webp/iron_santulan.png",
    },
  ];

  const total = products.reduce(
    (sum, product) => sum + Number(product.price),
    0
  );

  return (
    <div className="bg-white rounded-lg h-full flex flex-col">
      <div className="p-6 flex-1 overflow-y-auto">
        <h2 className="text-xl font-semibold mb-4">
          Month 1 Doctor-Prescribed Kit
        </h2>
        <div className="space-y-4">
          {products.map((product, index) => (
            <div key={index} className="flex items-center gap-4 border-b pb-4">
              <img
                src={product.image}
                alt={product.name}
                className="w-16 h-16 object-cover rounded"
              />
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <h3 className="font-medium">{product.name}</h3>
                  {product.isFreebie && (
                    <span className="bg-red-100 text-red-600 text-xs px-2 py-1 rounded">
                      HERE'S YOUR FREEBIE
                    </span>
                  )}
                </div>
                <p className="text-sm text-gray-600">{product.description}</p>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-medium">₹{product.price}</span>
                <span className="text-gray-400">→</span>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4 py-4 border-t">
          <p className="text-sm text-gray-600 text-center">
            All of our products are GMP & ISO 9001 certified
          </p>
        </div>
      </div>
      <div className="sticky bottom-0 left-0 right-0 bg-white border-t p-4 md:p-6">
        <div className="flex justify-between items-center mb-4">
          <div>
            <p className="font-medium">Subtotal</p>
            <p className="text-sm text-gray-600">Inclusive of all taxes</p>
          </div>
          <span className="text-xl font-semibold">₹ {total}</span>
        </div>
        <button className="w-full bg-[#D05353] text-white py-3 rounded-lg font-medium">
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default ProductKit;
