import clsx from "clsx";

const OptionCard = ({
  selected,
  onClick,
  label,
  images = [],
  description,
  type = "button",
}) => (
  <button
    type={type}
    className="bg-gray-100 flex justify-between items-center p-4 rounded-lg cursor-pointer"
    onClick={onClick}
  >
    <div className="flex items-start gap-3">
      <div className="w-5 h-5 flex items-center justify-center border-2 border-gray-500 rounded-full mt-1">
        <div
          className={clsx("w-3 h-3 rounded-full", selected && "bg-[#759a42]")}
        />
      </div>
      <div className="flex flex-col">
        <p className="text-[16px]  ml-1.5 pr-2 text-left ">{label}</p>
        {description && (
          <p className="text-sm text-gray-500 text-left">{description}</p>
        )}
      </div>
    </div>
    {images.length > 0 && (
      <div className="flex gap-3">
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={label}
            className="w-[70px] h-[80px]"
          />
        ))}
      </div>
    )}
  </button>
);

export default OptionCard;
