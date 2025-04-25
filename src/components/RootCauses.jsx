const RootCauses = () => {
  const causes = [
    { icon: "🔴", title: "Anemia", bgColor: "bg-[#FFE6E6]" },
    { icon: "😴", title: "Sleep", bgColor: "bg-white" },
    { icon: "🍎", title: "Nutrition", bgColor: "bg-white" },
    { icon: "❤️", title: "Lifestyle", bgColor: "bg-white" },
  ];

  return (
    <div className="mb-6">
      <h2 className="text-xl font-semibold mb-4">
        Root Causes of Your Hair Fall
      </h2>
      <div className="grid grid-cols-4 gap-4">
        {causes.map((cause, index) => (
          <div
            key={index}
            className={`${cause.bgColor} rounded-lg p-4 flex flex-col items-center justify-center`}
          >
            <span className="text-2xl mb-2">{cause.icon}</span>
            <span className="text-sm">{cause.title}</span>
          </div>
        ))}
      </div>
      <div className="bg-[#FFE6E6] mt-4 p-4 rounded-lg">
        <p className="text-sm text-gray-700">
          Low iron levels make it harder for the body to carry oxygen to hair,
          weakening its growth and strength.
        </p>
      </div>
    </div>
  );
};

export default RootCauses;
