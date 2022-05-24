import {
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemText,
   
  } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from "react";
import Divider from '@mui/material/Divider';





export const DrawerComponent = () => {

    const [openDrawer, setOpenDrawer] = useState(false);
    const drawerWidth=360;
 

    return (
        <>
            <Drawer 
            open={openDrawer}  
            onClose={() => setOpenDrawer(false)}
             
            
            >
                <List sx={{background: 'radial-gradient(circle at 3% 25%, rgba(0, 40, 83, 1) 0%, rgba(4, 12, 24, 1) 25%)'
            ,width:drawerWidth 
            }}
                
                >
                    <ListItem  onClick={() => setOpenDrawer(false)}>
                        <ListItemText>
                            Home
                        </ListItemText>
                    </ListItem>
                     <ListItem onClick={() => setOpenDrawer(false)}>
                        <ListItemText>
                            What is GPT?
                        </ListItemText>
                    </ListItem>
                    <ListItem onClick={() => setOpenDrawer(false)}>
                        <ListItemText>
                            Open AI
                        </ListItemText>
                    </ListItem>
                    <ListItem  onClick={() => setOpenDrawer(false)}>
                        <ListItemText>
                            Case Studies
                        </ListItemText>
                    </ListItem>
                    <ListItem onClick={() => setOpenDrawer(false)}>
                        <ListItemText>
                            Library
                        </ListItemText>
                    </ListItem>
                    <ListItem onClick={() => setOpenDrawer(false)} >
                        <ListItemText>
                            Sign In
                        </ListItemText>
                    </ListItem>
                    <ListItem onClick={() => setOpenDrawer(false)}>
                        <ListItemText>
                            Sign Up
                        </ListItemText>
                    </ListItem>
                </List>
            </Drawer>
            <IconButton
            size='large'
             
            
            sx={{color:'white',}} onClick={() => setOpenDrawer(!openDrawer)}>
        <MenuIcon />
      </IconButton>
        </>
    )

}