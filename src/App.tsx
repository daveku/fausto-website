import { useState } from "react";
import "./App.css";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Navbar, { navItems } from "./components/navbar/navbar";
import Drawer from "@mui/material/Drawer";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { FcLike } from "react-icons/fc";
import Banner from "./components/banner/banner";
import CssBaseline from "@mui/material/CssBaseline";

const menuMobileWidth: number = 280;

function App() {
  const [openMenuMobile, setOpenMenuMobile] = useState(false);

  const handleOpen = () => {
    setOpenMenuMobile(!openMenuMobile);
  };

  const mobileMenu = (
    <Box onClick={handleOpen} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Clínica Veterinaria Fausto
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.label} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <Typography variant="caption" sx={{ my: 2 }}>
        v0.0.1
      </Typography>
      <br></br>
      <Typography variant="caption" sx={{ my: 2 }}>
        developed with <FcLike /> by{" "}
        <a href="https://davidku.dev" target="_blank">
          David Ku
        </a>
      </Typography>
    </Box>
  );

  return (
    <>
      <CssBaseline />
      <Box sx={{ display: "flex" }}>
        <header>
          <nav>
            <Navbar openMenu={() => handleOpen()} />
            <Box component="nav">
              <Drawer
                variant="temporary"
                open={openMenuMobile}
                onClose={handleOpen}
                ModalProps={{
                  keepMounted: true, // Better open performance on mobile.
                }}
                sx={{
                  display: { xs: "block", sm: "none" },
                  "& .MuiDrawer-paper": {
                    boxSizing: "border-box",
                    width: menuMobileWidth,
                  },
                }}
              >
                {mobileMenu}
              </Drawer>
            </Box>
          </nav>
          <Banner></Banner>
        </header>
        <main></main>
        <footer>
          <div className="promo"></div>
        </footer>
      </Box>
    </>
  );
}

export default App;
