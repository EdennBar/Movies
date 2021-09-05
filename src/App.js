import React from 'react';
import Grid from '@material-ui/core/Grid';
import { CssBaseline, makeStyles } from '@material-ui/core';
import Header from './component/Header';
import Body from './component/Body';
import Movies from './component/Movies';
import MoviesAndSeries from './component/MoviesAndSeries';
import Faq from './component/Faq';
import Footer from './component/Footer';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import shadows from '@material-ui/core/styles/shadows';
;
const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
 
    justifyContent: 'center',
    alignItems: 'center',
  },


}));



function App() {
  const classes = useStyles();
  return (
<div>
    
      <Router>
        <Route exact path="/">
          <div className={classes.root} style={{ backgroundImage: `url(${require("./images/background.jpg").default})` }}>
            <CssBaseline></CssBaseline>
            <Header></Header>
          </div>
          <Body></Body>
          <Faq></Faq>
        </Route>
      </Router>     
      <Router>
        <Switch>
          <Route exact path="/trending" component={Movies} />
        </Switch>
      </Router>
      <Router>
        <Switch>
          <Route exact path="/movies" component={MoviesAndSeries} />
        </Switch>
      </Router>
      <Footer></Footer>
    
    </div>
  );
}

export default App;
