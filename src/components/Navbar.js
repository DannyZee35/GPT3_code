import { Tabs, Tab, Toolbar, Typography, Button,CssBaseline,useTheme,useMediaQuery } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import './aaa.css';
import { DrawerComponent } from './Drawer';
import { Link } from 'react-scroll/modules';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    btn: {
        color:'white',
     textTransform:'capitalize',
     fontSize:'15px',
     fontWeight:500
      
    },
  });






export const Navbar = () => {
const buttonStyles={
     color:'white',
     textTransform:'capitalize',
     fontSize:'15px',
     fontWeight:500
}
const classes = useStyles();
const theme = useTheme();
const isMobile = useMediaQuery(theme.breakpoints.down("md"));
const toolbarStyles={
    [theme.breakpoints.down('md')]:{
        padding:'10px',
        marginLeft:'10px'
    }
}
    return (
        <>
            <AppBar 
            elevation={0} 
            position="static"
            color='transparent'
              >
                 <Toolbar disableGutters sx={{ p: 3, ml: 18,...toolbarStyles  }} >
                {isMobile ? (
          <DrawerComponent />
        ) : (<>
        
       
                    <Tabs
                   >
                        <Tab label='GPT' disableRipple  sx={buttonStyles}/>
                        
                        <Tab label='Home' disableRipple  sx={buttonStyles}/>
                       <Link to='main' smooth={true} duration={1000}> 
                       <Tab label='What is GPT?'disableRipple  sx={buttonStyles}/>
                       </Link> 
                       <Link to='openAi' smooth={true} duration={1000}>
                       <Tab label='Open AI' disableRipple sx={buttonStyles}/>
                       </Link>
                       <Link to='case' smooth={true} duration={1000}>
                       <Tab label='Case Studies'disableRipple  sx={buttonStyles}/>
                       </Link>
                       <Link to='library' className='active' smooth={true} duration={1000}>
                       <Tab label='Library'disableRipple  sx={buttonStyles}/>
                       </Link>
                       
                        
                        
                        

                    </Tabs>
        
                    <Button 
                    size={'large'}
                    sx={{marginLeft:'auto',marginRight:'20px',...buttonStyles}}
                    color='success'
                    disableElevation
                    
                   >
                        Sign In
                    </Button>
                    <Button
                    
                     size={'large'}
                    sx={{marginRight:'50px', ...buttonStyles 
                }}
                    color='primary'
                    disableElevation
                    variant='contained'>
                        Sign Up
                    </Button>
                    </>
)}
                </Toolbar>

            </AppBar>
        </>
    )
}