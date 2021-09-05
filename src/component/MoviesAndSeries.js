import { useState } from "react";
import { useEffect } from "react";
import ApiService from "./ApiService";
import MovieSeries from './MovieSeries'

import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';



const useStyles = makeStyles({
    root: {
        maxWidth: 310,
        transition: "transform 0.15s ease-in-out",
        "&:hover": { transform: "scale3d(1.05, 1.05, 1)" },
      },
      minWidth: 275,
  });
const Movies = () => {
    const [state,setState]=useState({
        raised:false,
        shadow:1,
      })
    const classes = useStyles();
    const [movies, setMovies] = useState([])
    useEffect(async () => {
        const movies = await ApiService.getAllMovies();
        setMovies(movies)
    }, []);

    return (
<div  style={{
        backgroundColor: 'black',
       
      }}>
<h1 style={{color:'white'}}> Movies</h1>
    <Grid container xs={12}>
        
{        movies.map((movie) => (
    <Grid item xs={12} sm={6} md={4} lg={3}>
        <Card  className={classes.root}      >
        
        
            <MovieSeries
                key={movie.id}
                id={movie.id}
                poster={movie.poster_path}
                title={movie.title || movie.name}
                date={movie.first_air_date || movie.release_date}
                media_type={movie.media_type}
                vote_average={movie.vote_average}
            />
            
            
            </Card>
         </Grid>
        )
        )}

</Grid>
        </div>
    )

}

export default Movies;