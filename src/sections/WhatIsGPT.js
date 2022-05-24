import { Box, Container, Typography } from "@mui/material"
import { Feature } from "../components/Feature"
import theme from "../components/Theme"








export const GPT = ({id}) => {
    const ContainerStyles = {
        background: '-moz-radial-gradient(circle at 30% -100%, #042c54 25%, rgba(4, 44, 84, 1) 85%, rgba(27, 120, 222, 1) 100%)',
        background: '-webkit-radial-gradient(circle at 30% -100%, #042c54 25%, rgba(4, 44, 84, 1) 85%, rgba(27, 120, 222, 1) 100%)',
        background: '-o-radial-gradient(circle at 30% -100%, #042c54 25%, rgba(4, 44, 84, 1) 85%, rgba(27, 120, 222, 1) 100%)',
        background: '-ms-radial-gradient(circle at 30% -100%, #042c54 25%, rgba(4, 44, 84, 1) 85%, rgba(27, 120, 222, 1) 100%)',
        background: 'radial-gradient(circle at 30% -100%, #042c54 25%, rgba(4, 44, 84, 1) 85%, rgba(27, 120, 222, 1) 100%)',
        filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))',
        
        borderRadius:'2px',
        marginTop:'100px'

    }
    const typographyStyles = {
        background: 'linear-gradient(89.97deg, #AE67FA 1.84%, #F49867 102.67%)',
        WebkitBackgroundClip: 'text',
        backgroundClip: "text",
        color: 'transparent',
        fontWeight: '500'
    }
    const flexContainers = {
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
        padding: '20px',
        gap: '30px',
        [theme.breakpoints.down('md')]:{
            flexDirection:'column',
            textAlign:'left'
        }
    }
    const Bar={
        width:'38px',
        height:'3px',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        marginBottom:'.25rem',
        background:'linear-gradient(103.22deg, #AE67FA -13.86%, #F49867 99.55%)'
    }
    const align={
        [theme.breakpoints.down('md')]:{
            
            textAlign:'left'
        }
    }
    return (


        <>
             <Container sx={ContainerStyles} maxWidth={'lg'} id="main">
                <Box>
                    <Box sx={{ ...flexContainers }}>
                        <Box sx={{width:'100%'}}>

                       
                        <Box sx={{...Bar}}> 
                       <Typography
                       sx={{color:'white',width:'500%',fontWeight:'800'}}
                       gutterBottom
                       variant="h6"
                       >
                       What is GPT-3
                       </Typography>
                       </Box>
                       </Box>
                        <Typography
                        gutterBottom
                        align="left"
                        variant="body1" sx={{ color: 'white', width: '100%',fontWeight:'200'}}>
                         
                            We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by.
                        </Typography>

                    </Box>
                    <Box sx={{ ...flexContainers, }}>
                        <Typography
                            gutterBottom
                            variant="h4"
                            sx={{ ...typographyStyles, width: '100%' }}
                        >
                            The possibilities are beyond your imagination
                        </Typography>

                        <Typography
                            gutterBottom
                            align="right"
                            variant="body1" sx={{ color: 'white', width: '100%', ...typographyStyles,...align }}>
                            Explore the Library
                        </Typography>

                    </Box>
                    <Box sx={{ ...flexContainers }}>
                        <Feature title={"Chatbots"} text="We so opinion friends me message as delight. Whole front do of plate heard oh ought." />
                        <Feature title={"Knowledgebase"} text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b" />
                        <Feature title={"Education"} text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b" />
                    </Box>
                </Box>

            </Container>
        

        </>)
}