import React, { useState } from 'react';
import NavBar from './navbar.js';
import Footer from './footer.js';
import {Container,Box,Link}from '@material-ui/core/' ; 
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import { withStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import Logo from "./assets/Trivago-logo.png";
import Hidden from '@material-ui/core/Hidden';
import Grid from '@material-ui/core/Grid';
import SearchIcon from '@material-ui/icons/Search';
import {TextField,Button} from '@material-ui/core'
import GroupIcon from '@material-ui/icons/Group';
import {Carousel,SlideElement} from './carousel';
import {TwoButton,CarouselSelect} from './common';
import {KeyboardDatePicker, MuiPickersUtilsProvider} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';

import agoda from './assets/Agoda-logo-en.png';
import booking from './assets/booking.png';
import hotels from './assets/hotels.png';
import all from './assets/all.png';
import vrbo from './assets/vrbo-logo.png';
import trip from './assets/trip.com-logo.png';
import oyo from './assets/oyo.png';

const styles = (theme) => ({
    root: {
      flexGrow: 1,
    },
    paper:{
        padding:10,
        borderRadius:3,
        display:"flex",
        overflow:"hidden",
        marginBottom:"30px",
    },
    alertText:{
        fontSize:14,
        fontWeight:300,
        textAlign:"justified",
        marginRight:"3px",
    },
    textBold:{
        display:"inline",
        fontWeight:'700',
        fontSize:"inherit",
        color:"#37454d"
    },
    closeButton:{
        marginTop:"-20px",
        '&:hover':{
            backgroundColor:'inherit',
            
          }
    },
    container:{
        marginTop:"2em",
    },
    logotitle:{
        flexGrow:1,
        border:0,
        marginTop:"10px",
    },
    logoMain:{
        display:"flex",
        margin:"2em"
    },
    logo:{
        border:0,
        justifyContent:"center",
        borderRight:"1px solid #EBECED",
        paddingRight:"5px",
        marginRight:"25px",
    },
    logoprimary:{
        fontWeight:700,
        fontSize:24,
        color:"#37454d"
    },
    logosecondary:{
        fontWeight:400,
        fontSize:16,
        color:"#37454d"
    },
    infoheader:{
        marginBottom:10,
        fontWeight:"700",
        color:"#007FAD",
    },
    infobody:{
        textAlign:"justified",
        fontSize:16,
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

    content:{
        display:"flex",
        alignItems:"center",
        justifyContent:"center"

    },
    
    buttonGroupSearch:{
        height:47,
        width:'50%',
        borderRadius:0,
        fontSize:12,
    },
    searchButton:{
        width:'100%',
        backgroundColor:"#007fad",
        color:'white',
        fontSize:20,
        fontWeight:'bold',
        '&:hover':{
            backgroundColor:"#007fad",
        }
    },
    search:{
        margin:"20px 0",
        padding:"10px 0",
        backgroundColor:'#f5f5f6',
        alignItems:"center",
        justifyContent:"center"
    },
    tileContainer:{
        padding:10,

    },
    tileImage:{
        width:260,
        height:260,
    },
    tileh1:{

    },
    tileh2:{

    },
    images:{
        margin:"0 2em 0.5em 2em",
    }

});
const Alert=withStyles(styles)(function(props){
    const {classes}=props;
    const [showAlert,setShowAlert]=useState(true);
    let handleAlertClose=()=>{
        setShowAlert(false);
    }
    if(showAlert)return(
        <Hidden xsDown>
            <Paper variant="outlined" className={classes.paper}>
                <Box>
                <Typography className={classes.textBold}>Know before you go.<span className={classes.alertText}>The restrictions surrounding COVID-19 change often. Please stay informed before traveling. Stay safe. To help you further, we have put together a travel restrictions overview for each country
                </span></Typography>
                </Box>
            <IconButton onClick={handleAlertClose} className={classes.closeButton}><CloseIcon/></IconButton>
            </Paper>
        </Hidden>
    );
    else return null;
});
const SearchBar=withStyles(styles)(function(props){
    const {classes}=props;
    const [selectedDate, setSelectedDate] = React.useState(new Date());
     const handleDateChange = (date) => {
    setSelectedDate(date);
  }
        return(<Grid container spacing={1} className={classes.search}>
            <Grid item xs={12} md={4}>
            
            <TextField
            style={{width:'100%',backgroundColor:"white"}}
                name={'text'}
                variant="outlined"
                placeholder="Enter a hotel name or destination"
                InputProps={{
                    startAdornment:
                    <SearchIcon style={{opacity:0.5,marginRight:"1em"}}/>,
                    classes: { root:classes.searchBarWrapper}
                    }}
           /></Grid>
           <Grid item xs={12} sm={8} md={4} >
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
           <Grid item xs={12} sm={4} md={2}>
           <Box className={classes.buttonGrid}>
               <Button style={{width:'100%',height:47}}>
                <GroupIcon/>
               <Grid container direction="column">
                    <Grid item>1 Room</Grid>
                    <Grid item ><b>2 Guests</b></Grid>
                </Grid>
                </Button>
            </Box>
           </Grid>
           <Grid item xs={12}md={2}>
               <Button className={classes.searchButton}
               >Search</Button>
           </Grid>
           <Grid item xs={12}>
               <h4 style={{color:"#37454d",paddingLeft:"2em"}}>We compare multiple booking sites at once</h4>
           </Grid>
           
           <Grid item xs={12}>
               <img src={agoda} className={classes.images} alt="" width="10%"></img>
               <img src={booking} className={classes.images}   alt="" width="10%"></img>
               <img src={hotels} className={classes.images} alt="" width="10%"></img>
               <img src={vrbo} className={classes.images} alt="" width="5%"></img>
               <img src={all} className={classes.images} alt="" width="5%"></img>
               <img src={trip} className={classes.images} alt="" width="10%"></img>
               <img src={oyo} className={classes.images} alt="" width="5%"></img>
               +100 more
           </Grid>
        </Grid>
        )
});

const top_places=[
    {
        place:"Mumbai",
        hotels:8419,
        acost:4259,
    },
    {
        place:"Delhi",
        hotels:14286,
        acost:3425,
    },
    {
        place:"Bengaluru",
        hotels:10152,
        acost:3490,
    },
    {
        place:"Dubai",
        hotels:17370,
        acost:15253,
    },
    {
        place:"Jaipur",
        hotels:5908,
        acost:2767,
    },
    {
        place:"Paris",
        hotels:42938,
        acost:16690,
    },
];

const top_dest=[
    {
        place:"Goa",
        hotels:25604,
        acost:4489,
    },
    {
        place:"Kerala",
        hotels:26389,
        acost:3746,
    },
    {
        place:"Bengaluru",
        hotels:2854,
        acost:3012,
    },
    {
        place:"Pondicherry",
        hotels:2983,
        acost:1012,
    },
    {
        place:"Dubai",
        hotels:17383,
        acost:15348,
    },
    
];


const Title=withStyles(styles)(function(props){
    const {classes}=props;
    return(
        <Box className={classes.logoMain}>
            <Hidden smDown>
            <Box className={classes.logo}>
            <img src={Logo} alt="logo" width="180px"/>

            </Box>
            </Hidden>
            <Box className={classes.logotitle}>
                <Typography className={classes.logoprimary}>Deals from your favorite booking sites. All in one place.</Typography>
                <Typography className={classes.logosecondary}>Try searching for a city, a specific hotel, or even a landmark!</Typography>
            </Box>
        </Box>
    )
    });
const InfoTile=withStyles(styles)(function(props){
    const {classes}=props;
    return(
       
          <Grid item  >
            <Typography variant="h6" className={classes.infoheader}>{props.header}</Typography>
            <Typography variant="body1" className={classes.infobody}>{props.children}</Typography>
          </Grid>
    )
});
function Info(props){
     return (
        <React.Fragment>
        <Grid container spacing={5} style={{marginTop:100}} >
            <Grid item container style={{alignItems:"center",justifyContent:"center",textAlign:"center"}}>
                <Grid item md={5} xs={12} style={{textAlign:"justify",margin:"1em"}}>
        <InfoTile header="trivago's global hotel search" >trivago’s hotel search allows users to compare hotel prices in just a few clicks from more than 300 booking sites for 1.8 million+ hotels in over 190 countries. With 1.4 billion visits annually to our site, travellers regularly use the hotel comparison to compare deals in the same city. Get information for weekend trips to cities like Mumbai or Bengaluru and you can find the right hotel on trivago quickly and easily. Delhi and its surrounding area are great for trips that are a week or longer with the numerous hotels available.</InfoTile>
        </Grid>
        <Grid item md={5} xs={12} style={{textAlign:"justify",margin:"1em"}}>
           <InfoTile header="Find cheap hotels on trivago">With trivago you can easily find your ideal hotel and compare prices from different websites. Simply enter where you want to go and your desired travel dates, and let our hotel search engine compare accommodation prices for you. To refine your search results, simply filter by price, distance (e.g. from the beach), star category, facilities and more. From budget hostels to luxury suites, trivago makes it easy to book online. You can search from a large variety of rooms and locations across India, like Shimla and Jaipur to popular cities and holiday destinations abroad!</InfoTile>
        </Grid> </Grid>
        <Grid container spacing={5}>
            <Grid item container style={{alignItems:"center",justifyContent:"center",textAlign:"center"}}>
                <Grid item md={5} xs={12} style={{textAlign:"justify",margin:"1em"}}>
        <InfoTile header="Hotel reviews help you find your ideal hotel">Over 175 million aggregated hotel ratings and more than 19 million images allow you to find out more about where you're travelling. To get an extended overview of a hotel property, trivago shows the average rating and extensive reviews from other booking sites, e.g. Hotels.com, Expedia, Agoda, leading hotels, etc. trivago makes it easy for you to find information about your trip to Dubai, including the ideal hotel for you.</InfoTile>
        </Grid>
        <Grid item md={5} xs={12} style={{textAlign:"justify",margin:"1em"}}>
            <InfoTile header="How to book">trivago is a hotel search with an extensive price comparison. The prices shown come from numerous hotels and booking websites. This means that while users decide on trivago which hotel best suits their needs, the booking process itself is completed through the booking sites (which are linked to our website). By clicking on the “view deal” button, you will be forwarded onto a booking site where you can complete the reservation for the hotel deal found on trivago.<br/><br/>
                Let trivago help you to find the right price from over 300 booking sites!</InfoTile></Grid>
                </Grid>
        </Grid>
        </Grid></React.Fragment>
    );
    }
const PlaceList=withStyles(styles)(function(props){
    return(
        <Grid item xs={12} sm={6} spacing={5}>
            <Typography variant="h5" style={{color:"#007FAD",fontWeight:"bold",margin:"50px 0px 10px 0px",}}>{props.header}</Typography>
            <Grid container style={{maxHeight:170,height:"100px",overflow:"scroll"}}>
                {props.placeList.map((place)=>
                    <Grid item xs={6} sm={4}><Link href="#" style={{color:"#37454D",fontSize:14}}>{place}</Link></Grid>
                )}
            </Grid>
        </Grid>
    )
});

const SlideTile=withStyles(styles)(function(props){
    console.log(props.placename);
    return(
        <Container className={props.classes.tileContainer}>
            <img src={"media/"+props.placename+".jpeg"} alt="Mumbai" width={props.width} height={props.height}/>
            <Typography variant="h5">Hotels in {props.placename}</Typography>
            <Typography>{props.hotels} Hotels <b>Average &#x20B9;{props.acost}</b></Typography>
        </Container>
    )
});



class HomePage extends React.Component{
    constructor(props){
        super(props);
        this.state={
            car_list:true,
        }
    }
    handleClicker=(n)=>{
        if(n===0){
            this.setState({car_list:true});
        }
        else{
            this.setState({car_list:false});
        }
        
    }
    render(){
        console.log(this.state.car_list)
        const {classes}=this.props;
        this.elem=["Chennai","Mysore","Pune","Shimla","Manali","Udhagamandalam","Gurgaon","Agra","London","Nainital",
                   "Pattaya","Udaipur","Kolkata","Ahmedabad","Mount Abu","Kochi","Srinagar","Darjeeling",
                   "Amritsar","Coimbatore","Chandigarh","Tirupati","Jodhpur","Las Vegas","Gangtok","Kuala Lumpur",
                   "Haridwar","Noida","Indore","Panaji","Varanasi","Kovalam","Panchgani","Jaisalmer","Gulmarg",
                   "Madurai","Kathmandu","Kanyakumari","Colombo","Berlin"];

        this.place=["trivago العالم العربي","trivago Argentina","trivago Australia","trivago България","trivago België",
                    "trivago Brasil","trivago Canada","trivago Česko","trivago Chile","trivago Colombia","trivago Danmark",
                    "trivago Deutschland","trivago Ecuador","trivago Ελλάδα","trivago España","trivago France","trivago 한국",
                    "trivago Hrvatska","trivago Indonesia","trivago Ireland","trivago Italia","trivago Magyarország",
                    "trivago Malaysia","trivago México","trivago Nederland","trivago New Zealand","trivago Norge",
                    "trivago Österreich","trivago Perú","trivago Philippines","trivago Polska","trivago Portugal",
                    "trivago ประเทศไทย","trivago 日本","trivago România","trivago Россия","trivago Schweiz","trivago Singapore",
                    "trivago Slovenija","trivago Slovensko","trivago South Africa","trivago Srbija","trivago Suomi","trivago Sverige",
                    "trivago 台灣","trivago Türkiye","trivago UAE","trivago United Kingdom","trivago Uruguay","trivago USA","trivago Việt Nam",
                    "trivago 香港","trivago ישראל"];
        return(
            <div className={classes.root}>
                <NavBar page="main"/>
                <Container className={classes.container}>
                    <Alert/>
                    <Title/>
                    <SearchBar/>
                   <CarouselSelect buttons={["Top Cities","Top Destinations"]} clickHandler={this.handleClicker}>
                   <Typography style={{marginBottom:20,fontWeight:"bold",fontSize:20,color:"#007FAD"}}>These top destinations are just a click away</Typography>
                   </CarouselSelect>
                    <Carousel width={320} height={450} update={this.state.car_list}>
                        {this.state.car_list?top_places.map((x,i)=>(<SlideElement>
                            <SlideTile placename={x.place} hotels={x.hotels} acost={x.acost} width={350}height={350}/>
                        </SlideElement>)):
                        top_dest.map((x,i)=>(<SlideElement>
                            <SlideTile placename={x.place} hotels={x.hotels} acost={x.acost} width={350}height={350}/>
                        </SlideElement>))
                        }
                        
                    </Carousel>
                     <Info/>
                     <Grid container style={{alignItems:"center",justifyContent:"center",marginTop:"3em"}}>
                     <PlaceList header={"More Top Cities"} placeList={this.elem} />
                     <PlaceList header={"trivago International"} placeList={this.place} />
                     </Grid>
                    
                </Container> 
                <Footer/>
            </div>
        )
    }
}

export default withStyles(styles)(HomePage);