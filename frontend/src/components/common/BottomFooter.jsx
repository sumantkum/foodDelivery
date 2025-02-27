import React from "react";

const BottomFooter = () => {

  const currentYear = new Date().getFullYear();
  return (
    <div className="flex items-center pt-8">
      <div className="flex flex-grow">
        <span className="poppins text-gray-500">
        Developed by 💗 Sumant Kumar Pandit © {currentYear}
        </span>
      </div>

      <div className="flex justify-end items-center space-x-6">
        <span className="poppins text-white cursor-pointer">
          Privacy Policy
        </span>
        <span className="poppins text-white cursor-pointer">Terms of Use</span>
        <span className="poppins text-white cursor-pointer">Pricing</span>
      </div>
    </div>
  );
};

export default BottomFooter;
