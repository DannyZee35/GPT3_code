import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import people from '../assets/people.png'
import ai from '../assets/ai.png'
import theme from '../components/Theme';

export const Hero = () => {
    const typographyStyles = {
        background: 'linear-gradient(89.97deg, #AE67FA 1.84%, #F49867 102.67%)',
        WebkitBackgroundClip: 'text',
        backgroundClip: "text",
        color: 'transparent',
        fontWeight:'500'
    }
    const paraStyles = {
        color: 'white'
    }
    const TField = {
        backgroundColor: '#052d56',
        borderRadius:"5px",
        width:'300%',
        [theme.breakpoints.down('md')]:{
            width:'100%'
        }
     }
     const imgStyle={
          maxHeight:'100%',
         maxWidth:'100%',
        
     }
     const ContainerStyles={
         
         [theme.breakpoints.down('md')]:{
             flexDirection:'column',
             padding:'10px',
         }
     }
     const gapMobile={
        [theme.breakpoints.down('md')]:{
            flexDirection:'column',
            padding:'10px',
            gap:'20px'
        }
    }
     

    const forMobile={
        [theme.breakpoints.down('md')]:{
            padding:'0px'
        }
    }
    const ButtonStyles={
        [theme.breakpoints.down('md')]:{
            paddingTop:'10px',
            paddingBottom:'10px'

        }
    }
    return (
        <>
            <Container
            
             maxWidth={'xl'}
             sx={{  overflow:'hidden',display:'flex',alignItems:'center',justifyContent:'center',gap:'150px',...ContainerStyles, ...gapMobile}} >
                <Box sx={{paddingLeft:'50px',...forMobile}}>
                    <Typography
                        variant='h3'
                        gutterBottom
                        align='left'
                        sx={{ ...typographyStyles }}
                    >
                        Let`s Build Something amazing with GPT-3 Open AI
                    </Typography>
                    
                    <Typography
                        variant='body1'
                        gutterBottom
                        sx={{ ...paraStyles }}
                    >
                        Yet Bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing.
                        Indulgence way everything joy alteration boisterous the attachment. Party we years to order
                        allow asked of.
                    </Typography>


                    <Box 
                    sx={{ display: 'flex',justifyContent:'center',marginBottom:'20px',...ContainerStyles }}>
                    <TextField 
                    placeholder="Your Email Address"
                      variant="filled" 
                     size='small'
                     fullWidth
                     sx={{...TField}}
                     />


                     <Button
                     variant='contained'
                     size='small'
                     disableElevation
                     sx={{width:'100%',textTransform:'capitalize',...ButtonStyles}}
                     >
                         Get Started

                     </Button>


                    </Box>


                     <Box sx={{display:'flex',alignItems:'center',  gap:'20px',...ContainerStyles}}>
                     <img src={people} />
                     <Typography
                        variant='body2'
                        gutterBottom
                        sx={{ ...paraStyles,fontSize:'12px' }}
                    >
                       1,600 people requested access a visit in last 24 hours
                    </Typography>
                     
                     </Box>


                </Box>
                <Box sx={{width:'100%'}}>
                <img src={ai} style={imgStyle}/>
                </Box>

            </Container>

        </>
    )
}