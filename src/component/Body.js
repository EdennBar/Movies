import { Divider, Typography } from "@material-ui/core"
import { useState } from "react";
import Grid from '@material-ui/core/Grid';
import { questionObj } from '../data';
import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline'; 
const useStyles = makeStyles((theme) => ({
    first: {
        color: 'white',

    }, root: {
        width: '100%',
        maxWidth: 600,

    }
}));



const Body = () => {
    const classes = useStyles();
    const theme = useTheme();
   

    return (
        <div style={{ backgroundColor: 'black' }}>
            
            <Divider style={{ height: '0.5rem', backgroundColor: 'grey' }} variant='fullWidth'></Divider>
         
            <Grid container xs={12}>
                <Grid 
                    direction="column"
                    justifyContent="center"
                    alignItems="center" className={classes.first} item xs={6}>


                    <Typography variant='h3'>Enjoy on your TV.</Typography>
                    <br />
                    <Typography variant="h5">watch on Smart TVs, Playstation,Xbox, <br /> Chromecast,Apple TV, Blu-Ray players,and<br></br> more.</Typography>
                </Grid>
                <Grid item xs={6}>
                    <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png" />

                </Grid>
            </Grid>




            <Divider style={{ height: '0.5rem', backgroundColor: 'grey' }} variant='fullWidth'></Divider>
            <Grid container xs={12}>
           
                <Grid item xs={6}>
                    <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg" />

                </Grid>


                <Grid 
                    direction="column"
                    justifyContent="center"
                    alignItems="center" className={classes.first} item xs={6}>


                    <Typography variant='h3'>Download your shoes <br /> to watch offline.</Typography>
                    <br></br>
                    <Typography variant='h5'>Save your favorites easily and always have <br />something to watch.</Typography>
                </Grid>

            </Grid>




            <Divider style={{ height: '0.5rem', backgroundColor: 'grey' }} variant='fullWidth'></Divider>


            <Grid container xs={12}>
          
                <Grid 
                    direction="column"
                    justifyContent="center"
                    alignItems="center" className={classes.first} item xs={6}>


                    <Typography variant='h3'>Create profiles for kids.</Typography>
                    <br></br>
                    <Typography variant='h5'>Send kids on adventures with their favorite <br />characters in a space made just for them—<br />free with your membership.</Typography>
                </Grid>
                <Grid item xs={6}>
                    <img src="https://occ-0-1855-2773.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABdFTpLmANuJpYneLq8L5m7CunMCi8e8Nl4y7xaPVWzG3IeoDoq17egTQAthApKg_4sdRWdwuR8KadWu1frjL3JQImpwq.png?r=fcd" />

                </Grid>




                <Divider style={{ height: '0.5rem', backgroundColor: 'grey' }} variant='fullWidth'></Divider>

               
            </Grid>
        </div>
    );
}

export default Body;