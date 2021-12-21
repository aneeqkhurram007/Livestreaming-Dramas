import React from 'react';
import {Link} from 'react-router-dom'
import Button from "@material-ui/core/Button"
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import "font-awesome/css/font-awesome.css";
// using hooks we dont need to create individual css after this
const useStyles={
        color:"white",
        padding:"30px",
        display:"inline"
    }

const Menu = () => {
    
    return ( 
        <div>
         <AppBar position="static" >
             <Toolbar style={{backgroundColor:"black"}}>
                    <Typography >
                      <Link  style={useStyles} to="/home"><i className="fa fa-home"></i>Home</Link>
                    </Typography>
                    <Typography >
                      <Link  style={useStyles} to="/dramas"><i className="fa fa-film"></i>Dramas</Link>
                    </Typography>
                    <Typography >
                      <Link  style={useStyles} to="/contact"><i className="fa fa-phone"></i>Contact us</Link>
                    </Typography>
                    <Typography >
                      <Link style={useStyles} to="/Login"><i className="fa fa-sign-in"></i>Login</Link>
                    </Typography>
                    <Typography >
                      <Link style={useStyles} to="signup"><Button variant="contained" color="white" >Signup</Button></Link>
                    </Typography>
             </Toolbar>
         </AppBar>
         </div>
     );
}
 
export default Menu;