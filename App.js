import { createMuiTheme, ThemeProvider, makeStyles } from '@material-ui/core/styles';
import {Typography,Button,Card,CardMedia,CardContent,CardActions} from '@material-ui/core'; 
import NavBar from './components/NavBar'
import Grid from './components/Grid'
import Footer from './components/Footer'
import SearchBar from "material-ui-search-bar";
import './App.css';
//changes to imports 
import SecurityIcon from '@material-ui/icons/Security';
import EventNoteIcon from '@material-ui/icons/EventNote';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import ImportExportIcon from '@material-ui/icons/ImportExport';
import ComputerIcon from '@material-ui/icons/Computer';
import HttpIcon from '@material-ui/icons/Http';
import BBB from './BBB.jpg';

const theme = createMuiTheme({
  palette: {
    primary: {
      main:"#2e1667",
    },
    secondary: {
      main:"#c7d8ed",
    },
  },
  typography: {
    fontFamily: [
      'Roboto'
    ],
    h4: {
      fontWeight: 600,
      fontSize: 28,
      lineHeight: '2rem',
      },
    h5: {
      fontWeight: 100,
      lineHeight: '2rem',
    },
  },
});

const styles = makeStyles({
  wrapper: {
    width: "65%",
    margin: "auto",
    textAlign: "center",
  },
  bigSpace: {
    marginTop: "5rem",
    fontFamily: "cursive"
  },
  littleSpace:{
    marginTop: "2.5rem",
    fontFamily: "cursive"
  },
  grid:{
    display: "flex", 
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
  },
})




function App() {
  const classes = styles(); 

  return (
    <div className="CCC">
    <div className="App">
      <div className="inline">
      <SearchBar placeholder="Enter a disease name" style={{width:'300px',height:'60px'}}>
      </SearchBar>
      <marquee direction="left"><h1>Today Covid 19 Cases : 1 lakh world wide , Andhra Pradesh : 20,000 , Telengana : 15,000</h1></marquee>
      </div>
      <ThemeProvider theme={theme}>
        <NavBar/>
        
        <div className={classes.wrapper}>
          <Typography variant="h4" className={classes.bigSpace} color="primary">
             All about Health Care and Well Being
          </Typography>
          <Typography variant="h5" className={classes.littleSpace} color="primary">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sodales congue tristique. Cras non pretium sem. Duis interdum lorem sit amet ligula pretium, sed rutrum urna semper. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Phasellus egestas gravida ullamcorper.
          </Typography>
        </div>
        <br/>
        <br/>
      <div className={classes.grid}>
      <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image="VVV.jpg"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Health
        </Typography>
        <Typography variant="body2" color="text.secondary">
          hjfhj jhghj hghjhhkj ughkhjhkjh kjgkjhj jhjkhkjhkjh jhjkhkj
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>

    <Card sx={{ maxWidth: 345 }} style={{marginLeft:"30px"}}>
      <CardMedia
        component="img"
        height="140"
        image="III.png"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Well Being
        </Typography>
        <Typography variant="body2" color="text.secondary">
          hjfhj jhghj hghjhhkj ughkhjhkjh kjgkjhj jhjkhkjhkjh jhjkhkj
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>

    <Card sx={{ maxWidth: 345 }} style={{marginLeft:"30px"}}>
      <CardMedia
        component="img"
        height="140"
        image="SDK.jpg"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Diseases
        </Typography>
        <Typography variant="body2" color="text.secondary">
          hjfhj jhghj hghjhhkj ughkhjhkjh kjgkjhj jhjkhkjhkjh jhjkhkj
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
        </div>
        <br/>
        <br/>
        <br/>
        <br/>
        <div className={classes.Footer}>
          <Footer/>
        </div>
      </ThemeProvider>
    </div>
    </div>
  );
}

export default App;
