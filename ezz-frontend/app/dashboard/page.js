import Image from "next/image";
import React from "react";

const Dashboard = () => {
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <div className="border rounded-lg overflow-hidden">
            <Image
              src="/public/assets/firstfeature.jpg" // Replace with your image URL or import the image
              alt="Image 1"
              className="w-full h-64 object-cover"
              width="100"
              height="100"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold">1 Secondary</h3>
              <button className="bg-blue-500 text-white px-4 py-2 mt-2 rounded-full hover:bg-blue-600">
                Show Lessons
              </button>
            </div>
          </div>
        </div>
        <div>
          <div className="border rounded-lg overflow-hidden">
            <Image
              src="/public/assets/firstfeature.jpg" // Replace with your image URL or import the image
              alt="Image 1"
              className="w-full h-64 object-cover"
              width="100"
              height="100"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold">2 Secondary</h3>
              <button className="bg-blue-500 text-white px-4 py-2 mt-2 rounded-full hover:bg-blue-600">
                Show Lessons
              </button>
            </div>
          </div>
        </div>
        <div>
          <div className="border rounded-lg overflow-hidden">
            <Image
              src="/public/assets/firstfeature.jpg" // Replace with your image URL or import the image
              alt="Image 1"
              className="w-full h-64 object-cover"
              width="100"
              height="100"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold">3 Secondary</h3>
              <button className="bg-blue-500 text-white px-4 py-2 mt-2 rounded-full hover:bg-blue-600">
                Show Lessons
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
