import React,{Fragment} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import SubmitButton from './SubmitButton.jsx';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import withMobileDialog from '@material-ui/core/withMobileDialog';
// import Image from 'material-ui-image'

// import CSALogo from '../media/bloggif_5be632db47b35.png'


const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  dense: {
    marginTop: 16,
  },
  menu: {
    width: 200,
  },
});


class Login extends React.Component {

    constructor(...props){
        super(...props)
    
        this.state = { 
            open: true,
            mail: '',
            password:''
        }
        
      this.handleOnSubmit = this.handleOnSubmit.bind(this)
      this.handleClickOpen = this.handleClickOpen.bind(this)
      this.handleClose = this.handleClose.bind(this)
      
    }

  handleOnSubmit(e){

    // alert('Click')
    // e.preventDefault()

    // let form = e.target

    // console.log(form.email.value)

    // console.log(form.password.value)

    // this.setState({
    //     mail: form.email.value,
    //     password: form.password.value
    // })

    // console.log(this.state)
  }

  handleClickOpen(){
    this.setState({ open: true })
  }

  handleClose(){
    this.setState({ open: false })
  }

  render() {
    const { classes } = this.props;

    return (

    <Fragment>
        <Button onClick={this.handleClickOpen}>Login</Button>
        <Dialog
          // fullScreen={fullScreen}
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="responsive-dialog-title"
        >
          <DialogTitle id="responsive-dialog-title">
          
            <img src={require('../media/bloggif_5be632db47b35.png')}/>
            <br/>
            Control Sistematizado Avícola
          
          </DialogTitle>
          
          <DialogContent>
            {/* Aqui se mete el contenido */}
            
              <DialogContentText>
                Ingrese su usuario y contraseña:
              </DialogContentText>

            <form onSubmit={this.handleOnSubmit} className={classes.container} noValidate autoComplete="off">

              <TextField
                id="filled-email-input"
                label="Email"
                className={classes.textField}
                type="email"
                name="email"
                autoComplete="email"
                margin="normal"
                variant="filled"
              />
              <TextField
                id="filled-password-input"
                label="Password"
                className={classes.textField}
                type="password"
                name="password"
                autoComplete="current-password"
                margin="normal"
                variant="filled"
              />
    
            </form>

          </DialogContent>

          <DialogActions>
            {/* Aqui se mete los botones que realizan acciones */}
           
            <div onClick={this.handleClose}>
              <SubmitButton  color="primary">
              </SubmitButton>
            </div>

          </DialogActions>
        </Dialog>
    </Fragment>
    );
  }
}

Login.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(Login);