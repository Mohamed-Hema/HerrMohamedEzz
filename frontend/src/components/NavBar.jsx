import { useState } from "react";
import {
  AppBar,
  Tabs,
  Tab,
  Button,
  Box,
  Typography,
  Grid,
  IconButton,
  Menu,
  MenuItem,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import XIcon from "@mui/icons-material/Close";

const NavBar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleMenuOpen = () => {
    setMenuOpen(true);
  };

  const handleMenuClose = () => {
    setMenuOpen(false);
  };

  return (
    <AppBar
      position="fixed" // Keep the NavBar fixed at the top
      sx={{
        backgroundColor: "white",
        color: "black",
        boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Grid
        container
        justifyContent="space-between"
        alignItems="center"
        sx={{ padding: "8px 16px" }}
      >
        <Typography variant="h6" fontWeight="bold" sx={{ color: "black" }}>
          HerrMohamedEzz
        </Typography>
        {isMobile && (
          <>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={handleMenuOpen}
              title="Open menu"
            >
              {isMenuOpen ? <XIcon /> : <MenuIcon />}
            </IconButton>
            <Menu
              anchorEl={null}
              open={isMenuOpen}
              onClose={handleMenuClose}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              className="menu"
            >
              <MenuItem>
                <Tab label="المحفظة" href="#features" />
              </MenuItem>
              <MenuItem>
                <Tab label="الدروس" href="#features" />
              </MenuItem>
              <MenuItem>
                <Tab label="اشترك" href="#features" />
              </MenuItem>
              <MenuItem>
                <Tab label="الأسعار" href="#pricing" />
              </MenuItem>
            </Menu>
          </>
        )}

        {!isMobile && (
          <>
            <Tabs
              value={false}
              sx={{
                color: "black",
                "& .MuiTab-root": {
                  transition: "background-color 0.5s", // Smooth transition
                  "&:hover": {
                    backgroundColor: (theme) => theme.palette.info.light,
                    color: "white", // Text color change to black on hover
                  },
                },
              }}
            >
              <Tab label="المحفظة" href="#features" />
              <Tab label="الدروس" href="#features" />
              <Tab label="اشترك" href="#features" />
              <Tab label="الأسعار" href="#pricing" />
            </Tabs>

            <Box sx={{ mt: 2 }}>
              <Button
                variant="contained"
                sx={{
                  color: "white",
                  backgroundColor: (theme) => theme.palette.info.main,
                  "&:hover": {
                    backgroundColor: (theme) => theme.palette.info.dark,
                  },
                }}
                href="#signup"
              >
                إنشاء حساب
              </Button>
              <Button
                variant="outlined"
                sx={{
                  color: (theme) => theme.palette.info.main,
                  marginLeft: 2,
                }}
                href="#signin"
              >
                تسجيل الدخول
              </Button>
            </Box>
          </>
        )}
      </Grid>
    </AppBar>
  );
};

export default NavBar;
