import React from 'react'
import CustomBtn from './CustomBtn'
import logo from '../BBB.jpg';
import logoMobile from '../logoMobile.svg'
import {Toolbar, Typography} from '@material-ui/core'
import {makeStyles} from "@material-ui/core/styles";
import {Button} from '@material-ui/core';
import { SvgIcon } from '@material-ui/core';
const styles = makeStyles({
    bar:{
        paddingTop: "1.15rem",
        backgroundColor: "black",
        ['@media (max-width:780px)']: { 
           flexDirection: "column"
          }
    },
    logo: {
        width: "12%",
        ['@media (max-width:780px)']: { 
           display: "none"
           }
    },
    logoMobile:{
        width: "100%", 
        display: "none", 
        ['@media (max-width:780px)']: { 
            display: "inline-block"
            }
    },
    menuItem: {
        cursor: "pointer", 
        flexGrow: 1,
        "&:hover": {
            color:  "#4f25c8"
        },
        ['@media (max-width:780px)']: { 
            paddingBottom: "1rem"    }
    }
})

function NavBar() {
    const classes = styles()
    function HomeIcon(props) {
        return (
          <SvgIcon {...props}>
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
          </SvgIcon>
        );
      }
    return (
            <Toolbar position="sticky" color="rgba(0, 0, 0, 0.87)" className={classes.bar}>   
                 <Typography variant="h5" color="secondary" style={{fontFamily:"fantasy",fontSize:"30px"}}> Health Care</Typography>
                <Button variant="contained" color="primary" size="large" style={{marginLeft:'95px'}}>
                 About
                </Button>
                <Button variant="contained" color="primary" size="large" style={{marginLeft:'95px'}}>
                 Blog
                </Button>
                <Button variant="contained" color="primary" size="large" style={{marginLeft:'95px'}}>
                 Help
                </Button>
                <Button variant="contained" color="primary" size="large" style={{marginLeft:'95px'}}>
                 Status
                </Button>
                <Button variant="contained" color="primary" size="large" style={{marginLeft:'95px'}}>
                 Contact Us
                </Button>
                <HomeIcon color="secondary" fontSize="large" style={{marginLeft:'95px'}}/>
            </Toolbar>
    )
}

export default NavBar
