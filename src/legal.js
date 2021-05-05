import { withStyles, Container,Typography,Paper,Link} from "@material-ui/core";
import React from "react";
import NavBar from './navbar.js'
const styles={
    
    container:{
        maxWidth:"817px",
        
    },
    paper:{
        padding:10,
        boxShadow:"0 1px 4px rgba(41,51,57,.5)",
        marginTop:65,
    }
};
class Legal extends React.Component{
    render(){
        return(
            <React.Fragment>
                <NavBar/>
                 <Container className={this.props.classes.container}>   
                    <Paper variant="outlined" className={this.props.classes.paper}square>
                    <Typography variant="h4" style={{fontWeight:900,marginBottom:10}}>Legal Information</Typography>
                    <Typography variant="body1" style={{fontWeight:900}}>trivago N.V.</Typography>
                    <Typography variant="body2">
                    Kesselstraße 5 - 7 <br/>
                    40221 Düsseldorf <br/>
                    Germany <br/>
                    <br/>
                    Registration office: Dutch Chamber of Commerce<br/>
                    Registration number: 67222927<br/>
                    <br/>
                    VAT I.D.: In accordance with § 27 a UStG: DE 815 658 189<br/>
                    <br/>
                    E-Mail: <Link to="info@trivago.com">info@trivago.com</Link><br/>
                    Websites: <Link>trivago| Corporate website</Link>
                    </Typography>
                    </Paper>
                </Container>
            </React.Fragment>
        );
    }

}
export default withStyles(styles)(Legal);