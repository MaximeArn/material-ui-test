/* eslint-disable operator-linebreak */
// == Import npm
import React, { useEffect } from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

// == Import
import './app.scss';

const useStyles = makeStyles((theme) => ({
  navBar: {
    backgroundColor: 'green',
  },
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

// == Composant
const App = () => {
  const classes = useStyles();
  const baseRoute = 'https://www.potterapi.com/v1';
  const key = '$2a$10$YeyRqM/odQZNDwoEe0EEOu9NCXFEhVuPLcoMWgBBqdFJE2hWoVSu.';

  useEffect(() => {
    axios
      .get(`${baseRoute}/characters/?key=${key}`)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log('err :', err);
      });
  }, []);

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.navBar}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            News
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

// == Export
export default App;
