import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import IconLabelButtons from './SubmitButton.jsx';




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


class FilledTextFields extends React.Component {

    constructor(...props){
        super(...props)
    
        this.state = { 
            mail: '',
            password:''
        }
        
        this.handleOnSubmit = this.handleOnSubmit.bind(this)
      
    }

  handleOnSubmit(e){

    alert('Click')
    e.preventDefault()

    let form = e.target

    console.log(form.email.value)

    console.log(form.password.value)

    this.setState({
        mail: form.email.value,
        password: form.password.value
    })

    console.log(this.state)
  }

  render() {
    const { classes } = this.props;

    return (
      
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

         <input type="submit" value="send">
           
         </input>
         
       
      </form>
    );
  }
}

FilledTextFields.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(FilledTextFields);