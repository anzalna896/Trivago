import { withStyles,Grid,Box, Container, Button,Typography} from "@material-ui/core";
import React from "react";
import NavBar from './navbar.js'
import DriveEtaIcon from '@material-ui/icons/DriveEta';
import {PopupTextBox,TwoButton,CarouselSelect} from './common'
import SearchIcon from '@material-ui/icons/Search';
import { Carousel } from "./carousel.js";

const styles={
    
    container:{
        
    },
    searchButton:{
        padding:15,
        width:'100%',
        backgroundColor:"#007fad",
        color:'white',
        fontSize:20,
        fontWeight:'bold',
        '&:hover':{
            backgroundColor:"#007fad",
        }},
    twobutton:{
        backgroundColor:"red",
        padding:50,
    },
    searchBar:{
        marginTop:30,
    },
    title:{
        color:"#212A30",
        marginTop:40,
        marginBottom:40
    }
};
const SearchBar=withStyles(styles)(function(props){
    const {classes}=props;
    return(
        
            <Grid container spacing={2} className={classes.searchBar}>
                {props.initpanel==true?
                (<React.Fragment>
                <Grid item lg={3} xs={12}>
                    <PopupTextBox 
                        icon={<DriveEtaIcon fontSize="large" style={{paddingRight:10}}/>}
                        placeholder="From"
                    >
                        <DriveEtaIcon style={{paddingRight:10}}/><b>From</b>
                    </PopupTextBox>
                </Grid>
                <Grid item lg={3} xs={12}>
                    <PopupTextBox
                        icon={<DriveEtaIcon fontSize="large" style={{paddingRight:10}}/>}
                        placeholder="To"
                    >
                        <DriveEtaIcon style={{paddingRight:10}}/><b>To</b>
                    </PopupTextBox>
                </Grid>
                </React.Fragment>):
                (<React.Fragment>
                    <Grid item lg={6} xs={12}>
                        <PopupTextBox
                            icon={<DriveEtaIcon fontSize="large" style={{paddingRight:10}}/>}
                            placeholder="Enter an Airport or City"
                        >
                            <DriveEtaIcon style={{paddingRight:10}}/><b>Enter an Airport or City</b>
                        </PopupTextBox>
                    </Grid>
                    </React.Fragment>)
                }
                <Grid item lg={5} xs={12} style={{display:"flex"}}>
                    <Grid container>
                        <Grid item xs={6}>
                            <TwoButton padding={4} minWidth={190} style={{order:1}}>   
                                <React.Fragment>
                                <Grid item>Wed 2/12</Grid>
                                </React.Fragment>
                                <React.Fragment>
                                <Grid item>MidDay</Grid>
                                </React.Fragment>
                            </TwoButton>
                        </Grid>
                        <Grid item xs={6}>
                            <TwoButton padding={4} minWidth={190} style={{order:1}}>   
                                <React.Fragment>
                                <Grid item>Wed 2/12</Grid>
                                </React.Fragment>
                                <React.Fragment>
                                <Grid item>MidDay</Grid>
                                </React.Fragment>
                            </TwoButton>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} lg={1}>
               <Button  className={classes.searchButton} 
               ><SearchIcon/></Button>
           </Grid>
            </Grid>
            

    )
});
class Cars extends React.Component{
    constructor(props){
        super(props);
        this.state={
            initpanel:true
        }
    }
    clickHandler=(n)=>{
        if(n==0){
            this.setState({initpanel:true})
        }
        else{
            this.setState({initpanel:false})
        }
    }
    render(){
        const {classes}=this.props;
        return(
            <React.Fragment>
                <NavBar page="cars"/>
                <Container className={classes.container}>
                    <Typography variant="h4" className={classes.title}>Search hundreds of travel sites at once.</Typography>
                    <CarouselSelect buttons={[<b>Same pick-up and drop-off</b>,<b>Different pick-up and drop-off</b>]}clickHandler={this.clickHandler}/>
                    <SearchBar initpanel={this.state.initpanel}/>
                </Container>
            </React.Fragment>
        );
    }
}

export default withStyles(styles)(Cars);