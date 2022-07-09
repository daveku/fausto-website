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
    <Box sx={{ display: "flex" }}>
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
      <header></header>
      <main>
        <Box sx={{ p: 3 }}>
          <Toolbar />
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
            unde fugit veniam eius, perspiciatis sunt? Corporis qui ducimus
            quibusdam, aliquam dolore excepturi quae. Distinctio enim at
            eligendi perferendis in cum quibusdam sed quae, accusantium et
            aperiam? Quod itaque exercitationem, at ab sequi qui modi delectus
            quia corrupti alias distinctio nostrum. Minima ex dolor modi
            inventore sapiente necessitatibus aliquam fuga et. Sed numquam
            quibusdam at officia sapiente porro maxime corrupti perspiciatis
            asperiores, exercitationem eius nostrum consequuntur iure aliquam
            itaque, assumenda et! Quibusdam temporibus beatae doloremque
            voluptatum doloribus soluta accusamus porro reprehenderit eos
            inventore facere, fugit, molestiae ab officiis illo voluptates
            recusandae. Vel dolor nobis eius, ratione atque soluta, aliquam
            fugit qui iste architecto perspiciatis. Nobis, voluptatem! Cumque,
            eligendi unde aliquid minus quis sit debitis obcaecati error,
            delectus quo eius exercitationem tempore. Delectus sapiente,
            provident corporis dolorum quibusdam aut beatae repellendus est
            labore quisquam praesentium repudiandae non vel laboriosam quo ab
            perferendis velit ipsa deleniti modi! Ipsam, illo quod. Nesciunt
            commodi nihil corrupti cum non fugiat praesentium doloremque
            architecto laborum aliquid. Quae, maxime recusandae? Eveniet dolore
            molestiae dicta blanditiis est expedita eius debitis cupiditate
            porro sed aspernatur quidem, repellat nihil quasi praesentium quia
            eos, quibusdam provident. Incidunt tempore vel placeat voluptate
            iure labore, repellendus beatae quia unde est aliquid dolor
            molestias libero. Reiciendis similique exercitationem consequatur,
            nobis placeat illo laudantium! Enim perferendis nulla soluta magni
            error, provident repellat similique cupiditate ipsam, et tempore
            cumque quod! Qui, iure suscipit tempora unde rerum autem saepe nisi
            vel cupiditate iusto. Illum, corrupti? Fugiat quidem accusantium
            nulla. Aliquid inventore commodi reprehenderit rerum reiciendis!
            Quidem alias repudiandae eaque eveniet cumque nihil aliquam in
            expedita, impedit quas ipsum nesciunt ipsa ullam consequuntur
            dignissimos numquam at nisi porro a, quaerat rem repellendus.
            Voluptates perspiciatis, in pariatur impedit, nam facilis libero
            dolorem dolores sunt inventore perferendis, aut sapiente modi
            nesciunt.
          </Typography>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
            unde fugit veniam eius, perspiciatis sunt? Corporis qui ducimus
            quibusdam, aliquam dolore excepturi quae. Distinctio enim at
            eligendi perferendis in cum quibusdam sed quae, accusantium et
            aperiam? Quod itaque exercitationem, at ab sequi qui modi delectus
            quia corrupti alias distinctio nostrum. Minima ex dolor modi
            inventore sapiente necessitatibus aliquam fuga et. Sed numquam
            quibusdam at officia sapiente porro maxime corrupti perspiciatis
            asperiores, exercitationem eius nostrum consequuntur iure aliquam
            itaque, assumenda et! Quibusdam temporibus beatae doloremque
            voluptatum doloribus soluta accusamus porro reprehenderit eos
            inventore facere, fugit, molestiae ab officiis illo voluptates
            recusandae. Vel dolor nobis eius, ratione atque soluta, aliquam
            fugit qui iste architecto perspiciatis. Nobis, voluptatem! Cumque,
            eligendi unde aliquid minus quis sit debitis obcaecati error,
            delectus quo eius exercitationem tempore. Delectus sapiente,
            provident corporis dolorum quibusdam aut beatae repellendus est
            labore quisquam praesentium repudiandae non vel laboriosam quo ab
            perferendis velit ipsa deleniti modi! Ipsam, illo quod. Nesciunt
            commodi nihil corrupti cum non fugiat praesentium doloremque
            architecto laborum aliquid. Quae, maxime recusandae? Eveniet dolore
            molestiae dicta blanditiis est expedita eius debitis cupiditate
            porro sed aspernatur quidem, repellat nihil quasi praesentium quia
            eos, quibusdam provident. Incidunt tempore vel placeat voluptate
            iure labore, repellendus beatae quia unde est aliquid dolor
            molestias libero. Reiciendis similique exercitationem consequatur,
            nobis placeat illo laudantium! Enim perferendis nulla soluta magni
            error, provident repellat similique cupiditate ipsam, et tempore
            cumque quod! Qui, iure suscipit tempora unde rerum autem saepe nisi
            vel cupiditate iusto. Illum, corrupti? Fugiat quidem accusantium
            nulla. Aliquid inventore commodi reprehenderit rerum reiciendis!
            Quidem alias repudiandae eaque eveniet cumque nihil aliquam in
            expedita, impedit quas ipsum nesciunt ipsa ullam consequuntur
            dignissimos numquam at nisi porro a, quaerat rem repellendus.
            Voluptates perspiciatis, in pariatur impedit, nam facilis libero
            dolorem dolores sunt inventore perferendis, aut sapiente modi
            nesciunt.
          </Typography>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
            unde fugit veniam eius, perspiciatis sunt? Corporis qui ducimus
            quibusdam, aliquam dolore excepturi quae. Distinctio enim at
            eligendi perferendis in cum quibusdam sed quae, accusantium et
            aperiam? Quod itaque exercitationem, at ab sequi qui modi delectus
            quia corrupti alias distinctio nostrum. Minima ex dolor modi
            inventore sapiente necessitatibus aliquam fuga et. Sed numquam
            quibusdam at officia sapiente porro maxime corrupti perspiciatis
            asperiores, exercitationem eius nostrum consequuntur iure aliquam
            itaque, assumenda et! Quibusdam temporibus beatae doloremque
            voluptatum doloribus soluta accusamus porro reprehenderit eos
            inventore facere, fugit, molestiae ab officiis illo voluptates
            recusandae. Vel dolor nobis eius, ratione atque soluta, aliquam
            fugit qui iste architecto perspiciatis. Nobis, voluptatem! Cumque,
            eligendi unde aliquid minus quis sit debitis obcaecati error,
            delectus quo eius exercitationem tempore. Delectus sapiente,
            provident corporis dolorum quibusdam aut beatae repellendus est
            labore quisquam praesentium repudiandae non vel laboriosam quo ab
            perferendis velit ipsa deleniti modi! Ipsam, illo quod. Nesciunt
            commodi nihil corrupti cum non fugiat praesentium doloremque
            architecto laborum aliquid. Quae, maxime recusandae? Eveniet dolore
            molestiae dicta blanditiis est expedita eius debitis cupiditate
            porro sed aspernatur quidem, repellat nihil quasi praesentium quia
            eos, quibusdam provident. Incidunt tempore vel placeat voluptate
            iure labore, repellendus beatae quia unde est aliquid dolor
            molestias libero. Reiciendis similique exercitationem consequatur,
            nobis placeat illo laudantium! Enim perferendis nulla soluta magni
            error, provident repellat similique cupiditate ipsam, et tempore
            cumque quod! Qui, iure suscipit tempora unde rerum autem saepe nisi
            vel cupiditate iusto. Illum, corrupti? Fugiat quidem accusantium
            nulla. Aliquid inventore commodi reprehenderit rerum reiciendis!
            Quidem alias repudiandae eaque eveniet cumque nihil aliquam in
            expedita, impedit quas ipsum nesciunt ipsa ullam consequuntur
            dignissimos numquam at nisi porro a, quaerat rem repellendus.
            Voluptates perspiciatis, in pariatur impedit, nam facilis libero
            dolorem dolores sunt inventore perferendis, aut sapiente modi
            nesciunt.
          </Typography>
        </Box>
      </main>
      <footer>
        <div className="promo"></div>
      </footer>
    </Box>
  );
}

export default App;
