import { createTheme } from '@mui/material/styles';


const theme=createTheme({
    palette:{
        primary:{
            main:'#FF4820'
         },
         secondary:{
             main:'#000'
         },
          text:{
              primary:'#fff',
              secondary:'#fff',
              
          }
        
    },
    button:{
        color:'#fff'
    },
    typography:{
        fontFamily: 'Manrope, sans-serif',

    }
  })


export default theme