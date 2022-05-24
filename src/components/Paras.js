import { Typography } from "@mui/material"







export const Paras=({text})=>{

    return(
        <>
         <Typography
                gutterBottom
                sx={{color:'white',fontWeight:'200'}}
                     

                    variant="body2"
                     
                >
                    {text}
                </Typography>
        </>
    )
}