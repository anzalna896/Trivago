import React, { Component } from "react";
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
//import { makeStyles } from '@material-ui/core/styles';

//import Tooltip from '@material-ui/core/Tooltip';

const emailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

const formValid = ({ formErrors, ...rest }) => {
  let valid = true;

  // validate form errors being empty
  Object.values(formErrors).forEach(val => {
    val.length > 0 && (valid = false);
  });

  // validate the form was filled out
  Object.values(rest).forEach(val => {
    val === null && (valid = false);
  });

  return valid;
};

class Validation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: null,
      formErrors: {
        email: "",
      }
    };
  }

  handleSubmit = e => {
    e.preventDefault();

    if (formValid(this.state)) {
      console.log(`
        --SUBMITTING
        Email: ${this.state.email}
      `);
    } else {
      console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
    }
  };

  handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    let formErrors = { ...this.state.formErrors };

    switch (name) {
      case "email":
        formErrors.email = emailRegex.test(value) ? "": 

          "invalid email address ";
        break;
      default:
        break;
    }

    this.setState({ formErrors, [name]: value }, () => console.log(this.state));
  };
  render() {
    const { formErrors } = this.state;
    
    return (
      <div className="wrapper">
        <div className="form-wrapper">

          <form onSubmit={this.handleSubmit} noValidate>
            <Grid item xs >
                 <input type="email"
                   noValidate
                   onChange={this.handleChange}
                   id="email"
                   placeholder="Email Address"
                   name="email"
                   style={{
                    height:'6.8vh',
                    width:'300px', 
                    textAlign: 'left',
                    backgroundColor:'white',
                    borderRadius:'2px',
                    border:'1px solid #37454D'
                   }}
                  />
                 <Button class="button"
                  style={{
                    height:'6.8vh',
                    border:'1px solid #697379',
                    backgroundColor:'#697379',
                    width:'105px',
                    textAlign: 'left',
                    borderRadius:'2px',
                    color:'#fff',
                    cursor: 'pointer',
                    textTransform:'capitalize',
                    
                    '&:hover':{
                    backgroundColor:"red",
                     }
                   }}
                   type="submit"
                   fullWidth
                   variant="contained" 
                   >
                   <b>Subscribe</b>
                 </Button>
                  {formErrors.email.length > 0 && (
                <span  className="errorMessage">
                <br/>{formErrors.email}</span>
              )}
             </Grid>
          </form>
        </div>
      </div>
    );
  }
}

export default Validation;