import { createMuiTheme, ThemeProvider, makeStyles } from '@material-ui/core/styles';
import {Typography,Button,Card,CardMedia,CardContent,CardActions,Toolbar} from '@material-ui/core'; 
import "./CSS1.css";
const styles = makeStyles({
    littleSpace:{
        fontFamily: "cursive",
        textAlign: "center",
        color : "green",
      },
      Class:{
          textAlign: "left",
          fontFamily: "Arial Hebrew"
      },
      card:{
          width:"400px",
          textAlign: "center",
      },
      Fdk:{
          marginLeft: "500px",
          marginTop:"40px",
      }

})
export default function Page()
{
    const classes = styles();
    return(
        <div>
        <marquee direction="left" style={{fontFamily:"cursive",backgroundColor:"green"}}><h1>Today Covid 19 Cases : 1 lakh world wide , Andhra Pradesh : 20,000 , Telengana : 15,000</h1></marquee>
        <CardContent className="AAA">
        <Typography variant="h2" className={classes.littleSpace} color="primary">
        <u>Corona</u>
      </Typography>
      <br/>
      <br/>
      <br/>
      <Typography variant="h4" className={classes.Class} color="primary">
      The virus can spread from an infected person’s mouth or nose in small liquid particles when they cough, sneeze, speak, sing or breathe. These particles range from larger respiratory droplets to smaller aerosols.
You can be infected by breathing in the virus if you are near someone who has COVID-19, or by touching a contaminated surface and then your eyes, nose or mouth. The virus spreads more easily indoors and in crowded settings.
          <img src="Co.jpg" alt="No image" style={{float:"right"}}></img>
          The virus can spread from an infected person’s mouth or nose in small liquid particles when they cough, sneeze, speak, sing or breathe. These particles range from larger respiratory droplets to smaller aerosols.
You can be infected by breathing in the virus if you are near someone who has COVID-19, or by touching a contaminated surface and then your eyes, nose or mouth. The virus spreads more easily indoors and in crowded settings.
        
      </Typography>
      </CardContent>
      <div className={classes.Fdk}>
      <Card className={classes.card}>
      <CardMedia
        component="img"
        height="170"
        image="VVV.jpg"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Book a doctor
        </Typography>
        <Typography variant="body2" color="text.secondary">
          By booking from this website you can get discount upto 25%
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    </div>
      </div>
    );
}
