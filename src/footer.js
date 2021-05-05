import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
//import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
//import TextField from '@material-ui/core/TextField';
//import Button from '@material-ui/core/Button';
//import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Facebook from '@material-ui/icons/Facebook';
import Twitter from '@material-ui/icons/Twitter';
import Instagram from '@material-ui/icons/Instagram';
import YouTube from '@material-ui/icons/YouTube';
import LinkedIn from '@material-ui/icons/LinkedIn';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Validation from './Validation';
import Flag1 from './Flag1';
import './style.css';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },

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

 quote:{
      color:"white",
      fontWeight:"100",
      fontSize:"14px",
      marginTop:"1em"
  },
 quotes:{
      marginTop:"6em",
      color:"white",
      fontWeight:"100",
      fontSize:"14px"
  },
  Divider:{
    backgroundColor:'#fff',
    lineHeight:'1px',
    marginRight:'185px',
    marginLeft:'195px',
    
  },

  links:{
    color:"white",
    fontSize:"14px",
  },
   footer1: {
    padding: theme.spacing(3, 2),
    backgroundColor:'#37454d',
    paddingTop: '32px',
    paddingBottom: '32px',
    height:'auto',
    marginTop:0,
    textAlign:'center',
      
  },
   small:{
    color: '#9ba2a6',
    display: 'inline-block',
    fontSize: '12px',
    marginTop: '16px',
    textAlign: 'center',
    width: '100%',
  },
  body:{
      color:'#fff',
      alignItems:'center',
      fontSize:'30px',
      lineHeight:'8px',
      fontWeight:'fontWeightBold',
      
  },
}));

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

export default function Footer(){
const classes=useStyles();

return(
<Grid container className={classes.gridContainer}>
<Grid item container className={classes.rowContainer} style={{margin:"0 6em 0 6em",alignItems:"center",justifyContent:"center"}}>
  <Grid item md={6} xs={12} style={{alignItems:"center",justifyContent:"center"}}>
    <Typography className={classes.quote}>Want to receive exclusive hotel offers? Subscribe to our newsletter!</Typography>
  </Grid>
  <Grid item md={6} xs={12} style={{alignItems:"center",justifyContent:"center"}}>
  <Validation/>
  </Grid>
</Grid>

<Grid item container className={classes.rowContainer} style={{margin:"0 6em 0 6em"}}>
  <Grid item  md={6} xs={12} style={{alignItems:"center",justifyContent:"center"}}>
    <Typography className={classes.quotes}>trivago N.V., Kesselstraße 5 – 7, 40221 Düsseldorf, Germany</Typography>
  </Grid>
<Grid item md={6} xs={12} style={{alignItems:"center",justifyContent:"center"}}>
<Flag1/> 
</Grid>
</Grid>
<Grid item container className={classes.rowContainer}>
       <Grid item xs={12} sm={6} 
             style={{marginTop:'-50px',}}>
               <IconButton aria-label="facebook" size="small"
                  style={{
                    color:'#293339',
                    backgroundColor:'white',  
                    margin:"0.5em",           

                  }}>
              
                 <Facebook/>
                 </IconButton>
                 <IconButton aria-label="twitter" size="small"
                  style={{
                    color:'#293339',
                    backgroundColor:'white',
                     margin:"0.5em"                                 
                  }}>
                  
                         <Twitter/>
                  </IconButton>
                 <IconButton aria-label="insta" size="small"
                  style={{
                    color:'#293339',
                    backgroundColor:'white',
                     margin:"0.5em"
                  }}>
                       <Instagram/>
                 </IconButton>
                 <IconButton aria-label="ytube" size="small"
                  style={{
                    color:'#293339',
                    backgroundColor:'white',
                     margin:"0.5em"
                  }}>
                       <YouTube/>
                </IconButton>
                 <IconButton aria-label="link" size="small"
                  style={{
                    color:'#293339',
                    backgroundColor:'white',
                     margin:"0.5em"
                  }}>
                       <LinkedIn/>
                 </IconButton>
             </Grid>
</Grid>

<Grid item container style={{marginLeft:"200px",display:"flex",lineHeight:"8px",marginTop:"2em",alignItems:"center",justifyContent:"center"}}>
             <Grid item md={3} xs={12} style={{alignItems:"center",justifyContent:"center"}}>
             <List component="nav" aria-label="secondary mailbox folders" style={{alignItems:"center",justifyContent:"center"}}>
                <ListItemLink href="https://company.trivago.com/" className={classes.links}>
                     Company
               </ListItemLink>
               <ListItemLink href="https://company.trivago.com/open-positions/?gh_src=21d449cf2" className={classes.links}>
                     Jobs
               </ListItemLink>
               <ListItemLink href="https://company.trivago.com/press/" className={classes.links}>
                     Press
               </ListItemLink>
               <ListItemLink href="https://ir.trivago.com/" className={classes.links}>
                     Investor relations
               </ListItemLink>
          </List>
         </Grid>
        
         <Grid item md={3} xs={12} style={{alignItems:"center",justifyContent:"center"}}>
             <List component="nav" aria-label="secondary mailbox folders" style={{alignItems:"center",justifyContent:"center"}}>
             <ListItemLink href="https://www.trivago.com/app" className={classes.links}>
             Mobile apps - searching on the go
               </ListItemLink>
               <ListItemLink href="https://studio.trivago.com/home/getstarted?redirectFrom=%2F" className={classes.links}>
                     trivago Business Studio
               </ListItemLink>
               <ListItemLink href="https://magazine.trivago.com/" className={classes.links}>
                     trivago Magazine
               </ListItemLink>
          
          </List>
         </Grid>
         <Grid item md={3} xs={12} style={{alignItems:"center",justifyContent:"center"}}>
             <List component="nav" aria-label="secondary mailbox folders" style={{alignItems:"center",justifyContent:"center"}}>
             <ListItemLink href="https://support.trivago.com/hc/en-us" className={classes.links}>
                     Help
               </ListItemLink>
               <ListItemLink href="https://support.trivago.com/hc/en-us/sections/360000014707" className={classes.links}>
                  Learn how trivago works
               </ListItemLink>
               <ListItemLink href="https://www.trivago.com/terms-of-service" className={classes.links}>
                  Terms and conditions
               </ListItemLink>
               <ListItemLink href="https://www.trivago.com/legal-information" className={classes.links}>
                  Legel information
               </ListItemLink>
               <ListItemLink href="https://www.trivago.com/privacy-policy" className={classes.links}>
               Privacy Notice
               </ListItemLink>
               <ListItemLink href="" className={classes.links}>
               Site map
               </ListItemLink>
          </List>
         </Grid>
       </Grid>
                  <Grid item container className={classes.footer1}>
                    <Container maxWidth="sm">
          <Typography variant="body" className={classes.body}>trivago</Typography>
          <br/>
          <small className={classes.small}> Copyright 2021 trivago | All rights reserved.</small>
        </Container>
                  </Grid>
</Grid>
)
}