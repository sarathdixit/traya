import { useRouter } from "next/router";
import React, { useRef, useState } from "react";

const MalescalpAssessment = () => {
  const router = useRouter();

  const fileInputRef = useRef(null);
  const [previewImage, setPreviewImage] = useState(
    "/image/webp/both_view.webp"
  ); // default image

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result);
      };
      reader.readAsDataURL(file);
      setTimeout(() => router.push("/plan"), 1000);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <label className="h-12 text-[20px] md:text-[24px] font-bold text-gray-700">
        Upload your scalp picture, for our doctors to check
      </label>

      <div className="mb-4">
        <img
          src={previewImage}
          alt="Scalp Preview"
          className="w-[200px] h-[200px] object-cover rounded-xl border mt-5"
        />
      </div>

      <p className="text-center text-gray-500 mb-6">
        Try clicking a photo like the sample above
      </p>

      <button
        onClick={handleButtonClick}
        className="px-6 py-3 rounded-lg border border-gray-700 text-gray-800 hover:bg-gray-100"
      >
        UPLOAD SCALP PHOTO
      </button>

      <input
        type="file"
        accept="image/*"
        ref={fileInputRef}
        onChange={handleFileChange}
        className="hidden"
      />
    </div>
  );
};

export default MalescalpAssessment;
