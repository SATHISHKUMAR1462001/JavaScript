import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import NetworkWifiIcon from "@mui/icons-material/NetworkWifi";
import SignalWifiConnectedNoInternet4Icon from "@mui/icons-material/SignalWifiConnectedNoInternet4";

import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import Avatar from "@mui/material/Avatar";
import Badge from "@mui/material/Badge";
import ProductList from "./ProductList";

export default function Navbar() {
  let uName = "sathish kumar";
  let Email = "sathishkumar1462001@gmail.com";
  const [istrue, setIstrue] = React.useState(false);

  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box
      style={{ backgroundColor: "#1976d2", color: "white" }}
      sx={{ width: 250, height: "100%" }}
      role="presentation"
      onClick={toggleDrawer(false)}
    >
      <div
        style={{
          backgroundColor: "whitesmoke",
          height: "15%",
          display: "flex",
        }}
      >
        <div>
          <Badge
            style={{ paddingLeft: "20px", paddingTop: "20px" }}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
          >
            <Avatar style={{}} src="/src/assets/OIP.webp" />
          </Badge>
        </div>
        <div style={{ padding: "19px 19px" }}>
          <Typography style={{ color: "#1976d2", fontSize: "15px" }}>
            {uName.toUpperCase()}
          </Typography>
          <Typography style={{ color: "blue", fontSize: "10px" }}>
            {Email}
          </Typography>
          <div style={{display:"flex",flexDirection:"row"}}>
            <Typography style={{color:"red",alignContent:"flex-end",padding:'2 9 8 9',fontWeight:'bold'}}  ><Button>LogIn</Button></Typography>
          </div>
        </div>
      </div>

      <List>
        {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon style={{ color: "white" }}>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["All mail", "Trash", "Spam"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon style={{ color: "white" }}>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <ProductList value={istrue} />

      <AppBar>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            MUI
          </Typography>
          {/* <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search> */}

          {istrue ? (
            <Button onClick={() => setIstrue(false)}>
              <SignalWifiConnectedNoInternet4Icon style={{ color: "red" }} />
            </Button>
          ) : (
            <Button onClick={() => setIstrue(true)}>
              <NetworkWifiIcon style={{ color: "green" }} />
            </Button>
          )}
        </Toolbar>
        {/* <Button >Open drawer</Button> */}
        <Drawer open={open} onClose={toggleDrawer(false)}>
          {DrawerList}
        </Drawer>
      </AppBar>
    </>
  );
}
