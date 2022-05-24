import { Box, Button, Container, Typography } from "@mui/material"
import theme from "./Theme"





export const CTA=()=>{
const buttonStyles={
    color:'white',
    backgroundColor:'black',
    borderRadius:'50px',
    padding:'10px 20px',
    textTransform:'capitalize'
}
const ContainerStyles={
    background:'linear-gradient(103.22deg, #AE67FA -13.86%, #F49867 99.55%)',
    marginTop:"100px",
    borderRadius:'5px',
    padding:'20px'
}
const flexBox={
    display:'flex',
    alignItems:'center',
    justifyContent:'space-between',
    [theme.breakpoints.down('md')]:{
        flexDirection:'column',
        gap:"20px",
         
        alignItems:'flex-start',
    }

}
    return(
        <>
        <Container maxWidth={'lg'} sx={{...ContainerStyles}}>
            <Box sx={{...flexBox}}>
                <Box>
                    <Typography 
                    variant="body2"
                    sx={{color:'white'}}
                    gutterBottom
                    >
                    Request Early Access to Get Started
                    </Typography>

                    <Typography
                     variant="h5"
                     sx={{color:'white'}}
                     gutterBottom
                    >
                    Register Today & start exploring the endless possibilities.
                    </Typography>

                </Box>

                <Box>
                    <Button sx={{...buttonStyles}} size="large" >
                    Get Started
                    </Button>
                </Box>
            </Box>

        </Container>
        
        </>
    )
}