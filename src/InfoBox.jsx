import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "./InfoBox.css";
export default function InfoBox({ info }) {
  const Initial_Url =
    "https://images.unsplash.com/photo-1562155955-1cb2d73488d7?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  const HOT_URL =
    "https://images.unsplash.com/photo-1599163174538-8a5ad89299c3?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGhvdCUyMHN1bW1lciUyMCUyMGltYWdlfGVufDB8fDB8fHww";
  const COLD_URL =
    "https://images.unsplash.com/photo-1612967850130-a0b00258baa7?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHdpbnRlciUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D";
  const RAIN_URL =
    "https://images.unsplash.com/photo-1703534972672-aac8aa5de57d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHJhaW4lMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D";


  return (
    <>
      <div className="infobox">
        <div className="card">
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              sx={{ height: 300 }}
              image={info.humidity > 80 ? RAIN_URL : info.temp > 15 ? HOT_URL : COLD_URL}
              title="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                <strong>{info.city}</strong>
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                component="span"
              >
                <p> Temprature = {info.temp}&deg;C </p>
                <p> Humidity = {info.humidity} </p>
                <p> Min Temp = {info.temp_min}&deg;C </p>
                <p> Max Temp = {info.temp_max}&deg;C </p>
                <p>
                  {" "}
                  The weather can be described as {info.weather} and feels like{" "}
                  {info.feels_like}&deg;C{" "}
                </p>
              </Typography>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}
