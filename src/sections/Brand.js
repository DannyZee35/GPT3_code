import { Box } from "@mui/material";
import { google, slack, atlassian, dropbox, shopify } from "../components/brandImports";
import theme from "../components/Theme";



export const Brand = () => {

    const BoxContainer={
        display:'flex',
        flexDirection:'row',
        justifyContent:'center',
        gap:'50px',
        marginTop:'200px',
        [theme.breakpoints.down('md')]:{
            flexWrap:'wrap',
            marginTop:'100px',
            gap:'50px'

        }
    }
    return (
        <>
            <Box sx={BoxContainer}>
                <Box>
                    <img src={google}/>

                </Box>
                <Box>
                <img src={slack}/>

                </Box>
                <Box>
                <img src={atlassian}/>

                </Box>
                <Box>
                <img src={dropbox}/>

                </Box>
                <Box>
                <img src={shopify}/>

                </Box>
            </Box>
        </>
    )
}