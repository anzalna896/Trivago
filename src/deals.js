import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Typography from '@material-ui/core/Typography';
import Navbar from './navbar';
import Footer from './footer';
import {TwoButton} from './common';
import {TextField,Button} from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search';
import ImportExportIcon from '@material-ui/icons/ImportExport';
import TuneIcon from '@material-ui/icons/Tune';
import DateFnsUtils from '@date-io/date-fns';
import IconButton from '@material-ui/core/IconButton';
import Chip from '@material-ui/core/Chip';
//import { Link } from 'react-router-dom';
import Rating from '@material-ui/lab/Rating';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';
import {KeyboardDatePicker, MuiPickersUtilsProvider} from '@material-ui/pickers';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import Dialog from '@material-ui/core/Dialog';
//import Pagination from '@material-ui/lab/Pagination';

import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
//import CloseIcon from '@material-ui/icons/Close';
import Popper from '@material-ui/core/Popper';
import Slide from '@material-ui/core/Slide';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

import One from './assets/two.png';
import Two from './assets/1982563.png';
import Three from './assets/5042488.png';
import Four from './assets/2127292.png';
import Five from './assets/5888934.png';
import Six from './assets/773523_v1.png';
import Seven from './assets/954459_v3.png';
import Eight from './assets/954453.png';
import Nine from './assets/1787493_v3.png';
import Ten from './assets/960667_v2.png';

const useStyles = makeStyles(theme => ({
 

    search:{
        margin:"20px 0",
        padding:"10px 0",
        backgroundColor:'#f5f5f6',
        alignItems:"center",
        justifyContent:"center"
    },
searchBarWrapper:{
        height:47,
        borderRadius:0,
        border:"1px solid #EBECED",
    },
    buttonGrid:{
        borderRadius:2,
        border:"1px groove #909090",
        height:47,
        backgroundColor:"white",
    },
    searchBar:{
        border:"1px solid #EBECED",
        '&:hover':{
            border:"1px solid #EBECED",
        }
    },

    cardContainer:{
     backgroundColor:'#f5f5f6',
     alignItems:"center",
     justifyContent:"center",
     width:'100%',
 
    [theme.breakpoints.down("sm")]:{
    alignItems:"center",
    justifyContent:"center",
    display:"flex"
    },
    [theme.breakpoints.down("xs")]:{
    alignItems:"center",
    justifyContent:"center",
    display:"flex"
    }
    },


  cardItem:{
     display: 'flex',
    opacity:1,
   width: 900,
   height:280,
   borderRadius:'5px',
   [theme.breakpoints.down("sm")]:{
    width:"100%",
    },
    [theme.breakpoints.down("xs")]:{
    width:"100%",
    }
  },

   cards:{
    margin:"1em",
    alignItems:"center",
    justifyContent:"center",
    [theme.breakpoints.down("sm")]:{
    width:"100%",
    paddingLeft:"1em",
    paddingRight:"1em",
    },
    [theme.breakpoints.down("xs")]:{
    width:"100%",
    paddingLeft:"1em",
    paddingRight:"1em"
    }
  },

  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    margin:"0.5em",
    width:'50%',
    height:'95%',
    [theme.breakpoints.down("sm")]:{
    width:"100%",
    height:'100%',
    margin:"0.5em",
    display:"flex",
    paddingLeft:"1em",
    paddingRight:"1em",
    },
    [theme.breakpoints.down("xs")]:{
    width:"100%",
    height:'100%',
    margin:"0.5em",
    paddingLeft:"1em",
    paddingRight:"1em"
    }
  },

  title:{
    fontSize:"0.9em",
    fontWeight:500,
    color:"#37454d"
  },

   appBar: {
    position: 'relative',
  },
  titles: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },

    chip: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(2),
    },
  },

  paper: {
    border: '1px solid',
    padding: theme.spacing(1),
    width:'100%',
    height:'300px',
    backgroundColor: theme.palette.background.paper,
  },
}));


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Deals(){
 const classes= useStyles();
 const [selectedDate, setSelectedDate] = React.useState(new Date());
 const [open, setOpen] = React.useState(false);
 const [value, setValue] = React.useState('female');
 const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const opened = Boolean(anchorEl);
  const id = opened ? 'simple-popper' : undefined; 

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
    return(
        <div>
        <Navbar/>
        <Grid container spacing={1} className={classes.search}>
            <Grid item xs={12} md={6}>           
              <TextField style={{width:'100%',backgroundColor:"white"}}
                name={'text'}
                variant="outlined"
                placeholder="Enter a hotel name or destination"
                InputProps={{
                    startAdornment:
                    <SearchIcon style={{opacity:0.5,marginRight:"1em"}}/>,
                    classes: { root:classes.searchBarWrapper},
                    endAdornment:
                    <IconButton style={{backgroundColor:"rgba(0,127,173)",color:"white",border: "none",borderRadius:"4px"}}>
                      <SearchIcon/>
                    </IconButton>
                    }}
              />           
           </Grid>

           <Grid item xs={12} sm={8} md={5} >
             <TwoButton>   
                <React.Fragment>
                  <MuiPickersUtilsProvider utils={DateFnsUtils}>
                   <Grid item>
                     <KeyboardDatePicker
                      disableToolbar
                      variant="inline"
                      format="MM/dd/yyyy"
                      id="date-picker-inline"
                      label="Check in"
                      value={selectedDate}
                      onChange={handleDateChange}
                      KeyboardButtonProps={{
                        'aria-label': 'change date',
                      }}
                    />
                   </Grid>

        </MuiPickersUtilsProvider>
                    </React.Fragment>
                    <React.Fragment>

    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                 <Grid item>
                   <KeyboardDatePicker
                        disableToolbar
                        variant="inline"
                        format="MM/dd/yyyy"
                        id="date-picker-inline"
                        label="Check out"
                        value={selectedDate}
                        onChange={handleDateChange}
                        KeyboardButtonProps={{
                          'aria-label': 'change date',
                        }}
                      />
        </Grid>
        </MuiPickersUtilsProvider>
                    </React.Fragment>
                </TwoButton>               
           </Grid> 
           
           <Grid item>
            <IconButton aria-label="delete"  className={classes.margin} style={{height:"1.5em"}}>
                <PeopleOutlineIcon fontSize="large" onClick={handleClick} style={{backgroundColor:"white",border:"1px solid"}}/>
            </IconButton>
             <Popper id={id} open={open} anchorEl={anchorEl}>
               <div className={classes.paper}>The content of the Popper.</div>
            </Popper>


          </Grid>

           <Grid item md={12} xs={6}>
               <ButtonGroup variant="text"  aria-label="text primary button group" fullWidth="true" style={{border:"1px solid black"}}>
                  <Button width="100%" onClick={handleClickOpen} style={{backgroundColor:"white"}} startIcon={<ImportExportIcon/> }>Sort</Button>
                  <Button width="100%" onClick={handleClickOpen} style={{backgroundColor:"white"}}startIcon={<TuneIcon/>}>Filter</Button> <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
                      <AppBar className={classes.appBar}>
                        <Toolbar>
                          <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
                            <ChevronLeftIcon/>
                          </IconButton>
                          <Typography variant="h6" className={classes.titles}>
                              Back
                          </Typography>
                          <Typography variant="h6" className={classes.titles}>
                               Sort & Filter
                          </Typography>
                        </Toolbar>
                      </AppBar>
                      <FormControl component="fieldset" style={{alignItems:"center",textAlign:"justify",justifyContent:"center",marginTop:"3em"}}>
                        <Typography component="h6" style={{fontWeight:800,alignItems:"center",textAlign:"center",justifyContent:"center",marginTop:"1.5em"}}>Sort by</Typography>
                      <RadioGroup  aria-label="options" name="opt" value={value} onChange={handleChange} style={{marginTop:"2em"}}>
                        <FormControlLabel value="or" control={<Radio />} label="Our recommendation" />
                        <FormControlLabel value="po" control={<Radio />} label="Price only" />
                        <FormControlLabel value="rr" control={<Radio />} label="Rating & Recommended" />
                        <FormControlLabel value="pr" control={<Radio />} label="Price & Recommended" />
                        <FormControlLabel value="dr" control={<Radio />} label="Distance & Recommended" />
                        <FormControlLabel value="ro" control={<Radio />} label="Rating only" />
                        <FormControlLabel value="do" control={<Radio />} label="Distance only" />
                      </RadioGroup>
                      </FormControl>

                      <Divider variant="middle" style={{marginTop:"1.5em"}}/>
                      
                      <Typography component="h6" style={{fontWeight:800,alignItems:"center",textAlign:"center",justifyContent:"center",marginTop:"1.5em"}}>Guest rating</Typography>
                       <div className={classes.chip}> 
                        <Chip label="0" clickable style={{backgroundColor:"#C94A30",color:"white"}}/>
                        <Chip label="7.0" clickable style={{backgroundColor:"#F48F00",color:"white"}}/>
                        <Chip label="7.5" clickable style={{backgroundColor:"#71A340",color:"white"}}/>
                        <Chip label="8.0" clickable style={{backgroundColor:"#428500",color:"white"}}/>
                        <Chip label="8.5" clickable style={{backgroundColor:"#316300",color:"white"}}/>
                      </div>

                      <Divider variant="middle" style={{marginTop:"1.5em"}}/>

                       <FormControl component="fieldset" style={{alignItems:"center",textAlign:"justify",justifyContent:"center",marginTop:"2em"}}>
                        <Typography component="h6" style={{fontWeight:800,alignItems:"center",textAlign:"center",justifyContent:"center",marginTop:"1.5em"}}>Accomodation type</Typography>
                      <RadioGroup  aria-label="options" name="opt" value={value} onChange={handleChange} style={{marginTop:"2em"}}>
                        <FormControlLabel value="at" control={<Radio />} label="All types" />
                        <FormControlLabel value="ht" control={<Radio />} label="Hotel" />
                        <div className={classes.chip}>
                          <Rating name="size-small" value={1} size="small" max={1}/>
                          <Rating name="size-small" value={2} size="small" max={2}/>
                          <Rating name="size-small" value={3} size="small" max={3}/>
                          <Rating name="size-small" value={4} size="small" max={4}/>
                          <Rating name="size-small" value={5} size="small" max={5}/>
                        </div>
                        <FormControlLabel value="hao" control={<Radio />} label="Home / Apartment / Other" />
                      </RadioGroup>
                      </FormControl>
                      <div>
                        <Button variant="outlined" style={{float:"left",margin:"1em",width:"15%"}}>Reset</Button>
                        <Button variant="outlined" style={{float:"right",backgroundColor:"#007FAD",color:"white",margin:"1em",width:"15%"}}>Done</Button>
                      </div>
                    </Dialog>
               </ButtonGroup>
           </Grid>
        </Grid>


        <Grid container className={classes.cardContainer}>
          <Grid item container className={classes.cards}>
            <Card className={classes.cardItem}>
              <CardMedia className={classes.cover}
                image={One}
               />
               <div className={classes.details}>
               <CardContent className={classes.content}>
                 <Typography className={classes.title}>
                    <b>The Leaf Munnar</b>
                 </Typography>
                 <span style={{marginLeft:"0.5em",fontSize:"0.8em"}}>
                   Hotel
                 </span>
                <div >
                 <Chip label="8.7" size="small" style={{backgroundColor:"#316300",color:"white"}}/>
                 <span  style={{fontSize:"0.8em",fontWeight:500,paddingLeft:"0.5em"}}>Excellent (39 reviews)</span>
                  <Typography variant="subtitle1"  style={{fontSize:"0.8em"}}>
                  Munnar, 9.1 km to City centre
                 </Typography></div>
                 <Grid  container width="100%" style={{backgroundColor:"#ECF3E6",marginTop:"4em",}}>
                   <Grid item container md={6} xs={6} sm={6} style={{float:"left",alignItems:"center"}}>                   
                <Typography style={{float:"left",paddingRight:"0.5em"}}>
                  <div><span style={{fontSize:"0.8em"}}><b>Booking.com</b></span></div>
                  <div><span style={{fontSize:"0.8em"}}>
                    <CheckCircleIcon fontSize="small" style={{color: "#316300"}}/>
                    <span style={{color: "#316300",fontWeight:400}}><b>Free cancellation</b></span>
                  </span></div>
                  <div><span style={{fontSize:"0.8em",color: "#316300"}}><b>₹ 5,999</b></span>
                  </div>
                </Typography></Grid>
                <Grid item container md={6} xs={6} sm={6} style={{paddingLeft:"5em",float:"right",alignItems:"center"}}>
                   <Button variant="contained" style={{backgroundColor:"#428500",color:"white",width:"20em",height:"3em"}} endIcon={<ChevronRightIcon/>}>
                    View Deal
                  </Button>
                </Grid></Grid>
               </CardContent>
              </div>
            </Card>
       </Grid>
          
          <Grid item container className={classes.cards}>
            <Card className={classes.cardItem}>
              <CardMedia className={classes.cover}
                image={Two}
               />
               <div className={classes.details}>
               <CardContent className={classes.content}>
                 <Typography className={classes.title}>
                    <b>Kaivalyam Welness Resort</b>
                 </Typography>
                 <Rating name="read-only" value={3} readOnly size="small" max={3}/>
                 <span style={{marginLeft:"0.5em",fontSize:"0.8em"}}>
                   Resort
                 </span>
                <div >
                 <Chip label="9.3" size="small" style={{backgroundColor:"#316300",color:"white"}}/>
                 <span  style={{fontSize:"0.8em",fontWeight:500,paddingLeft:"0.5em"}}>Excellent (294 reviews)</span>
                  <Typography variant="subtitle1"  style={{fontSize:"0.8em"}}>
                  Munnar, 5.0 km to City centre
                 </Typography></div>
                <Grid  container width="100%" style={{backgroundColor:"#ECF3E6",marginTop:"4em",}}>
                   <Grid item container md={6} xs={6} sm={6} style={{float:"left",alignItems:"center"}}>                   
                <Typography style={{float:"left",paddingRight:"0.5em"}}>
                  <div><span style={{fontSize:"0.8em"}}><b>Booking.com</b></span></div>
                  <div><span style={{fontSize:"0.8em"}}>
                    <CheckCircleIcon fontSize="small" style={{color: "#316300"}}/>
                    <span style={{color: "#316300",fontWeight:400}}><b>Free cancellation</b></span>
                  </span></div>
                  <div><span style={{fontSize:"0.8em",color: "#316300"}}><b>₹ 5,000</b></span>
                  </div>
                </Typography></Grid>
                <Grid item container md={6} xs={6} sm={6} style={{paddingLeft:"5em",float:"right",alignItems:"center"}}>
                   <Button variant="contained" style={{backgroundColor:"#428500",color:"white",width:"20em",height:"3em"}} endIcon={<ChevronRightIcon/>}>
                    View Deal
                  </Button>
                </Grid></Grid>
               </CardContent>
              </div>
            </Card>
       </Grid>
          
         
          <Grid item container className={classes.cards}>
            <Card className={classes.cardItem}>
              <CardMedia className={classes.cover}
                image={Three}
               />
               <div className={classes.details}>
               <CardContent className={classes.content}>
                 <Typography className={classes.title}>
                    <b>Tea Harvester</b>
                 </Typography>
               <Rating name="read-only" value={4} readOnly size="small" max={4}/>
                 <span style={{marginLeft:"0.5em",fontSize:"0.8em"}}>
                   Resort
                 </span>
                <div >
                 <Chip label="8.0" size="small" style={{backgroundColor:"#316300",color:"white"}}/>
                 <span  style={{fontSize:"0.8em",fontWeight:500,paddingLeft:"0.5em"}}>Very good (23 reviews)</span>
                  <Typography variant="subtitle1"  style={{fontSize:"0.8em"}}>
                  Munnar, 6.2 km to City centre
                 </Typography></div>
                <Grid  container width="100%" style={{backgroundColor:"#ECF3E6",marginTop:"4em",}}>
                   <Grid item container md={6} xs={6} sm={6} style={{float:"left",alignItems:"center"}}>                   
                <Typography style={{float:"left",paddingRight:"0.5em"}}>
                  <div><span style={{fontSize:"0.8em"}}><b>Agoda</b></span></div>
                  <div><span style={{fontSize:"0.8em"}}>
                    <CheckCircleIcon fontSize="small" style={{color: "#316300"}}/>
                    <span style={{color: "#316300",fontWeight:400}}><b>Free cancellation</b></span>
                  </span></div>
                  <div><span style={{fontSize:"0.8em",color: "#316300"}}><b>₹ 4,395</b></span>
                  </div>
                </Typography></Grid>
                <Grid item container md={6} xs={6} sm={6} style={{paddingLeft:"5em",float:"right",alignItems:"center"}}>
                   <Button variant="contained" style={{backgroundColor:"#428500",color:"white",width:"20em",height:"3em"}} endIcon={<ChevronRightIcon/>}>
                    View Deal
                  </Button>
                </Grid>
                </Grid>
               </CardContent>
              </div>
            </Card>
       </Grid>
          
          <Grid item container className={classes.cards}>
            <Card className={classes.cardItem}>
              <CardMedia className={classes.cover}
                image={Four}
               />
               <div className={classes.details}>
               <CardContent className={classes.content}>
                 <Typography className={classes.title}>
                    <b>Le Celestium</b>
                 </Typography> 
                 <Rating name="read-only" value={3} readOnly size="small" max={3}/>
                 <span style={{marginLeft:"0.5em",fontSize:"0.8em"}}>
                    Hotel
                 </span>
                <div >
                 <Chip label="9.1" size="small" style={{backgroundColor:"#316300",color:"white"}}/>
                 <span  style={{fontSize:"0.8em",fontWeight:500,paddingLeft:"0.5em"}}>Excellent (29022 reviews)</span>
                  <Typography variant="subtitle1"  style={{fontSize:"0.8em"}}>
                  Munnar, 1 km from City centre
                 </Typography></div>
                 <Grid  container width="100%" style={{backgroundColor:"#ECF3E6",marginTop:"4em",}}>
                   <Grid item container md={6} xs={6} sm={6} style={{float:"left",alignItems:"center"}}>                   
                <Typography style={{float:"left",paddingRight:"0.5em"}}>
                  <div><span style={{fontSize:"0.8em"}}><b>Booking.com</b></span></div>
                  <div><span style={{fontSize:"0.8em"}}>
                    <CheckCircleIcon fontSize="small" style={{color: "#316300"}}/>
                    <span style={{color: "#316300",fontWeight:400}}><b>Free cancellation</b></span>
                  </span></div>
                  <div><span style={{fontSize:"0.8em",color: "#316300"}}><b>₹ 2,038</b></span>
                  </div>
                </Typography></Grid>
                <Grid item container md={6} xs={6} sm={6} style={{paddingLeft:"5em",float:"right",alignItems:"center"}}>
                   <Button variant="contained" style={{backgroundColor:"#428500",color:"white",width:"20em",height:"3em"}} endIcon={<ChevronRightIcon/>}>
                    View Deal
                  </Button>
                </Grid></Grid>
               </CardContent>
              </div>
            </Card>
       </Grid>
          
          <Grid item container className={classes.cards}>
            <Card className={classes.cardItem}>
              <CardMedia className={classes.cover}
                image={Five}
               />
               <div className={classes.details}>
               <CardContent className={classes.content}>
                 <Typography className={classes.title}>
                    <b>Dew Drops Farm Resort</b>
                 </Typography> 
                 <span style={{marginLeft:"0.5em",fontSize:"0.8em"}}>
                    Resort
                 </span>
                <div >
                 <Chip label="7.5" size="small" style={{backgroundColor:"#316300",color:"white"}}/>
                 <span  style={{fontSize:"0.8em",fontWeight:500,paddingLeft:"0.5em"}}>Good (10 reviews)</span>
                  <Typography variant="subtitle1"  style={{fontSize:"0.8em"}}>
                  Munnar, 11.8 km to City centre
                 </Typography></div>
                <Grid  container width="100%" style={{backgroundColor:"#ECF3E6",marginTop:"4em",}}>
                   <Grid item container md={6} xs={6} sm={6} style={{float:"left",alignItems:"center"}}>                   
                <Typography style={{float:"left",paddingRight:"0.5em"}}>
                  <div><span style={{fontSize:"0.8em"}}><b>Goibibo.com</b></span></div>
                  <div><span style={{fontSize:"0.8em"}}>
                    <CheckCircleIcon fontSize="small" style={{color: "#316300"}}/>
                    <span style={{color: "#316300",fontWeight:400}}><b>Free cancellation</b></span>
                  </span></div>
                  <div><span style={{fontSize:"0.8em",color: "#316300"}}><b>₹ 1,913</b></span>
                  </div>
                </Typography></Grid>
                <Grid item container md={6} xs={6} sm={6} style={{paddingLeft:"5em",float:"right",alignItems:"center"}}>
                   <Button variant="contained" style={{backgroundColor:"#428500",color:"white",width:"20em",height:"3em"}} endIcon={<ChevronRightIcon/>}>
                    View Deal
                  </Button>
                </Grid></Grid>
               </CardContent>
              </div>
            </Card>
       </Grid>
          
          <Grid item container className={classes.cards}>
            <Card className={classes.cardItem}>
              <CardMedia className={classes.cover}
                image={Six}
               />
               <div className={classes.details}>
               <CardContent className={classes.content}>
                 <Typography className={classes.title}>
                    <b>The Scena Village</b>
                 </Typography> 
                 <Rating name="read-only" value={4} readOnly size="small" max={4}/>
                 <span style={{marginLeft:"0.5em",fontSize:"0.8em"}}>
                    Hotel
                 </span>
                <div >
                 <Chip label="8.6" size="small" style={{backgroundColor:"#316300",color:"white"}}/>
                 <span  style={{fontSize:"0.8em",fontWeight:500,paddingLeft:"0.5em"}}>Excellent (607 reviews)</span>
                  <Typography variant="subtitle1"  style={{fontSize:"0.8em"}}>
                  Munnar, 10.9 km to City centre
                 </Typography></div>
                <Grid  container width="100%" style={{backgroundColor:"#ECF3E6",marginTop:"4em",}}>
                   <Grid item container md={6} xs={6} sm={6} style={{float:"left",alignItems:"center"}}>                   
                <Typography style={{float:"left",paddingRight:"0.5em"}}>
                  <div><span style={{fontSize:"0.8em"}}><b>Booking.com</b></span></div>
                  <div><span style={{fontSize:"0.8em"}}>
                    <CheckCircleIcon fontSize="small" style={{color: "#316300"}}/>
                    <span style={{color: "#316300",fontWeight:400}}><b>Free cancellation</b></span>
                  </span></div>
                  <div><span style={{fontSize:"0.8em",color: "#316300"}}><b>₹ 4,746</b></span>
                  </div>
                </Typography></Grid>
                <Grid item container md={6} xs={6} sm={6} style={{paddingLeft:"5em",float:"right",alignItems:"center"}}>
                   <Button variant="contained" style={{backgroundColor:"#428500",color:"white",width:"20em",height:"3em"}} endIcon={<ChevronRightIcon/>}>
                    View Deal
                  </Button>
                </Grid></Grid>
               </CardContent>
              </div>
            </Card>
       </Grid>
          
          <Grid item container className={classes.cards}>
            <Card className={classes.cardItem}>
              <CardMedia className={classes.cover}
                image={Seven}
               />
               <div className={classes.details}>
               <CardContent className={classes.content}>
                 <Typography className={classes.title}>
                    <b>Grand Plaza</b>
                 </Typography> 
                 <Rating name="read-only" value={3} readOnly size="small" max={3}/>
                 <span style={{marginLeft:"0.5em",fontSize:"0.8em"}}>
                    Hotel
                 </span>
                <div >
                 <Chip label="8.1" size="small" style={{backgroundColor:"#316300",color:"white"}}/>
                 <span  style={{fontSize:"0.8em",fontWeight:500,paddingLeft:"0.5em"}}>Very good (1614 reviews)</span>
                  <Typography variant="subtitle1"  style={{fontSize:"0.8em"}}>
                  Munnar, 1.7 km to City centre
                 </Typography></div>
                <Grid  container width="100%" style={{backgroundColor:"#ECF3E6",marginTop:"4em",}}>
                   <Grid item container md={6} xs={6} sm={6} style={{float:"left",alignItems:"center"}}>                   
                <Typography style={{float:"left",paddingRight:"0.5em"}}>
                  <div><span style={{fontSize:"0.8em"}}><b>Agoda</b></span></div>
                  <div><span style={{fontSize:"0.8em"}}>
                    <CheckCircleIcon fontSize="small" style={{color: "#316300"}}/>
                    <span style={{color: "#316300",fontWeight:400}}><b>Free cancellation</b></span>
                  </span></div>
                  <div><span style={{fontSize:"0.8em",color: "#316300"}}><b>₹ 2,278</b></span>
                  </div>
                </Typography></Grid>
                <Grid item container md={6} xs={6} sm={6} style={{paddingLeft:"5em",float:"right",alignItems:"center"}}>
                   <Button variant="contained" style={{backgroundColor:"#428500",color:"white",width:"20em",height:"3em"}} endIcon={<ChevronRightIcon/>}>
                    View Deal
                  </Button>
                </Grid></Grid>
               </CardContent>
              </div>
            </Card>
       </Grid>
          
          <Grid item container className={classes.cards}>
            <Card className={classes.cardItem}>
              <CardMedia className={classes.cover}
                image={Eight}
               />
               <div className={classes.details}>
               <CardContent className={classes.content}>
                 <Typography className={classes.title}>
                    <b>Sterling Munnar</b>
                 </Typography> 
                 <Rating name="read-only" value={3} readOnly size="small" max={3}/>
                 <span style={{marginLeft:"0.5em",fontSize:"0.8em"}}>
                    Hotel
                 </span>
                <div >
                 <Chip label="7.7" size="small" style={{backgroundColor:"#316300",color:"white"}}/>
                 <span  style={{fontSize:"0.8em",fontWeight:500,paddingLeft:"0.5em"}}>Good (1531 reviews)</span>
                  <Typography variant="subtitle1"  style={{fontSize:"0.8em"}}>
                  Munnar, 1.0 km to City centre
                 </Typography></div>
                <Grid  container width="100%" style={{backgroundColor:"#ECF3E6",marginTop:"4em",}}>
                   <Grid item container md={6} xs={6} sm={6} style={{float:"left",alignItems:"center"}}>                   
                <Typography style={{float:"left",paddingRight:"0.5em"}}>
                  <div><span style={{fontSize:"0.8em"}}><b>Booking.com</b></span></div>
                  <div><span style={{fontSize:"0.8em"}}>
                    <CheckCircleIcon fontSize="small" style={{color: "#316300"}}/>
                    <span style={{color: "#316300",fontWeight:400}}><b>Free cancellation</b></span>
                  </span></div>
                  <div><span style={{fontSize:"0.8em",color: "#316300"}}><b>₹ 5,369</b></span>
                  </div>
                </Typography></Grid>
                <Grid item container md={6} xs={6} sm={6} style={{paddingLeft:"5em",float:"right",alignItems:"center"}}>
                   <Button variant="contained" style={{backgroundColor:"#428500",color:"white",width:"20em",height:"3em"}} endIcon={<ChevronRightIcon/>}>
                    View Deal
                  </Button>
                </Grid></Grid>
               </CardContent>
              </div>
            </Card>
       </Grid>
          
          <Grid item container className={classes.cards}>
            <Card className={classes.cardItem}>
              <CardMedia className={classes.cover}
                image={Nine}
               />
               <div className={classes.details}>
               <CardContent className={classes.content}>
                 <Typography className={classes.title}>
                    <b>Cukemere Holidays</b>
                 </Typography> 
                 <span style={{marginLeft:"0.5em",fontSize:"0.8em"}}>
                    House / Apartment
                 </span>
                <div >
                 <Chip label="8.5" size="small" style={{backgroundColor:"#316300",color:"white"}}/>
                 <span  style={{fontSize:"0.8em",fontWeight:500,paddingLeft:"0.5em"}}>Excellent (25 reviews)</span>
                  <Typography variant="subtitle1"  style={{fontSize:"0.8em"}}>
                  Munnar, 7 km from City centre
                 </Typography></div>
                <Grid  container width="100%" style={{backgroundColor:"#ECF3E6",marginTop:"4em",}}>
                   <Grid item container md={6} xs={6} sm={6} style={{float:"left",alignItems:"center"}}>                   
                <Typography style={{float:"left",paddingRight:"0.5em"}}>
                  <div><span style={{fontSize:"0.8em"}}><b>Booking.com</b></span></div>
                  <div><span style={{fontSize:"0.8em"}}>
                    <CheckCircleIcon fontSize="small" style={{color: "#316300"}}/>
                    <span style={{color: "#316300",fontWeight:400}}><b>Free cancellation</b></span>
                  </span></div>
                  <div><span style={{fontSize:"0.8em",color: "#316300"}}><b>₹ 4,113</b></span>
                  </div>
                </Typography></Grid>
                <Grid item container md={6} xs={6} sm={6} style={{paddingLeft:"5em",float:"right",alignItems:"center"}}>
                   <Button variant="contained" style={{backgroundColor:"#428500",color:"white",width:"20em",height:"3em"}} endIcon={<ChevronRightIcon/>}>
                    View Deal
                  </Button>
                </Grid></Grid>
               </CardContent>
              </div>
            </Card>
          </Grid>
          <Grid item container className={classes.cards}>
            <Card className={classes.cardItem}>
              <CardMedia className={classes.cover}
                image={Ten}
               />
               <div className={classes.details}>
               <CardContent className={classes.content}>
                 <Typography className={classes.title}>
                    <b>Westwood Riverside Garden Resort</b>
                 </Typography> 
                 <Rating name="read-only" value={3} readOnly size="small" max={3}/>
                 <span style={{marginLeft:"0.5em",fontSize:"0.8em"}}>
                    Hotel
                 </span>
                <div >
                 <Chip label="7.5" size="small" style={{backgroundColor:"#316300",color:"white"}}/>
                 <span  style={{fontSize:"0.8em",fontWeight:500,paddingLeft:"0.5em"}}>Good (606 reviews)</span>
                  <Typography variant="subtitle1"  style={{fontSize:"0.8em"}}>
                  Munnar, 1.7 km to City centre
                 </Typography></div>
                <Grid  container width="100%" style={{backgroundColor:"#ECF3E6",marginTop:"4em",}}>
                   <Grid item container md={6} xs={6} sm={6} style={{float:"left",alignItems:"center"}}>                   
                <Typography style={{float:"left",paddingRight:"0.5em"}}>
                  <div><span style={{fontSize:"0.8em"}}><b>Agoda</b></span></div>
                  <div><span style={{fontSize:"0.8em"}}>
                    <CheckCircleIcon fontSize="small" style={{color: "#316300"}}/>
                    <span style={{color: "#316300",fontWeight:400}}><b>Free cancellation</b></span>
                  </span></div>
                  <div><span style={{fontSize:"0.8em",color: "#316300"}}><b>₹ 2,181</b></span>
                  </div>
                </Typography></Grid>
                <Grid item container md={6} xs={6} sm={6} style={{paddingLeft:"5em",float:"right",alignItems:"center"}}>
                   <Button variant="contained" style={{backgroundColor:"#428500",color:"white",width:"20em",height:"3em"}} endIcon={<ChevronRightIcon/>}>
                    View Deal
                  </Button>
                </Grid></Grid>
               </CardContent>
              </div>
            </Card>
          </Grid>
        </Grid>
        
        <Footer/>
           </div>
           );
           }
