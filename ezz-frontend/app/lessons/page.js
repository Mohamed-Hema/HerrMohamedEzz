"use client";
import React, { useState } from "react";
import YouTube from "react-youtube";

const Lessons = () => {
  const [isVideoCompleted, setVideoCompleted] = useState(false);

  const handleVideoCompleteChange = () => {
    setVideoCompleted(!isVideoCompleted);
  };

  const handleExamLinkClick = () => {
    // Handle click event for exam link button
  };

  const handleMaterialClick = () => {
    // Handle click event for material button
  };

  const videoId = "_zxq6dkt_xE"; // Replace with your YouTube video ID

  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      autoplay: 0,
    },
  };

  return (
    <div fluid className="px-4">
      <div className="flex">
        <div className="w-1/4">{/* <Sidebar /> */}</div>
        <div className="w-3/4">
          <div className="relative aspect-ratio-16/9">
            <YouTube
              videoId={videoId}
              opts={opts}
              className="absolute inset-0"
            />
          </div>
          <div className="mt-4 space-x-4">
            <button
              className={`${
                isVideoCompleted
                  ? "bg-primary text-white"
                  : "bg-gray-300 text-gray-800"
              } px-4 py-2 rounded`}
              onClick={handleVideoCompleteChange}
            >
              Video Completed
            </button>
            <button
              className="bg-secondary text-white px-4 py-2 rounded"
              onClick={handleExamLinkClick}
            >
              Exam Link
            </button>
            <button
              className="bg-secondary text-white px-4 py-2 rounded"
              onClick={handleMaterialClick}
            >
              Material
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lessons;
