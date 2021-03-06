import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';


import Login from './Login.jsx'



// Se importa las paginas

// import Home from ''
// import Register from ''
// import Login from ''

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

function NavBar(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static">

        <Toolbar>

          <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
            
            <MenuIcon />
          
          </IconButton>

          <Typography variant="h6" color="inherit" className={classes.grow}>
            CSA Monda
          </Typography>

          <Button color="inherit">Acerca</Button>

          <Button color="inherit">Register</Button>

          <Login color="inherit" style='color: white'/>

        </Toolbar>
        
      </AppBar>

    </div>
  );
}
NavBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavBar);