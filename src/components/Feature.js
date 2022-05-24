import { Box, Typography } from "@mui/material"






export const Feature = ({ title, text }) => {
    const StylesForSame = {
        color: 'white',
        textTransform: 'none'
    }
    const Bar={
        width:'38px',
        height:'3px',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        marginBottom:'.25rem',
        background:'linear-gradient(103.22deg, #AE67FA -13.86%, #F49867 99.55%)'
    }
    
    return (
        <> 

      <Box>

     <Box sx={Bar}>

     </Box>
                 <Typography
                 gutterBottom
                    sx={{...StylesForSame,width:'100%',fontWeight:'800'}}
                    variant="h6"

                >
                    {title}
                </Typography>

             
                <Typography
                gutterBottom
                    sx={{...StylesForSame, width:'100%',fontWeight:'200'}}

                    variant="body2"
                     
                >
                    {text}
                </Typography>
          </Box>
            
        </>
    )
}