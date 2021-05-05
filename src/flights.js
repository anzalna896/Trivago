import { withStyles,Grid,Box, Container, Button,IconButton,Typography,List,ListItem,Divider,ListItemText,Checkbox,Menu,MenuItem,Hidden,Dialog,Slide} from "@material-ui/core";
import React from "react";
import NavBar from './navbar.js'
import DriveEtaIcon from '@material-ui/icons/DriveEta';
import {PopupTextBox,TwoButton} from './common'
import SearchIcon from '@material-ui/icons/Search';
import EventNoteIcon from '@material-ui/icons/EventNote';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import SwapHorizIcon from '@material-ui/icons/SwapHoriz';
import Calendar from './calendar'
const styles={
    
    container:{
        minHeight:2000,
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
        searchRoot:{
            display:'flex',
            alignItems:'center',
        },
        title:{
            color:"#212A30",
            marginTop:40,
            marginBottom:20
        },
        choice:{
            marginBottom:10,
        },
        listItem:{
            padding:10,
        },
        menuTwoButton:{
            minWidth:530,
        }
};
const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up"  ref={ref} {...props} />;
  });

const SearchBar=withStyles(styles)(function(props){
    const {classes}=props;
    const [checked,setChecked]=React.useState(false);
    
    return(
        
            <Grid container spacing={2}>
                <Grid item lg={3} sm={5} xs={12}>
                    <PopupTextBox
                        icon={<DriveEtaIcon fontSize="large" style={{paddingRight:10}}/>}
                        placeholder="Kochi(COK)"
                        extra={
                            <List>
                                <ListItem button key={1} className={classes.listItem} style={{marginTop:-7}}>
                                <Checkbox
                                    checked={checked}
                                    onChange={()=>setChecked(!checked)}
                                    inputProps={{ 'aria-label': 'primary checkbox' }}
                                />
                                <ListItemText primary="Nearby Airports"/>
                                </ListItem>
                            <Divider />
                        </List>
                        }
                    >
                        <DriveEtaIcon style={{paddingRight:10}}/><b>Kochi(COK)</b>
                    </PopupTextBox>
                   
                </Grid>
                <Grid item sm={2} md={1} xs={12}>
                    <IconButton style={{width:"100%",marginTop:-15}}>
                    <SwapHorizIcon style={{fontSize:60}}/>
                    </IconButton>
                </Grid>
                   
                <Grid item lg={3} sm={5} xs={12}>
                    <PopupTextBox
                        icon={<DriveEtaIcon fontSize="large" style={{paddingRight:10}}/>}
                        placeholder="To?"
                        
                    >
                        <DriveEtaIcon style={{paddingRight:10}}/><b>To?</b>
                    </PopupTextBox>
                </Grid>
                <CalendarButton/>
                <Grid item xs={12}lg={1}>
               <Button className={classes.searchButton}
               ><SearchIcon/></Button>
           </Grid>
            </Grid>
            

    )
});
const weeks=["SUN","MON","TUE","WED","THU","FRI","SAT"];
const CalendarButton=withStyles(styles)(function(props){
    
    //const {classes}=props;

    const [anchorEl, setAnchorEl] = React.useState(null);
    let [dWidth,setdWidth]=React.useState(window.innerWidth);
    let [widthMenu,setMenuWidth]=React.useState(512);
    const [currDate,setcurrDate]=React.useState(Date.now());
    const [nextDate,setnextDate]=React.useState(Date.now());
    let tbref=React.createRef();
    React.useEffect(()=>{
        //widthMenu=
        const bound=tbref.current.getBoundingClientRect();
        widthMenu=(bound.right-bound.left);
        setMenuWidth(widthMenu);
        console.log(widthMenu);
    })

    const DateCallBack=(currDateNew,nextDateNew)=>{
        setcurrDate(currDateNew?currDateNew:currDate);
        setnextDate(nextDateNew?nextDateNew:(currDateNew?currDateNew:currDate));
    }
    
    const pdate=(date)=>{
        date=new Date(date)
        return weeks[date.getDay()]+" "+date.getDate()+"/"+(date.getMonth()+1);
    }

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    window.addEventListener("resize", ()=>{
        setdWidth(window.innerWidth);
    });
    return(
        <Grid item lg={4} xs={12} ref={tbref}>
                    <TwoButton icon2={<EventNoteIcon/>} padding={4}
                        handleClick={handleClick}
                    >   
                        <React.Fragment>
                        <Grid item>{pdate(currDate)}</Grid>
                        </React.Fragment>
                        <React.Fragment>
                        <Grid item>{pdate(nextDate)}</Grid>
                        </React.Fragment>
                        
        
            </TwoButton>
            <Hidden smDown>
            <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
            getContentAnchorEl={null}
        >
            <Box   justifyContent="center" width={widthMenu>600?widthMenu:600}>    
                <TwoButton icon2={<EventNoteIcon/>} padding={8}
                        handleClick={handleClick}
                    >   
                        <React.Fragment>
                        <Grid item>{pdate(currDate)}</Grid>
                        </React.Fragment>
                        <React.Fragment>
                        <Grid item>{pdate(nextDate)}</Grid>
                        </React.Fragment>
                        </TwoButton>
                <Box justifyContent="center" width="100%">
                    <Calendar width={250} mode="double" DateCallBack={DateCallBack}/>
                </Box>
            </Box>
            </Menu></Hidden>
            <Hidden mdUp>
                <Dialog fullScreen open={Boolean(anchorEl)} onClose={handleClose} TransitionComponent={Transition} transitionDuration={100}>
                <Box   justifyContent="center" width="100%">    
                <TwoButton icon2={<EventNoteIcon/>} padding={8}
                        handleClick={handleClick}onClick={handleClose}
                    >   
                        <React.Fragment>
                        <Grid item>{pdate(currDate)}</Grid>
                        </React.Fragment>
                        <React.Fragment>
                        <Grid item>{pdate(nextDate)}</Grid>
                        </React.Fragment>
                        </TwoButton>
                <Box justifyContent="center" width="100%">
                    <Calendar width={dWidth}  DateCallBack={DateCallBack}/>
                </Box>
            </Box>
                    </Dialog>
            </Hidden>
                </Grid>
    );
});

const Choice=withStyles(styles)(function(props){
    const {classes}=props;
    return(
        <Box className={classes.choice}>
            <Button>Return<ExpandMoreIcon/></Button>
            <Button>1 Adult<ExpandMoreIcon/></Button>
            <Button>Economy<ExpandMoreIcon/></Button>
        </Box>
    );
});

class Flight extends React.Component{
    render(){
        const {classes}=this.props;
        return(
            <React.Fragment>
                <NavBar page="flight"/>
                <Container className={classes.container}>
                    <Typography variant="h4" className={classes.title}>Search hundreds of travel sites at once.</Typography>
                    <Choice></Choice>
                    <SearchBar/>
                </Container>
            </React.Fragment>
        );
    }
}

export default withStyles(styles)(Flight);