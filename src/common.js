import React, { useState,useEffect } from 'react';
import { Button ,Box,Grid,Container,Typography,Menu,MenuItem,TextField,Hidden,Slide,Dialog,IconButton} from "@material-ui/core";
import {withStyles} from "@material-ui/core/styles";
import EventNoteIcon from '@material-ui/icons/EventNote';
import SearchIcon from '@material-ui/icons/Search'
import CloseIcon from '@material-ui/icons/Close';
const styles={
    buttonGrid:{
        borderRadius:2,
        width:"100%",
        border:"1px groove #909090",
        height:47,
        backgroundColor:"white",
    },
    buttonGroupSearch:{
        height:47,
        width:'50%',
        borderRadius:0,
        fontSize:12,
    },
    Box:{
        width:'100%',
        minHeight:54,
        display:'flex',
        alignItems:'center',
        border:"1px solid black",
        borderRadius:2,
        backgroundColor:"white",
    },
    searchBarWrapper:{
        minWidth:512,
        padding:10,
        margin:"-8px 0",
        borderRadius:0,
    },
    searchBar:{
        padding:10,
        border:0,
        boxShadow:'none',
        borderRadius:0,
    },
    input: {
        '&::placeholder': {
            fontSize:20,
            fontWeight: 900,
        },
      },
}

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up"  ref={ref} {...props} />;
  });

  const PopUpContent=withStyles(styles)(function(props){
      return(
          <React.Fragment>
        <TextField
            style={{width:'100%',backgroundColor:"white"}}
            name={'text'}
            variant="outlined"
            placeholder={props.placeholder}
            InputLabelProps={{
                style:{
                    color:'red',
                    fontWeight:"bold",
                }
            }}
            InputProps={{
                startAdornment:
                    props.icon,
                endAdornment:
                <IconButton onClick={props.handleClose}><CloseIcon/></IconButton>,
                classes: { root:props.menu?props.classes.searchBarWrapper:props.classes.searchBar,input:props.classes.input},
                style:{minWidth:props.minWidth}
                }}
    />
            {props.extra}
        </React.Fragment>
      )
  })

  const PopupTextBox=withStyles(styles)(function(props){
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [open,setOpen]=useState(false)
    const [minWidth,setmin]=useState(512);

    const popRef=React.createRef();

    
    
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
        setOpen(true);
    };

    const handleClose = () => {
        setAnchorEl(null);
        setOpen(false);
    };
    useEffect(()=>{
       setmin(512>popRef.current.clientWidth?512:popRef.current.clientWidth);
        console.log(minWidth)
    })
    return(
        <React.Fragment>
                <Grid aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} className={props.classes.Box} ref={popRef}>{props.children}</Grid>
                <Hidden smDown>
                    <Menu
                        id="simple-menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                    >
                    
                    <PopUpContent menu={true} minWidth={minWidth} handleClose={handleClose} icon={props.icon} placeholder={props.placeholder} extra={props.extra}/>
                </Menu>
            </Hidden>
            <Hidden mdUp>
                <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition} transitionDuration={100}>
                <PopUpContent menu={false} minWidth={minWidth} handleClose={handleClose} icon={props.icon} placeholder={props.placeholder} extra={props.extra}/>
                    </Dialog>
            </Hidden>
        </React.Fragment>
    )
})
const TwoButton= withStyles(styles)(function(props){
    const children=React.Children.toArray(props.children);
    const {classes}=props;
    return(
            <Box className={classes.buttonGrid} style={{padding:props.padding,}}>
           <Button style={{borderRight:"1px solid #C0C0C0"}}className={classes.buttonGroupSearch} 
           onClick={props.handleClick}
           aria-controls="simple-menu" aria-haspopup="true">
               <Grid container direction="column">
                {children[0]}
            </Grid>
           </Button>
           <Button className={classes.buttonGroupSearch} 
           onClick={props.onClick}
           aria-controls="simple-menu2" aria-haspopup="true">
               {props.icon2}
           <Grid container direction="column">
                {children[1]}
            </Grid>
            </Button>
            
           </Box>
)
});

const CarouselSelect=withStyles(styles)(function(props){
    let styleChosen={
        borderBottom:"2px solid black",
        borderRadius:0,
    }
    let styleNormal={
        borderRadius:0,
        borderBottom:"2px solid white",
        paddingBottom:4,
    }
    const [panel,setPanel]=useState(0);
    let handleClick=(n)=>{
        setPanel(!panel);
        if(props.clickHandler)props.clickHandler(n);
    }
    return(
        <Container style={{borderBottom:"1px groove black",marginTop:props.margin,}}>
            {props.children}
            <div style={{marginLeft:-23}}>
            {props.buttons.map((btn,n)=>
                (<Button onClick={()=>handleClick(n)} style={panel===n?styleChosen:styleNormal}><Typography>{btn}</Typography></Button>)
            )}
            </div>
        </Container>
    )
})

export {PopupTextBox,TwoButton,CarouselSelect,};