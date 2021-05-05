import { withStyles, Container,Typography,Paper} from "@material-ui/core";
import React from "react";
import NavBar from './navbar.js'

const styles={
    
    container:{
        maxWidth:"1020px",
    },
};
const StyledTypography=withStyles({
    root:{margin:"10px 20px",}
})(Typography);
const SubHeading=withStyles(styles)(function(props){
    const children=React.Children.toArray(props.children);
    console.log("children:",children.slice(1))
    return(
        <React.Fragment>
        <StyledTypography variant="h5" color="initial">{children[0]}</StyledTypography>
        {children.slice(1).map((child)=>(
            <StyledTypography variant="body2" color="initial">{child}</StyledTypography>
        ))}
        
        </React.Fragment>
        
    )

});
class Terms extends React.Component{
    render(){
        const {classes}=this.props;
        return(
            <React.Fragment>
                <NavBar page="flight"/>
                <Container className={classes.container}>
                    <Paper variant="outlined" square width="100%">
                        <StyledTypography variant="h4" color="initial" style={{fontWeight:900}}>Terms of Service</StyledTypography>
                        <StyledTypography variant="body2" color="initial">trivago is a hotel search and offers users information about different types of accommodation (such as hotels, holiday homes, etc.), travel areas and services associated with travel.</StyledTypography>
                        <SubHeading>
                            <React.Fragment>1. Scope of Service</React.Fragment>
                            <React.Fragment>1.1. These terms and conditions are subject to occasional changes and apply to all our services that are directly or indirectly provided (i.e. via third parties) via the internet, on mobile devices, by email or by telephone.</React.Fragment>
                            <React.Fragment>1.2. By using our website, you confirm that you have read, understood and agree to these terms and conditions, as well as the privacy policy, including the use of cookies.</React.Fragment>
                        </SubHeading>
                        <SubHeading>
                            <React.Fragment>2. Services and Contract</React.Fragment>
                            <React.Fragment>2.1. On the trivago website, you have the ability to compare third party services via the trivago system. </React.Fragment>
                            <React.Fragment>2.2. In addition, for some hotels, users have the possibility of booking the selected hotel through a direct connection to the hotel booking sites (third parties) (‘trivago Express Booking’). As a result, the booking will be made directly on the hotel booking site and not on the trivago sites. In such cases, trivago is not the travel operator or the contractual party for the user, but only an agent providing the technical connection to the hotel booking site of a third party. By making a booking on the website of the third party, users agree to be bound by the terms and conditions of that booking site. These terms and conditions can be viewed on the website of the third party. Once a booking is made on the website of a third party, a contract is concluded between the booking site and the user, and therefore no contract is concluded between the user and trivago. trivago is no contractual party to the hotel booking and all and any claims of the user under the hotel reservation are to be asserted against the third party (the booking site) and not against trivago. </React.Fragment>
                            <React.Fragment>2.3. This agreement is not affected by any other agreements between the hotel and users. </React.Fragment>
                        </SubHeading>
                        <SubHeading>
                            <React.Fragment>3. trivago Community and Member Area</React.Fragment>
                            <React.Fragment>3.1. Users have the option of joining the trivago Community (hereafter “Community”) and/ or creating a member account within the trivago Member Area. Users who register for the Community can publish self-generated content, as well as actively participate in the platform’s development via the administrative functions. Unregistered users may read the content on trivago for free. </React.Fragment>
                            <React.Fragment>3.2. Using the trivago Member Area users have the option to administer and store their searches. In order to create the account users are being asked to provide personal information. Despite from the Users name, no personal information is made visible. For further information please check our privacy policy. By deleting the account any and all of the User’s data will be permanently removed. </React.Fragment>
                            <React.Fragment>3.3. A user cannot register multiple times. The user is responsible for the accuracy and completeness of their personal information. </React.Fragment>
                            <React.Fragment>3.4. The user is responsible for the confidentiality of their user account information, in particular their password. They are also responsible for the use of their account with regard to trivago and third parties. The user should not divulge this data to the use by third parties. </React.Fragment>
                        </SubHeading>
                        <SubHeading>
                            <React.Fragment>4. Privacy, Email Advertisements</React.Fragment>
                            <React.Fragment>4.1. The protection of personal data provided by the user is of the highest priority for trivago. As such, trivago makes every effort to ensure compliance with data protection. For more information, please read our privacy policy. </React.Fragment>
                            <React.Fragment>4.2. trivago collects, processes and uses your personal data (hereafter “data”) only if we have obtained your consent or a statutory provision allows for the collection, processing or use of your data.</React.Fragment>
                            <React.Fragment>4.3. trivago will only raise, process and use data necessary for the provision of the services rendered by trivago, for the use and operation of the websites / apps and the services offered. For the use of the ‘trivago Express Booking’ facility, the user expressly agrees to the processing of his/her credit card data by trivago N.V., which may relay these to the hotel booking sites for completing the hotel reservation. </React.Fragment>
                            <React.Fragment>4.4. If the user has agreed to receive information about trivago during registration for the Community or at another time using trivago’s services, the user will receive periodic product information. The consent may be revoked at any time by written communication or by email. The consent to receive emails follows after the confirmation em</React.Fragment>
                        </SubHeading>
                        <SubHeading>
                            <React.Fragment>5. User Obligations</React.Fragment>
                            <React.Fragment>5.1. The user is responsible for the acquisition of rights to the content (text, photos, reviews, links, etc.) they upload to trivago. They ensure that they have all the rights in respect to the content they publish on the trivago platform and thereby do not violate the rights of any third parties. </React.Fragment>
                            <React.Fragment></React.Fragment>
                            <React.Fragment>5.3. The user guarantees not to use programmes or functions to generate automated page impressions or content on trivago. </React.Fragment>
                            <React.Fragment>5.3. The user guarantees not to use programmes or functions to generate automated page impressions or content on trivago. </React.Fragment>
                            
                        </SubHeading>                        
                    </Paper>
                </Container>
            </React.Fragment>
        );
    }
}

export default withStyles(styles)(Terms);