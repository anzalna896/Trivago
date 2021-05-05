import React from 'react';
import { withStyles,Grid,Box, Container, Button,IconButton,Typography,List,ListItem,Divider,ListItemText,Checkbox} 
from "@material-ui/core";
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigatePrevIcon from '@material-ui/icons/NavigateBefore';
const styles={
    header:{
        fontWeight:900,
        fontSize:15,
        textAlign:'center'
    },
    week:{
        fontWeight:900,
        fontSize:15,
        textAlign:'center' 
    },
    weekClickedStart:{
        backgroundColor:"#00638D",
        borderRadius:"3px 3px",
    },
    weekClickedEnd:{
        backgroundColor:"#00638D",
        borderRadius:"3px 3px",
    },
    weekHovered:{
        backgroundColor:"#DBEEFF",
        borderRadius:3,
    }

};
const Months=["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"
];
const weeks=["SUN","MON","TUE","WED","THU","FRI","SAT"];
const CalendarHeader=withStyles(styles)(function(props){
    return(
        <Box m={1} display="flex" justifyContent="center">
        {props.children}
        </Box>
    )
})

const Calendar=withStyles(styles)(function(props){
    const{currMonth,currYear,icon1,icon2,width,classes}=props;
    const {toDate,fromDate,hoverDate,hasClicked,handleButtonClick,handleDateMouseOver}=props;
    let monthList=Array(35).fill(-1);
    console.log(hasClicked,toDate,fromDate);
    const maxDate=new Date(currYear,currMonth+1,0).getDate();
    const firstDay=new Date(currYear,currMonth,1).getDay();
    let k=1;
    for(let i=firstDay;i<maxDate+firstDay;i++){
        monthList[i]=k++;
    }
    const determine_style=(week)=>{
        let d=new Date(currYear,currMonth,week).getTime();
        const {toDate,fromDate,hoverDate,hasClicked}=props;
        if(week==-1)return null;
        if(toDate!=null){
            if(toDate==d && hasClicked>0){console.log("her1");return classes.weekClickedStart;}
            else if(fromDate!=null && fromDate==d && hasClicked==2 && d>=toDate){console.log("her2");return classes.weekClickedEnd;}
            else if(hoverDate!=null && d<=hoverDate && d>toDate &&hasClicked==1){console.log("her3");return classes.weekHovered;}
            else if(fromDate!=null && d<fromDate && d>toDate){return classes.weekHovered;}
        }
        return null;
    }
    const getColor=(week)=>{
        let d = new Date();
        d.setHours(0,0,0,0);
        let d2= new Date(currYear,currMonth,week);
        return d.getTime()>d2.getTime()?"grey":"black"
    }
    return(
            <Box mx={2}>
                <CalendarHeader>
                    <IconButton onClick={()=>props.handleIconClick(-1)} style={{visibility:icon1?"visible":"hidden"}}>
                        <NavigatePrevIcon fontSize="large"/>
                    </IconButton>
                    <Box mt={0.7} width="100%" style={{
                        textAlign:"center"
                    }}>
                        <Typography class={classes.header} >{Months[currMonth]} {currYear}</Typography>
                    </Box>
                    <IconButton onClick={()=>props.handleIconClick(1)} style={{visibility:icon2?"visible":"hidden"}}>
                        <NavigateNextIcon fontSize="large"/>
                    </IconButton>
                    <Box>
                    </Box>
            </CalendarHeader>

            <Box display="flex" py={2} justifyContent="center">
            {weeks.map((week)=>(
                <Box style={{minWidth:width/7,textAlign:"center",padding:"0px 2px"}}>
                <Typography variant="h6"className={classes.week}>{week[0]}</Typography>
                </Box>
            ))}
            
            </Box>
            {[...Array(5).keys()].map((arr,i)=>
            (<Box display="flex" justifyContent="center">
                {monthList.slice(i*7,i*7+7).map((week,i)=>(
                    <Box style={{
                        minWidth:width/7,
                        textAlign:"center",
                        color:getColor(week),
                        padding:"6px 2px",
                        cursor:"pointer",
                    }}className={determine_style(week)} onClick={()=>handleButtonClick(currYear,currMonth,week)} onMouseEnter={()=>handleDateMouseOver(currYear,currMonth,week)}>{week!=-1?week:" "}</Box>
                ))}
            </Box>))}

        </Box>
    )
})

class SingleCalendar extends React.Component{
    constructor(props){
        super(props)
        let off=props.off?props.off:0;
        const currMonth=(new Date().getMonth(Date.now())+off)%12
        const currYear=new Date().getFullYear(Date.now())+Math.floor((new Date().getMonth(Date.now())+off)/12)
        this.state={
            currMonth:currMonth,
            currYear:currYear,
            hasClicked:0,
            toDate:null,
            fromDate:null,
            hoverDate:null
        }
    }
    handleDateMouseOver=(year,month,date)=>{
        this.setState({hoverDate:new Date(year,month,date).getTime()})
    }
    handleButtonClick=(year,month,date)=>{
        let d=new Date(year,month,date).getTime();
        const {hasClicked,toDate,fromDate}=this.state;
        if(hasClicked==0){
            this.setState({hasClicked:1,toDate:d});
        }
        else if(hasClicked==1){
            this.setState({hasClicked:2,fromDate:d});
        }
        else{
            this.setState({hasClicked:1,toDate:d,fromDate:null});
        }
        
    }
    componentDidUpdate=()=>{
        const {toDate,fromDate}=this.state;
        if(this.props.DateCallBack){this.props.DateCallBack(toDate,fromDate)}
    }
    handleIconClick=(n)=>{
        let currMonth=(12+this.state.currMonth+n)%12;
        const c=Math.floor((12+this.state.currMonth+n)/12);
        let currYear=this.state.currYear;
        if(c===2)currYear=this.state.currYear+1;
        else if(c===0)currYear=this.state.currYear-1;
        this.setState({currMonth:currMonth,currYear:currYear});
        
    }
    
    render(){
        const {currMonth,currYear}=this.state;
        const {width,mode,DateCallBack}=this.props;
        const {toDate,fromDate,hoverDate,hasClicked}=this.state;
        const nextMonth=(currMonth+1)%12;
            const nextYear=currYear+Math.floor((currMonth+1)/12);
        if(mode=="double"){
            
            return (
                <Container style={{minWidth:width,padding:5}}>
                    
                        <Box display="flex" justifyContent="center" >
                            <Calendar currMonth={currMonth} currYear={currYear} icon1 width={width}handleIconClick={this.handleIconClick} hasClicked={hasClicked} toDate={toDate} fromDate={fromDate} hoverDate={hoverDate} handleButtonClick={this.handleButtonClick}handleDateMouseOver={this.handleDateMouseOver} DateCallBack={DateCallBack}/>
                            <Calendar currMonth={nextMonth} currYear={nextYear} icon2 width={width}handleIconClick={this.handleIconClick} hasClicked={hasClicked} toDate={toDate} fromDate={fromDate} hoverDate={hoverDate} handleButtonClick={this.handleButtonClick}handleDateMouseOver={this.handleDateMouseOver} DateCallBack={DateCallBack}/>
                    </Box>
                </Container>
        );}
        else return(
            <Container style={{minWidth:width,padding:5}}>
                    
                        <Box display="flex" justifyContent="center" flexDirection="column">
                            <Calendar currMonth={currMonth} currYear={currYear} icon1 icon2 width={width}handleIconClick={this.handleIconClick} hasClicked={hasClicked} toDate={toDate} fromDate={fromDate} hoverDate={hoverDate} handleButtonClick={this.handleButtonClick}handleDateMouseOver={this.handleDateMouseOver} DateCallBack={DateCallBack}/>
                            <Calendar currMonth={nextMonth} currYear={nextYear} width={width}handleIconClick={this.handleIconClick} hasClicked={hasClicked} toDate={toDate} fromDate={fromDate} hoverDate={hoverDate} handleButtonClick={this.handleButtonClick}handleDateMouseOver={this.handleDateMouseOver} DateCallBack={DateCallBack}/>
                    </Box>
                </Container>
        );
    }
}



export default withStyles(styles)(SingleCalendar);
