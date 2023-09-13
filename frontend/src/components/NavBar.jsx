import React, { useState } from "react";
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
import { Link } from "react-router-dom";

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
  const appBarRef = React.useRef(null);
  const buttonRef = React.useRef(null);

  return (
    <AppBar
      position="fixed"
      ref={appBarRef}
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
        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
          <Typography variant="h6" fontWeight="bold" sx={{ color: "black" }}>
            HerrMohamedEzz
          </Typography>
        </Link>
        {isMobile && (
          <>
            <IconButton
              ref={buttonRef}
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={handleMenuOpen}
              title="Open menu"
            >
              {isMenuOpen ? <XIcon /> : <MenuIcon />}
            </IconButton>
            <Menu
              anchorEl={buttonRef.current}
              open={isMenuOpen}
              onClose={handleMenuClose}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              className="menu"
            >
              <MenuItem>
                <Link
                  to="/dashboard"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  الدروس
                </Link>{" "}
              </MenuItem>
              <MenuItem>
                <Link
                  to="/wallet"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  المحفظة
                </Link>{" "}
              </MenuItem>
              <MenuItem>
                <Link
                  to="/subscribe"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  اشترك
                </Link>{" "}
              </MenuItem>
              <MenuItem>
                <Link
                  to="/pricing"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  الأسعار
                </Link>{" "}
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
              <Link
                to="/dashboard"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <Tab label="الدروس" />
              </Link>
              <Link
                to="/wallet"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <Tab label="المحفظة" />
              </Link>
              <Link
                to="/subscribe"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <Tab label="اشترك" />
              </Link>
              <Link
                to="/pricing"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <Tab label="الأسعار" />
              </Link>
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
            </Box>
          </>
        )}
      </Grid>
    </AppBar>
  );
};

export default NavBar;
