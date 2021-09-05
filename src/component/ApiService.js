import React, { useEffect, useState } from "react";
import axios from 'axios';
import Movies from './Movies';


const ApiService = {
    
    getMovies: async (page) => {       
            const { data } = await axios.get(
                `https://api.themoviedb.org/3/trending/all/day?api_key=d2266afa28b38373e7f8368070efd1b6&page=${page}`);

            return data.results;      
    },
    getAllMovies:async () => {       
        const { data } = await axios.get('https://api.themoviedb.org/3/discover/movie?api_key=d2266afa28b38373e7f8368070efd1b6&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate');
          

        return data.results;     
}
}

export default ApiService;



