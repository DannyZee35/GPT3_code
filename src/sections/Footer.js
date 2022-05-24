import { Button, Container, Typography, Box, Grid } from "@mui/material"
import theme from "../components/Theme"




export const Footer = () => {

    const flexBox = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '50px',
        [theme.breakpoints.down('md')]:
        {
            padding: '0px',
            fontSize: '20px',
            gap: "10px"
        }

    }
    const typographyStyles = {
        background: 'linear-gradient(89.97deg, #AE67FA 1.84%, #F49867 102.67%)',
        WebkitBackgroundClip: 'text',
        backgroundClip: "text",
        color: 'transparent',
        fontWeight: '500',
        [theme.breakpoints.down('md')]:
        {
            fontSize: '36px',
            padding: '50px',
            textAlign: 'center',
            flexWrap: 'wrap'
        }
    }
    const buttonStyles = {
        textTransform: 'capitalize',
        color: 'white',
        borderColor: 'white',
        borderRadius: '0',
        padding: '10px',
        paddingLeft: '50px',
        paddingRight: '50px',
        [theme.breakpoints.down('md')]:
        {
            padding: '5px',
            paddingLeft: '20px',
            paddingRight: '20px',
        }

    }
    const containerStyles = {
        padding: '100px',
        [theme.breakpoints.down('md')]:
        {
            padding: '0px',
        }
    }
const gridBox={
    marginTop:'150px',
    paddingRight:'100px',
    paddingLeft:'100px',
    [theme.breakpoints.down('md')]:{
        marginTop:'100px',
        paddingRight:'30px',
        paddingLeft:'30px',
    }
}
const footerBox={
    marginTop:'100px',
    marginBottom:'-50px',
    [theme.breakpoints.down('md')]:{
        
        marginBottom:'-50px',
    }
}
const color={
    color:'white'
}
const gridMobile={
    [theme.breakpoints.down('md')]:{
        padding:'0px'
    }
}
    return (
        <>
            <Container maxWidth={'xl'}  sx={{ marginTop: '100px', background: '#031B34', ...containerStyles }}>
                <Box sx={{ ...flexBox }}>
                    <Typography align="center" variant="h2" sx={{ ...typographyStyles, paddingLeft: '250px', paddingRight: '250px' }}>
                        Do you want to step in to the future before others

                    </Typography>
                    <Button variant="outlined" size="large" sx={{ ...buttonStyles }}>
                        Request Early Access

                    </Button>
                </Box>
                <Box sx={{...gridBox}}>
                    <Grid container  spacing={3}>
                        <Grid item lg={6} md={6} sm={12}  container sx={{paddingLeft:'100px',...gridMobile}}>
                            <Grid container direction={'column'} spacing={3}>
                                <Grid item > 
                                    <Typography variant="h4" sx={{...color}}>
                                        GPT-3
                                    </Typography>
                                </Grid>
                                <Grid item >
                                    <Typography variant="body2" sx={{ ...color}}>
                                    Crechterwoord K12 182 DK Alknjkcb, <br /> All Rights Reserved                                    </Typography>
                                </Grid>

                            </Grid>

                        </Grid>
                        <Grid item lg={6} md={6} sm={12} container spacing={12}>
                            <Grid item lg={4} md={4} sm={12}>
                                <Grid container direction={'column'} spacing={3}>
                                <Grid item>
                                        <Typography variant="body1" sx={{ ...color ,fontWeight:700}}>
                                            Links
                                        </Typography>
                                    </Grid>
                                    <Grid item>
                                        <Typography variant="subtitle2" sx={{ ...color }}>
                                            Overons
                                        </Typography>
                                    </Grid>
                                    <Grid item>
                                        <Typography variant="subtitle2" sx={{ ...color }}>
                                            Social Media
                                        </Typography>
                                    </Grid>
                                    <Grid item>
                                        <Typography variant="subtitle2" sx={{ ...color}}>
                                            Counters
                                        </Typography>
                                    </Grid>
                                    <Grid item>
                                        <Typography variant="subtitle2" sx={{...color}}>
                                            Contact
                                        </Typography>
                                    </Grid>
                                    
                                </Grid>
                            </Grid>
                            <Grid item lg={4}  md={4} sm={12}>
                                
                                <Grid container direction={'column'} spacing={3}>
                                <Grid item>
                                        <Typography variant="body1" sx={{...color,fontWeight:700 }}>
                                        Company
                                        </Typography>
                                    </Grid>
                                    <Grid item>
                                        <Typography variant="subtitle2" sx={{ ...color }}>
                                        Terms & Conditions
                                        </Typography>
                                    </Grid>
                                    <Grid item>
                                        <Typography variant="subtitle2" sx={{ ...color}}>
                                        Privacy Policy
                                        </Typography>
                                    </Grid>
                                    <Grid item>
                                        <Typography variant="subtitle2" sx={{ ...color }}>
                                        Contact
                                        </Typography>
                                    </Grid>
                                   
                                </Grid>
                            </Grid>
                            <Grid item lg={4}  md={4} sm={12}>
                                <Grid container direction={'column'} spacing={3}>
                                    <Grid item>
                                        <Typography variant="body1" sx={{ ...color ,fontWeight:700}}>
                                        Get in touch
                                        </Typography>
                                    </Grid>
                                    <Grid item>
                                        <Typography variant="subtitle2" sx={{ ...color}}>
                                        Crechterwoord K12 182 DK Alknjkcb
                                        </Typography>
                                    </Grid>
                                    <Grid item>
                                        <Typography variant="subtitle2" sx={{ ...color}}>
                                        085-132567
                                        </Typography>
                                    </Grid>
                                    <Grid item>
                                        <Typography variant="subtitle2" sx={{ ...color }}>
                                        info@payme.net                                       
                                         </Typography>
                                    </Grid>
                                  
                                </Grid>
                            </Grid>
                        </Grid>

                    </Grid>
                </Box>
                <Box sx={{...footerBox,...color}}>

                    <Typography align="center" variant="h6">
                    @2021 GPT-3. All rights reserved.
                    </Typography>
                </Box>

            </Container>

        </>
    )
}