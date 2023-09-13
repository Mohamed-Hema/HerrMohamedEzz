import React from "react";
import FAQ from "./FAQ";
import CashPack from "./CashPack";
import FirstFeature from "./FirstFeature";
import Marketing from "./Marketing";

const HomePage = () => {
  return (
    <div className="container mx-auto">
      <div>
        <h2 className="text-2xl font-bold">أهلا بيك في المنصة</h2>
        <h3 className="text-lg">المنصة هتكون متاحة قريبا</h3>
        <Marketing className="mb-4" />

        {/* Add some space */}
        <div className="mt-4 mb-4">
          <a
            href="https://chat.whatsapp.com/KeB2RAHQnPBGGmEnn7x6Xm"
            target="_blank"
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          >
            WhatsApp Group 💚
          </a>
        </div>

        {/* Add a margin between components */}
        <div className="mt-4">
          <FAQ />
        </div>

        {/* Separator line */}
        <hr className="my-8 border-t-2 border-gray-300" />

        <FirstFeature />

        {/* Separator line */}
        <hr className="my-8 border-t-2 border-gray-300" />

        <div className="mt-4">
          <CashPack />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
