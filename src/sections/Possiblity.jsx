import { Box, Container, Typography } from "@mui/material"
import possibilityImage from '../assets/possibility.png'
import theme from "../components/Theme"







export const Possibility = () => {

    const imgStyle = {
        maxHeight: '100%',
        maxWidth: '100%'
    }
    const typographyStyles = {
        background: 'linear-gradient(89.97deg, #AE67FA 1.84%, #F49867 102.67%)',
        WebkitBackgroundClip: 'text',
        backgroundClip: "text",
        color: 'transparent',
        fontWeight:'500'
    }
    const flexBox={
        display:'flex',
        alignItems:'end',
        justifyContent:'space-between',
        gap:'50px',
        [theme.breakpoints.down('md')]:
        {
            flexDirection:'column',
            padding:'20px',
        }
      
    }
    const ContainerStyles={
        marginTop:'100px'
    }
    return (
        <>
            <Container maxWidth={"lg"} sx={{...ContainerStyles}} className="case">
                <Box sx={{...flexBox}} >
                    <Box sx={{ width: '100%' }}>
                        <img src={possibilityImage} style={imgStyle} />


                    </Box>
                    <Box>
                        <Typography
                            variant="h6"
                            sx={{color:'#71E5FF'}}
                            gutterBottom
                        >
                            Request Early Access to Get Started
                        </Typography>

                        <Typography
                            variant="h3"
                            sx={{...typographyStyles}}
                            gutterBottom

                        >
                            The possibilities are <br /> beyond your imagination
                        </Typography>

                        <Typography
                            variant="body2"
                            sx={{color:'#81AFDD'}}
                            gutterBottom

                        >
                            Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.
                        </Typography>

                        <Typography
                            variant="h6"
                            sx={{color:'#ff8A71'}}
                            gutterBottom

                        >
                            Request Early Access to Get Started.
                        </Typography>
                    </Box>


                </Box>


            </Container>

        </>
    )
}