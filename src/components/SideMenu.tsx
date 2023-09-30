import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import React, { useEffect, useState } from "react";
import { AppBar, Box, CssBaseline, Divider, Drawer } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { supabase } from "./supabase";
import { UserType } from "../types/type";

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

const drawerWidth = 240;
const navItems = ["Map", "Login", "SignOut", "My Profile", "Register"];

export default function DrawerAppBar(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const navigate = useNavigate();
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        RandomMap
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  // 로그아웃
  const signOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.log(error.message);
    } else {
      localStorage.removeItem("user_token");
      localStorage.removeItem("user_id");

      alert("로그아웃 완료!");
      navigate("/");
    }
  };

  const movePageHandler = (item: string) => {
    switch (item) {
      case "Map": {
        navigate("/map");
        break;
      }
      case "Register": {
        navigate("/register");
        break;
      }
      case "Login": {
        navigate("/login");
        break;
      }
      case "SignOut": {
        signOut();

        break;
      }
    }
  };

  const container =
    window !== undefined ? () => window().document.body : undefined;

  const uid = localStorage.getItem("user_id");
  const [userData, setUserData] = useState<UserType>();

  useEffect(() => {
    if (uid) {
      supabase
        .from("users")
        .select("*")
        .eq("id", uid)
        .single()
        .then((response) => {
          setUserData(response.data);
          // console.log(response.data.email);
        });

      console.log(userData);
      // console.log(data);
    }
  }, [uid]);

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
            onClick={() => {
              navigate("/");
            }}
          >
            RandomMap
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) => (
              <Button
                onClick={() => movePageHandler(item)}
                key={item}
                sx={{ color: "#fff" }}
              >
                {item}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>

      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>

      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
        <Typography>current user: {userData?.email}</Typography>
      </Box>
    </Box>
  );
}
