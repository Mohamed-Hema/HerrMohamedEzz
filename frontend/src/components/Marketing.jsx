import ReactPlayer from "react-player/youtube";
import { Box } from "@mui/material";

const Marketing = () => {
  const videoId = "oz_NpQq1094"; // Replace with your YouTube video ID

  return (
    <Box
      sx={{
        width: "100%",
        height: "500px",
        position: "relative",
        borderRadius: "8px",
        overflow: "hidden",
        boxShadow: "0px 14px 14px rgba(0, 0, 0, 0.4)",
      }}
    >
      <ReactPlayer
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
      />
    </Box>
  );
};

export default Marketing;
