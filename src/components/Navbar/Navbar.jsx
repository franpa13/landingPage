import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import imgCoffe from "/coffeshop.png";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";

import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import EmojiFoodBeverageOutlinedIcon from "@mui/icons-material/EmojiFoodBeverageOutlined";
import PhoneEnabledOutlinedIcon from "@mui/icons-material/PhoneEnabledOutlined";
import { Link } from "react-router-dom";
import { LinkOffRounded } from "@mui/icons-material";
const pages = ["Products", "Pricing", "Blog"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };
  const navigation = [
    {
      name: "Home",
      link: "/",
      icon: <HomeOutlinedIcon />,
    },
    {
      name: "Productos",
      link: "/products",
      icon: <EmojiFoodBeverageOutlinedIcon />,
    },
    {
      name: "Contacto",
      link: "/contact",
      icon: <PhoneEnabledOutlinedIcon />,
    },
  ];
  const DrawerList = (
    <Box
      sx={{
        width: 120,
        bgcolor: "#1b1b1b",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
      }}
      role="article"
      onClick={toggleDrawer(false)}
    >
      <List
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          borderBottom: "1px solid gray",
        }}
      >
        {navigation.map((text, index) => (
          <ListItem
            key={index}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "start",
              alignItems: "start",
              gap: "28px",
              marginLeft: "5px",
            }}
            disablePadding
          >
            <Link to={text.link}>
              <div className="font-playfair flex justify-center items-center gap-1  text-white ">
                {text.icon}
                <p className="text-sm">{text.name}</p>
              </div>
            </Link>
            <Divider sx={{ bgcolor: "#ffffff" }} />
          </ListItem>
        ))}
      </List>
      <a
        href="#place"
        className="absolute bottom-0 mb-5 font-playfair text-white flex justify-center items-center"
      >
        <LocationOnOutlinedIcon />
        <p className="text-sm">Ubicacion</p>
      </a>
    </Box>
  );

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar color="inherit" position="sticky" sx={{ bgcolor: "#1b1b1b" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={toggleDrawer(true)}
              sx={{ color: "white" }}
            >
              <MenuIcon />
            </IconButton>
            <Drawer open={open} onClose={toggleDrawer(false)}>
              {DrawerList}
            </Drawer>
          </Box>

          {/* RESPOSIVE EN PC*/}
          <img
            src={imgCoffe}
            className="w-1/5 m-1 sm:w-1/6 md:w-1/12 "
            alt="logo"
          />

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },

              marginLeft: "18px",
              gap: "60px",
            }}
          >
            {navigation.map((page, index) => {
              return (
                <Link className="flex" to={page.link} key={index}>
                  <Box
                    sx={{
                      position: "relative",
                      "&::after": {
                        content: '""',
                        position: "absolute",
                        width: "0",
                        height: "1px",
                        bgcolor: "#CDB587",
                        bottom: "-22px",
                        left: "0",
                        transition: "width 0.4s ease-in-out",
                      },
                      "&:hover::after": {
                        width: "100%",
                      },
                    }}
                  >
                    <div className="flex justify-between gap-2 text-white hover:text-ligthYellow">
                      {page.icon}
                      {page.name}
                    </div>
                  </Box>
                </Link>
              );
            })}
          </Box>
          <a
            href="#place"
            className="hidden  lg:flex font-playfair text-white justify-center items-center relative gap-2 group hover:text-ligthYellow"
          >
            <LocationOnOutlinedIcon />
            <p>Ubicacion</p>
            <span className="absolute top-11 left-0 w-0 h-[1px] bg-ligthYellow transition-all duration-500 ease-in-out group-hover:w-full"></span>
          </a>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
