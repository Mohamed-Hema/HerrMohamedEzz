import ReactPlayer from "react-player/youtube";

const Marketing = () => {
  const videoId = "_zxq6dkt_xE"; // Replace with your YouTube video ID

  return (
    <div className="w-full h-96 relative rounded-md overflow-hidden shadow-md">
      <div
        width="100%"
        height="100%"
        url={`https://www.youtube.com/watch?v=${videoId}`}
        controls={true}
        config={{
          youtube: {
            playerVars: {
              modestbranding: 1,
            },
          },
        }}
      ></div>
    </div>
  );
};

export default Marketing;
