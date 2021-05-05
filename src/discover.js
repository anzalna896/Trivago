import React from 'react';
import NavBar from './navbar';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import { makeStyles,withStyles } from '@material-ui/core/styles';
import banner from './assets/hero.png';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RoomOutlinedIcon from '@material-ui/icons/RoomOutlined';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemText from '@material-ui/core/ListItemText';
import Chip from '@material-ui/core/Chip';
import { Link } from 'react-router-dom';
import Rating from '@material-ui/lab/Rating';
import Button from '@material-ui/core/Button';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

//import Checkbox from '@material-ui/core/Checkbox';
import Footer from './footer';
import One from './assets/one.png';
import Two from './assets/two.png';
import Three from './assets/three.png';
import Four from './assets/four.png';
import Five from './assets/five.png';


const useStyles = makeStyles((theme) => ({

  gridContainer:{
   alignItems:"center",
   justifyContent:"center",
   width:'100%',
   textAlign:"center",
    backgroundColor:"#293339",
    marginTop:"8em",

    [theme.breakpoints.down("sm")]:{
    textAlign:"center",
    alignItems:"center",
   justifyContent:"center",
    },
    [theme.breakpoints.down("xs")]:{
    textAlign:"center",
    alignItems:"center",
   justifyContent:"center",
    }
  },

  rowContainer:{
    display:'flex',
    flexDirection:'row',
 
    [theme.breakpoints.down("sm")]:{
      display:'flex',
      flexDirection:"column",
    },

     [theme.breakpoints.down("xs")]:{
      display:'flex',
      flexDirection:"column",
      }
  },

  banner:{
    backgroundImage:`url(${banner})`,
    backgroundPosition:"center",
    overflow:'hidden',
    backgroundSize:"cover",
    backgroundRepeat:'no-repeat',
    alignItems:"center",
    justifyContent:"center",
    width:'100%',
    height:350,
 
    [theme.breakpoints.down("sm")]:{
    textAlign:"center",
    paddingLeft:"1.5em",
    paddingRight:"1.5em",
    },
    [theme.breakpoints.down("xs")]:{
    textAlign:"center",
    paddingLeft:"1.5em",
    paddingRight:"1.5em"
    }
  },
  
 Header:{
    marginTop:"3.5em",
    fontSize:"2em",
    color:"white",
    float:"left",
    fontWeight:200,
    lineHeight:"10px",

    [theme.breakpoints.down("sm")]:{
    fontSize:"1.5em",
    textAlign:"center",
    paddingLeft:"1.5em",
    paddingRight:"1.5em",
    },

    [theme.breakpoints.down("xs")]:{
    fontSize:"1.5em",
    textAlign:"center",
    paddingLeft:"1em",
    paddingRight:"1em"
    }
  },
   cards: {
    maxWidth: 345,
  },
  root: {
    margin:"5em 5em 0 5em",
    width: 600,
    borderRadius:"4px",
    borderColor:"1px solid white",
    boxShadow:"0 8px 6px -6px black",
  },

  location:{
      fontSize:"1.5em",
      fontWeight:400,
      margin:"3em 1em 2em 3.5em",
      color:"#293339"
  },

  cardContainer:{
   alignItems:"center",
   justifyContent:"center",
   width:'100%',
 
    [theme.breakpoints.down("sm")]:{
    paddingLeft:"1.5em",
    paddingRight:"1.5em",
    },
    [theme.breakpoints.down("xs")]:{
    paddingLeft:"1.5em",
    paddingRight:"1.5em"
    }
  },


  cardItem:{
    margin:"1em",
  },


 cardd: { 
   background:'linear-gradient(rgba(0, 0, 0, 0.6),rgba(0, 0, 0, 0.6))',
   backgroundPosition:"center",
    overflow:'hidden',
    backgroundSize:"cover",
    backgroundRepeat:'no-repeat',
    alignItems:"center",
    justifyContent:"center",
    opacity:1,
   width: 360,
   height:350,
   borderRadius:'5px',
  },

  title:{
    color:"white",
    paddingLeft:'0.5em',
  }

}));


const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
    height:'200',
    width:'200'
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    '&:focus': {
      backgroundColor:theme.palette.info,
      color: theme.palette.common.black,
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        backgroundColor:theme.palette.info,
        color: theme.palette.common.black,
      },
    },
  },
}))(MenuItem);


export default function Discover(){
    const classes=useStyles();
     const [value, setValue] = React.useState(0);
     const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };


  
    return(
      <div>
       <NavBar/>
       <Grid container>
          <Grid item container className={classes.banner}>
           <Grid item style={{textAlign:"left",justifyContent:"left",float:"left"}}>
              <Typography className={classes.Header}>
               Your next holiday destination is closer than you think.
               <p>Discover it here.</p>
               </Typography>
           </Grid>
   
           <Grid item>
             <BottomNavigation value={value} onChange={(event, newValue) => {
                     setValue(newValue);
                 }}
                    showLabels
                  className={classes.root}>
                  <BottomNavigationAction label="Location" onClick={handleClick}/>
                     <StyledMenu
                      id="customized-menu"
                      anchorEl={anchorEl}
                      keepMounted
                      open={Boolean(anchorEl)}
                      onClose={handleClose}>

                      <StyledMenuItem>
                        <ListItemText primary="Munnar" />
                      </StyledMenuItem>
                      <StyledMenuItem>
                        
                        <ListItemText primary="Hingoli" />
                      </StyledMenuItem>
                      <StyledMenuItem>
                       
                        <ListItemText primary="Thrissur" />
                      </StyledMenuItem>
                      <StyledMenuItem>
                       
                        <ListItemText primary="Tripunithura" />
                      </StyledMenuItem>
                      <StyledMenuItem>
                       
                        <ListItemText primary="Bengaluru" />
                      </StyledMenuItem>
                    </StyledMenu>

                  <BottomNavigationAction label="Radius" onClick={handleClick}/>
                   <StyledMenu
                      id="customized-menu"
                      anchorEl={anchorEl}
                      keepMounted
                      open={Boolean(anchorEl)}
                      onClose={handleClose}
                    >
                      <StyledMenuItem>
                        <ListItemText primary="None" />
                      </StyledMenuItem>
                      <StyledMenuItem>
                        
                        <ListItemText primary="100 km" />
                      </StyledMenuItem>
                      <StyledMenuItem>
                       
                        <ListItemText primary="200 km" />
                      </StyledMenuItem>
                      <StyledMenuItem>
                       
                        <ListItemText primary="300 km" />
                      </StyledMenuItem>
                      <StyledMenuItem>
                       
                        <ListItemText primary="Bengaluru" />
                      </StyledMenuItem>
                    </StyledMenu>

                  <BottomNavigationAction label="Stay dates" onClick={handleClick}/>
                   <StyledMenu
                      id="customized-menu"
                      anchorEl={anchorEl}
                      keepMounted
                      open={Boolean(anchorEl)}
                      onClose={handleClose}
                    >
                      <StyledMenuItem>
                        <ListItemText primary="Next 14 days" />
                      </StyledMenuItem>
                      <StyledMenuItem>
                        
                        <ListItemText primary="February" />
                      </StyledMenuItem>
                      <StyledMenuItem>
                       
                        <ListItemText primary="March" />
                      </StyledMenuItem>
                      <StyledMenuItem>
                       
                        <ListItemText primary="April" />
                      </StyledMenuItem>
                     
                    </StyledMenu>

                  <BottomNavigationAction label="Guests" onClick={handleClick}/>
                   <StyledMenu
                      id="customized-menu"
                      anchorEl={anchorEl}
                      keepMounted
                      open={Boolean(anchorEl)}
                      onClose={handleClose}
                    >
                      <StyledMenuItem>
                        <ListItemText primary="Munnar" />
                      </StyledMenuItem>
                      <StyledMenuItem>
                        
                        <ListItemText primary="Hingoli" />
                      </StyledMenuItem>
                      <StyledMenuItem>
                       
                        <ListItemText primary="Thrissur" />
                      </StyledMenuItem>
                      <StyledMenuItem>
                       
                        <ListItemText primary="Tripunithura" />
                      </StyledMenuItem>
                      <StyledMenuItem>
                       
                        <ListItemText primary="Bengaluru" />
                      </StyledMenuItem>
                    </StyledMenu>

             </BottomNavigation>
           </Grid>   
        </Grid>
       
       <Grid item container>
           <Grid item style={{textAlign:"center"}}>
              <Typography className={classes.location}>
                  <span style={{fontWeight:500}}>Munnar,</span><span style={{fontSize:"0.7em",fontWeight:400,color:"#697379"}}> India</span>
                  <RoomOutlinedIcon style={{fontSize:"0.8em",marginLeft:"0.8em",marginRight:"0.8em",color:"#697379"}}/>
                  <span style={{fontSize:"0.5em",fontWeight:400,color:"#697379"}}>102 km from Munnar</span>
                </Typography>
           </Grid>
       </Grid>

        <Grid item container>
          <Grid item md={6} style={{textAlign:"center"}}>
            <Typography >
              <h3 style={{color:"#293339",fontWeight:100}}>Top deals on hotels and other stays</h3>
            </Typography>
          </Grid>
          <Grid item md={6} style={{textAlign:"center"}}>
                <Button href="#text-buttons" color="primary" endIcon={<ChevronRightIcon/>}>
                   <h2 style={{fontWeight:100}}>See more stays</h2>
                </Button>
          </Grid>
        </Grid>         

       <Grid item container className={classes.cardContainer}>

         <Grid item className={classes.cardItem}>
         <Card className={classes.cardd} style={{backgroundImage:`url(${One})`}}>
                <RoomOutlinedIcon style={{fontSize:"0.9em",fontWeight:500,color:"white",padding:"0.5em"}}/>
                <span style={{fontSize:"0.8em",fontWeight:500,color:"white",padding:"0.5em"}}>7.1 km to city centre</span>
                <Typography className={classes.title}><h2>Hotel The Tall Trees Resort...</h2></Typography>
                <Rating name="read-only" value={4} readOnly size="small" max={4} style={{paddingLeft:"0.5em"}} />
                <div>
                 <Chip label="8.7" size="small" style={{backgroundColor:"#428500",color:"white",marginLeft:"0.5em"}}/>
                 <span  style={{fontSize:"0.8em",fontWeight:500,color:"white",paddingLeft:"0.5em"}}>Excellent(151 reviews)</span></div>
                <Typography style={{float:"right",paddingRight:"0.5em"}}>
                  <span style={{fontSize:"0.8em",color:"white"}}>₹</span>
                   <span style={{fontSize:"2.5em",color:"white"}}><b>6,955</b></span>
                   <span style={{fontSize:"0.8em",color:"white"}}>/ night</span>
                  <div><span style={{fontSize:"0.8em",color:"white",float:"right"}}><b>Agoda</b></span></div>
                <div>
                  <span style={{fontSize:"0.8em",color:"white"}}>25/03 - 27/03</span>
                   <div style={{fontSize:"0.8em",color:"white"}}>Total 
                   <span style={{fontSize:"0.8em",color:"white"}}><b>₹13,909</b></span></div>
                   <Button variant="contained" style={{backgroundColor:"#428500",color:"white"}} endIcon={<ChevronRightIcon/>}>
                    View Deal
                  </Button>
                </div></Typography>
         </Card>
         </Grid>

        <Grid item className={classes.cardItem}>
         <Card className={classes.cardd} style={{backgroundImage:`url(${Five})`}}>
               <RoomOutlinedIcon style={{fontSize:"0.9em",fontWeight:500,color:"white",padding:"0.5em"}}/>
                <span style={{fontSize:"0.8em",fontWeight:500,color:"white",padding:"0.5em"}}>9.6 km to city centre</span>
                <Typography className={classes.title}><h2>OYO 5841 Forest Haven</h2></Typography>
                <Rating name="read-only" value={3} readOnly size="small" max={3} style={{paddingLeft:"0.5em"}} />
                <div>
                 <Chip label="7.5" size="small" style={{backgroundColor:"#428500",color:"white",marginLeft:"0.5em"}}/>
                 <span  style={{fontSize:"0.8em",fontWeight:500,color:"white",paddingLeft:"0.5em"}}>Good(1,219 reviews)</span></div>
                <Typography style={{float:"right",paddingRight:"0.5em"}}>
                  <span style={{fontSize:"0.8em",color:"white"}}>₹</span>
                   <span style={{fontSize:"2.5em",color:"white"}}><b>1,400</b></span>
                   <span style={{fontSize:"0.8em",color:"white"}}>/ night</span>
                  <div><span style={{fontSize:"0.8em",color:"white",float:"right"}}><b>MakeMyTrip</b></span></div>
                <div>
                  <span style={{fontSize:"0.8em",color:"white"}}>25/03 - 27/03</span>
                   <div style={{fontSize:"0.8em",color:"white"}}>Total 
                   <span style={{fontSize:"0.8em",color:"white"}}><b>₹2,800</b></span></div>
                   <Button variant="contained" style={{backgroundColor:"#428500",color:"white"}} endIcon={<ChevronRightIcon/>}>
                    View Deal
                  </Button>
                </div></Typography>
         </Card>
         </Grid>
        <Grid item className={classes.cardItem}>
         <Card className={classes.cardd} style={{backgroundImage:`url(${Two})`}}>
               <RoomOutlinedIcon style={{fontSize:"0.9em",fontWeight:500,color:"white",padding:"0.5em"}}/>
                <span style={{fontSize:"0.8em",fontWeight:500,color:"white",padding:"0.5em"}}>9.1 km to city centre</span>
                <Typography className={classes.title}><h2>The Leaf Munnar</h2></Typography>
                <div>
                 <Chip label="7.8" size="small" style={{backgroundColor:"#428500",color:"white",marginLeft:"0.5em"}}/>
                 <span  style={{fontSize:"0.8em",fontWeight:500,color:"white",paddingLeft:"0.5em"}}>Good(297 reviews)</span></div>
                <Typography style={{float:"right",paddingRight:"0.5em"}}>
                  <span style={{fontSize:"0.8em",color:"white"}}>₹</span>
                   <span style={{fontSize:"2.5em",color:"white"}}><b>5,851</b></span>
                   <span style={{fontSize:"0.8em",color:"white"}}>/ night</span>
                  <div><span style={{fontSize:"0.8em",color:"white",float:"right"}}><b>MakeMyTrip</b></span></div>
                <div>
                  <span style={{fontSize:"0.8em",color:"white"}}>25/03 - 27/03</span>
                   <div style={{fontSize:"0.8em",color:"white"}}>Total 
                   <span style={{fontSize:"0.8em",color:"white"}}><b>₹11,703</b></span></div>
                   <Button variant="contained" style={{backgroundColor:"#428500",color:"white"}} endIcon={<ChevronRightIcon/>}>
                    View Deal
                  </Button>
                </div></Typography>
         </Card>
         </Grid>

         <Grid item className={classes.cardItem}>
         <Card className={classes.cardd} style={{backgroundImage:`url(${Three})`}}>
               <RoomOutlinedIcon style={{fontSize:"1em",fontWeight:500,color:"white",padding:"0.5em"}}/>
                <span style={{fontSize:"0.8em",fontWeight:500,color:"white",padding:"0.5em"}}>1.0 km to city centre</span>
                <Typography className={classes.title}><h2>Parakkat Nature Resort </h2></Typography>
                <Rating name="read-only" value={4} readOnly size="small" max={4} style={{paddingLeft:"0.5em"}} />
                <div>
                 <Chip label="8.4" size="small" style={{backgroundColor:"#428500",color:"white",marginLeft:"0.5em"}}/>
                 <span  style={{fontSize:"0.8em",fontWeight:500,color:"white",paddingLeft:"0.5em"}}>Very Good(61 reviews)</span></div>
                <Typography style={{float:"right",paddingRight:"0.5em"}}>
                  <span style={{fontSize:"0.8em",color:"white"}}>₹</span>
                   <span style={{fontSize:"2.5em",color:"white"}}><b>6,955</b></span>
                   <span style={{fontSize:"0.8em",color:"white"}}>/ night</span>
                  <div><span style={{fontSize:"0.8em",color:"white",float:"right"}}><b>Agoda</b></span></div>
                <div>
                  <span style={{fontSize:"0.8em",color:"white"}}>25/03 - 27/03</span>
                   <div style={{fontSize:"0.8em",color:"white"}}>Total 
                   <span style={{fontSize:"0.8em",color:"white"}}><b>₹13,909</b></span></div>
                   <Button variant="contained" style={{backgroundColor:"#428500",color:"white"}} endIcon={<ChevronRightIcon/>}>
                    View Deal
                  </Button>
                </div></Typography>
         </Card>
         </Grid>

         <Grid item className={classes.cardItem}>
         <Card className={classes.cardd} style={{backgroundImage:`url(${Four})`}}>
                 <RoomOutlinedIcon style={{fontSize:"0.9em",fontWeight:500,color:"white",padding:"0.5em"}}/>
                <span style={{fontSize:"0.8em",fontWeight:500,color:"white",padding:"0.5em"}}>7.1 km to city centre</span>
                <Typography className={classes.title}><h2>The Shade</h2></Typography>
                <Rating name="read-only" value={4} readOnly size="small" max={4} style={{paddingLeft:"0.5em"}} />
                <div>
                 <Chip label="8.7" size="small" style={{backgroundColor:"#428500",color:"white",marginLeft:"0.5em"}}/>
                 <span  style={{fontSize:"0.8em",fontWeight:500,color:"white",paddingLeft:"0.5em"}}>Excellent(151 reviews)</span></div>
                <Typography style={{float:"right",paddingRight:"0.5em"}}>
                  <span style={{fontSize:"0.8em",color:"white"}}>₹</span>
                   <span style={{fontSize:"2.5em",color:"white"}}><b>2,147</b></span>
                   <span style={{fontSize:"0.8em",color:"white"}}>/ night</span>
                  <div><span style={{fontSize:"0.8em",color:"white",float:"right"}}><b>MakeMyTrip</b></span></div>
                <div>
                  <span style={{fontSize:"0.8em",color:"white"}}>25/03 - 27/03</span>
                   <div style={{fontSize:"0.8em",color:"white"}}>Total 
                   <span style={{fontSize:"0.8em",color:"white"}}><b>₹4,294</b></span></div>
                   <Button variant="contained" style={{backgroundColor:"#428500",color:"white"}} endIcon={<ChevronRightIcon/>}>
                    View Deal
                  </Button>
                </div></Typography>
         </Card>
         </Grid>
       </Grid>
       <Grid item container style={{alignItems:"center",justifyContent:"center",marginTop:"3em"}}>
         <Link to ='/deals'>
     <Button variant="contained" color="primary" endIcon={<ChevronRightIcon/>}>SEE MORE DEALS</Button>
    </Link>
   </Grid>
   </Grid>
   <Footer/>
        </div>
    )
};