import React from "react";
import { makeStyles, withStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { countries } from "./variables";
import France from "./assets/France.jpg";
import Suisse from "./assets/Suisse.jpg";
import Allemagne from "./assets/Suisse.jpg";




const BootstrapInput = withStyles((theme) => ({
  root: {
    'label + &': {
      marginTop: theme.spacing(3),
    },
  },
  input: {
    borderRadius: 4,
    position: 'relative',
    border: '1px solid white',
    fontSize: 16,
    padding: '10px 26px 10px 12px',

    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      borderRadius: 4,
      //borderColor: '#80bdff',//
      //boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',//
    },
  },
}))(InputBase);

const useStyles = makeStyles(theme => ({
  button: {
    display: "block",
    marginTop: theme.spacing(2),
    
  },
  
  formControl: {
    marginTop: theme.spacing(2),
    maxWidth: "100px",
  },
  select: {
    textAlign: "center",
    textDecoration: "none",
       backgroundColor:'#293339',

  }
}));







function Flag1() {
  const classes = useStyles();
  const [country, setCountry] = React.useState({
    country: [France, Allemagne, Suisse]
  });
  const [open, setOpen] = React.useState(false);

  const handleChange = event => {
    setCountry(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <form autoComplete="off">
      <FormControl className={classes.formControl}>
        <InputLabel  htmlFor="demo-customized-select-native"  />
        <Select 
        style={{
          width:'220px',
          backgroundColor:'#293339',
          color:"white"
        }}

          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={country}
          name="country"
        

          onChange={handleChange}
          inputProps={{
            
          
         
          }}
          input={<BootstrapInput />}
        >
          {countries.map((option, key) => (
            <MenuItem value={option.link} key={key}   
            style={{
              display: 'flex',
              width: '300px',
              flexDirection: 'column',
              backgroundColor:'#293339',
              color:"white",
            }}
            >
              <img src={option.link} 
              style={{
                height:'10%',
                width:'10%',
                alignItems:'right',
                marginRight:'100px',
                
              }}
              alt=""
              />
             <span style={{
              alignItems:'center',
             }}>
             {option.label}
             </span>
              
            
              
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </form>
  );
}
export default Flag1;
