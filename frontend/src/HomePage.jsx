import Button from "react-bootstrap/Button";
import FAQ from "./components/FAQ";
import CashPack from "./components/CashPack";
import { Box } from "@mui/material";
import FirstFeature from "./components/FirstFeature";
import Marketing from "./components/Marketing";
// import ComingSoon from "./components/ComingSoon";

const HomePage = () => {
  return (
    <div>
      <div>
        <h2>أهلا بيك في المنصة</h2>
        <h3>المنصة هتكون متاحة قريبا</h3>
        <Marketing mb={3} />

        {/* Add some space */}
        <Box mt={3} mb={3}>
          <Button
            variant="success"
            href="https://chat.whatsapp.com/KeB2RAHQnPBGGmEnn7x6Xm"
            target="_blank"
          >
            WhatsApp Group 💚
          </Button>
        </Box>

        {/* Add a margin between components */}
        <Box mt={3}>
          <FAQ />
        </Box>

        {/* Separator line */}
        <hr style={{ margin: "2rem 0", borderTop: "1px solid #ccc" }} />

        <FirstFeature />

        {/* Separator line */}
        <hr style={{ margin: "2rem 0", borderTop: "1px solid #ccc" }} />

        <Box mt={3}>
          <CashPack />
        </Box>
      </div>
    </div>
  );
};

export default HomePage;
