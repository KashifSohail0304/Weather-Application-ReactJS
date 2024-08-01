import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import './InfoBox.css'

export default function InfoBox({ info }) {
    let INIT_URL =
        "https://plus.unsplash.com/premium_photo-1714923303591-3b262dd1864f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8d2VhdGhlciUyMGR1c3R5fGVufDB8fDB8fHww"
    let HOT_URL =
        "https://images.unsplash.com/uploads/14121010130570e22bcdf/e1730efe?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhvdCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
    let COLD_URL =
        "https://plus.unsplash.com/premium_photo-1670604649107-a0171e5f1bd0?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
    let RAIN_URL =
        "https://plus.unsplash.com/premium_photo-1671406233410-9727cf249910?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmFpbiUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";

    return (
        <div className='InfoBox'>
            <div className='cardContainer'>
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image={
                            info.humidity > 80
                                ? RAIN_URL
                                : info.temp > 15
                                ? HOT_URL
                                : COLD_URL
                        }
                        title="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {info.city} {
                                info.humidity > 80
                                ? <ThunderstormIcon/>
                                : info.temp > 15
                                ? <WbSunnyIcon/>
                                : <AcUnitIcon/>
                            }
                        </Typography>
                        <Typography variant="body2" color="text.secondary" component={"span"}>
                            <p>Temperature = {info.temp}&deg;C</p>
                            <p>Humidity = {info.humidity}</p>
                            <p>Min temp = {info.tempMin}</p>
                            <p>Max temp = {info.tempMax}</p>
                            <p>The Weather can be described as {info.weather} and feels like {info.feelsLike}&deg;C </p>
                        </Typography>
                    </CardContent>

                </Card>
            </div>
        </div>
    )
} 