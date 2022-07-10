import "./banner.css";
import { Typography } from "@mui/material";

export default function Banner() {
  return (
    <div className="banner">
      <Typography variant="h2" component="div">
        Clínica Veterinaria Fausto
      </Typography>
      <Typography variant="h5" component="div">
        Perros, gatos y fauna silvestre
      </Typography>
    </div>
  );
}
