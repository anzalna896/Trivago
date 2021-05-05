import React, { useState } from 'react';
import {withStyles} from '@material-ui/core/styles';
import {Grid,Box,Paper, Button,Container} from '@material-ui/core';
import { ArrowBackIos,ArrowForwardIos } from '@material-ui/icons';
import {Transition} from 'react-transition-group'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
const styles={
    box:{
        display:"flex",
        width:"inherit",
        overflow:"hidden",

    },
    paper:{
        minWidth:200,
        height:300,
        backgroundColor:"blue",
        color:"white",
        fontSize:25,
        fontWeight:"bold",
        margin:10,
    },
    card:{
        fontSize:25,
        fontWeight:"bold",
    },
    carouselControl:{
        width:"100%",
        display:"flex",
        justifyContent:"center",
    }
}

const SlideElement=withStyles(styles)(React.forwardRef(function(props,ref){
    const styles={
        minWidth:props.width,
        overflow:"hidden",
        width:props.width,
        height:props.height,
        transition: "transform 300ms",
        transform:`translateX(${-props.translate}px)`,
    }
    const transition={
        entering:{transform:`translateX(${-props.translate}px)`},
        entered: {transform:`translateX(${-props.translate}px)`},
        exiting: {transform:`translateX(${-props.translate}px)`},
        exited:  {transform:`translateX(${-props.translate}px)`},
    }
    return (
       <Transition in={props.in} timeout={300}>
           {state=>(
            <Box className={props.classes.card} ref={ref} style={{...styles,...transition[state]}}>{props.children}</Box>
           )
           }
       </Transition> 
    )
}));

class Slider extends React.Component{
    constructor(props){
        super(props);
        this.state={translate:0,index:0,maxIndex:0,resize:false,update:false};
        this.containerRef=React.createRef();
        this.trans=0
        window.addEventListener("resize",this.resizeHandler);
    }
    
    componentDidMount=()=>{
        if(this.children.length>1){
            this.cWidth=this.containerRef.current.getBoundingClientRect().right-this.containerRef.current.getBoundingClientRect().left;
            this.iWidth=this.itemRefs[1].current.getBoundingClientRect().left-this.itemRefs[0].current.getBoundingClientRect().left;
            const maxindex=this.itemRefs.length-(Math.floor(this.cWidth/this.iWidth))
            this.setState({maxIndex:maxindex+1});
            //console.log("MaxIndex:",this.state.maxIndex);
            
        }
    }
    resizeHandler=()=>{
        this.setState({resize:true})
    }
    componentDidUpdate=()=>{
        const prevWidth=this.cWidth;
        this.cWidth=this.containerRef.current.getBoundingClientRect().right-this.containerRef.current.getBoundingClientRect().left;
        this.trans+=(prevWidth-this.cWidth)    
        
        if(this.state.resize==true){
            this.cWidth=this.containerRef.current.getBoundingClientRect().right-this.containerRef.current.getBoundingClientRect().left;
            const last=this.itemRefs.length*this.iWidth-this.cWidth;
            const maxindex=this.itemRefs.length-(Math.floor(this.cWidth/this.iWidth))
            console.log("transl",this.trans,this.state.translate,last);
            this.setState({maxIndex:maxindex+1,resize:false,translate:(this.state.translate+this.trans)<last?this.state.translate:last});
        }
        if(this.state.update!=this.props.update){
            this.setState({translate:0,index:0,update:this.props.update})
        }
    }
    handleLeftClick=()=>{
        if(this.children.length>1){    
            this.trans=(this.state.translate-this.iWidth)>0?(this.state.translate-this.iWidth):0;
            this.setState({translate:this.trans,index:this.state.index-1>=0?this.state.index-1:0});
        }
    }
    handleRightClick=()=>{
        if(this.children.length>1){ 
            const last=this.itemRefs.length*this.iWidth-this.cWidth;
            this.trans=(this.state.translate+this.iWidth);
            this.setState({translate:this.trans<last?this.trans:last,index:this.state.index+1<=this.state.maxIndex-1?this.state.index+1:this.state.maxIndex-1});
            //console.log("Index:",this.state.index);
        }
    }
    render(){
        this.children=React.Children.toArray(this.props.children)
        this.itemRefs=[];
        for(let child of this.children){
            this.itemRefs.push(React.createRef());
        }
        return(
            <React.Fragment>
            <Box className={this.props.classes.box} ref={this.containerRef}width={this.props.width}height={this.props.height} >
                {/**console.log("Max",this.state.maxIndex)*/}
                {this.children.map(
                    (child,i)=>React.cloneElement(child,{width:this.props.width,height:this.props.height,ref:this.itemRefs[i],translate:this.state.translate})
                )}
            </Box>
            <Container className={this.props.classes.carouselControl}>
                <Button  onClick={this.handleLeftClick} ><ArrowBackIos/></Button>
                {[...Array(this.state.maxIndex).keys()].map((e)=>(
                    <FiberManualRecordIcon fontSize={this.state.index==e?"medium":"small"} style={{marginTop:this.state.index==e?5:7}}/>
                ))}
                
                <Button  onClick={this.handleRightClick}><ArrowForwardIos/></Button>
            </Container>
           </React.Fragment>
        );
    }
}
const Carousel=withStyles(styles)(Slider);
export { Carousel,
        SlideElement,};