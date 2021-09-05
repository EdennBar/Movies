import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import './footer.css'
import { CssBaseline, Divider} from "@material-ui/core"
const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      maxWidth: 752,
    },
    demo: {
      backgroundColor: theme.palette.background.paper,
    },
    title: {
      margin: theme.spacing(4, 0, 2),
    },
  }));
  
  function generate(element) {
    return [0, 1, 2].map((value) =>
      React.cloneElement(element, {
        key: value,
      }),
    );
  }
const Footer = () => {
    const listFooterArray=['FAQ','Investor Relations','Privacy','Speed Test','Help Center','Jobs','Cookie Preferences','Legal Notices','Account','Ways to Watch','Corporate Information','Only on Netflix','Media Center','Terms of Use','Contact Us'];

    return ( 
        <div style={{background:'black'}}>
        <Divider style={{ height: '0.5rem', backgroundColor: 'grey' }} variant='fullWidth'></Divider>
        <CssBaseline></CssBaseline>
        <Grid   container
  spacing={3}
  direction="column"
  alignItems="center"
  justify="center"
>
            <Grid item xs={12} sm={12} md={12} lg={12}>
                <h2 style={{color:'gray'}}>Questions? Contact us.</h2>
                <ul>
                {listFooterArray.map((li,index) => (
                    
         <li key={index} style={{color:'gray'}}>
             {li}
         </li>
        ))}
               
               
               
   
                </ul>
            </Grid>
        </Grid>
</div>
       
     )
}
 
export default Footer;



