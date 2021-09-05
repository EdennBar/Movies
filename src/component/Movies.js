import { useState } from "react";
import { useEffect } from "react";
import ApiService from "./ApiService";
import Movie from './Movie'
import { useContext } from "react";
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CustomePagination from './CustomePagination'


const useStyles = makeStyles({
    root: {
        maxWidth: 310,
        transition: "transform 0.15s ease-in-out",
        "&:hover": { transform: "scale3d(1.05, 1.05, 1)" },
    },
    minWidth: 275,

    // }, cardHovered: {
    //     transform: "scale3d(1.05, 1.05, 1)",
    //   }
});
const Movies = () => {
    const [state, setState] = useState({
        raised: false,
        shadow: 1,
    })
    const [page, setPage] = useState(1)
    const classes = useStyles();
    const [movies, setMovies] = useState([])
    useEffect(async () => {
        const movies = await ApiService.getMovies(page);
        setMovies(movies)
    });

    return (
        <div style={{
            backgroundColor: 'white',

        }}>
            <h1 style={{ color: 'white' }}>Trending Movies</h1>
            <Grid container xs={12}>

                {movies.map((movie) => (
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <Card className={classes.root}      >


                            <Movie
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
                <Grid item xs={12}>
                    <CustomePagination setPage={setPage} color="primary"></CustomePagination>
                </Grid>
            </Grid>

        </div>
    )

}

export default Movies;