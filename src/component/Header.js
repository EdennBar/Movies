import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List';
import { BrowserRouter as Router, Switch, Route, useHistory } from 'react-router-dom';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MovieIcon from '@material-ui/icons/Movie';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MovieFilterIcon from '@material-ui/icons/MovieFilter';
import { useState } from 'react';
import SortIcon from '@material-ui/icons/Sort';


const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  },
  appbar: {
    background: 'none',
  },
  icon: {
    fontSize: '2rem'
  },
  appbartitle: {
    flexGrow: '1'
  }, appbarWrapper: {
    width: '80%',
    margin: '0 auto',
  }, drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },



}));
const Header = () => {
  const history = useHistory();
  const classes = useStyles();
  const theme = useTheme();

  const [open, setOpen] = useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleClick = () => {
    history.push('/trending');
    window.location.reload();

  }

  const handleClickMovies = () => {
    history.push('/movies');
    window.location.reload();

  }






  return (
    <div >

      <AppBar position="static" className={classes.appbar} elevation={0}>
        <Toolbar className={classes.appbarWrapper}>
          <h1 className={classes.appbartitle}>netflix </h1>
          <div className={classes.drawerHeader}>

            <IconButton

              onClick={handleDrawerOpen}
              className={classes.menuButton} color="inherit" aria-label="menu">
              <SortIcon className={classes.icon}></SortIcon>
            </IconButton>
          </div>

        </Toolbar>
      </AppBar>
      <div className={classes.root}>
        < h1 style={{ color: 'white' }}> Unlimited movies,TV shows, and more.<br></br><span>Watch anywhere. Cancel anytime</span></h1>

      </div>
      <Drawer className={classes.drawer}
        variant="persistent"
        anchor="right"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />

        <List>


          <ListItem button onClick={handleClick}>
            <ListItemIcon>
              <MovieFilterIcon />
            </ListItemIcon>
            <ListItemText primary='Trending'>
         
            
            </ListItemText>
          </ListItem>
          </List>
          
          <Divider />
          <List>

          <ListItem button onClick={handleClickMovies}>
            <ListItemIcon><MovieIcon/></ListItemIcon>
            <ListItemText primary='Trending'>
   
            
            </ListItemText>
          </ListItem>
          </List>
    
      </Drawer>

    </div>
  );
}

export default Header;


