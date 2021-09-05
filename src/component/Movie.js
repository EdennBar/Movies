import { CardHeader, CssBaseline } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Badge from '@material-ui/core/Badge';




const useStyles = makeStyles((theme) => ({
    root: {

        '& > *': {
            margin: theme.spacing(1),
        },
    },
}));
const Movie = ({ id, poster, title, date, media_type, vote_average }) => {

    const classes = useStyles();

    const img_300 = "https://image.tmdb.org/t/p/w300"
    const img_500 = "https://image.tmdb.org/t/p/w500"
    const unavailable = "https://www.movienewz.com/img/films/poster-holder.jpg"

    return (

        <div >

            <CardMedia className={classes.root} style={{backgroundColor:'black'}}>
                <Badge 
                    badgeContent={vote_average} color={vote_average > 6 ? 'primary' : "secondary"} />
           </CardMedia>
            <img style={{ width: '100%' }} src={poster ? `${img_300}/${poster}` : unavailable}></img>
        <CssBaseline/>
            <Grid container xs={12}>

                <Typography item xs={12} gutterBottom variant="h5" component="h2">
                    {title}
                </Typography>
            </Grid>
            <Grid container xs={12}>
                <Grid item xs={6}>
                    <Typography gutterBottom variant="h5" component="h2">
                        {media_type === 'tv' ? "Tv Series" : 'Movie'}
                    </Typography>
                </Grid>

                <Grid item xs={6}>
                    <Typography gutterBottom variant="h5" component="h2">
                        {date}
                    </Typography>
                </Grid>
            </Grid>

        </div>

    );

}

export default Movie;