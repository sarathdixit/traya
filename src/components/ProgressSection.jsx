import { useAppContext } from "@/context/AppContext";

const ProgressSection = () => {
  const { assessmentData } = useAppContext();
  return (
    <div className="p-6 bg-[#FDF8F6] rounded-xl mb-6">
      <h1 className="text-2xl text-[#D05353] mb-4">
        Hi {assessmentData.name},
      </h1>
      <div className="mb-6">
        <p className="text-xl mb-2">
          You currently have <span className="font-medium">Hair Thinning</span>
        </p>
        <p className="text-gray-600">
          A condition in which the roots around the middle parting enter the
          resting phase, leading to excessive shedding. Our customised approach
          will help you see the desired results.
        </p>
      </div>
      <div className="flex items-center justify-between">
        <div className="relative">
          <img
            src="/image/webp/hairThinningBefore.webp"
            alt="Current hair condition"
            className="w-32 h-32 object-cover rounded-lg"
          />
          <p className="text-sm text-gray-600 mt-2 text-center">You're Here</p>
        </div>
        <div className="text-[#D05353] text-3xl">→</div>
        <div className="relative">
          <img
            src="/image/webp/hairThinningAfter1.png"
            alt="Target hair condition"
            className="w-32 h-32 object-cover rounded-lg"
          />
          <p className="text-sm text-gray-600 mt-2 text-center">
            Let's get you here
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProgressSection;
