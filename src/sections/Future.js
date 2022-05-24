import { Container, Grid, Typography } from "@mui/material"
import { Feature } from '../components/Feature'
import { Paras } from "../components/Paras"
import theme from "../components/Theme"






export const Future = () => {
    const typographyStyles = {
        background: 'linear-gradient(89.97deg, #AE67FA 1.84%, #F49867 102.67%)',
        WebkitBackgroundClip: 'text',
        backgroundClip: "text",
        color: 'transparent',
        fontWeight: '500'
    }
    const ContainerStyles = {
        marginTop: '200px',
        [theme.breakpoints.down('md')]:{
            padding:'30px',
            

        }
    }
    return (
        <>
            <Container maxWidth={'lg'} disableGutters sx={ContainerStyles} className={"openAi"}>
                <Grid container direction={'row'} spacing={12} >
                    <Grid item lg={5} md={6} sm={12} >
                        <Grid container spacing={12}>
                            <Grid item>


                                <Typography variant="h4"
                                    sx={{ ...typographyStyles }}
                                >
                                    The Future is Now and You Just Need To Realize It. Step into Future Today Make it Happen.
                                </Typography>

                            </Grid>
                            <Grid item>
                                <Typography variant="body1"
                                    sx={{ ...typographyStyles }}>
                                    Request Early Access to Get Started
                                </Typography>

                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid item lg={7} md={6} sm={12}>
                        <Grid container direction={"column"}  
                        justifyContent="center"
                            alignItems="center" >
                            <Grid item container direction={'row'} spacing={3} columnSpacing={12}>
                                <Grid item lg={6}  sx={{paddingRight:'50px'}}>
                                    <Feature title={"Improving end distrusts instantly"} />

                                </Grid>
                                <Grid item lg={6}>
                                    <Paras text={"From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded"} />

                                </Grid>

                                <Grid item lg={6} sx={{paddingRight:'50px'}}>
                                    <Feature title={"Become the tended active"} />

                                </Grid>
                                <Grid item lg={6}>
                                    <Paras text={"Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to."} />

                                </Grid>

                                <Grid item lg={6} sx={{paddingRight:'50px'}}>
                                    <Feature title={"Message or am nothing"} />

                                </Grid>
                                <Grid item lg={6}>
                                    <Paras text={"Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address."} />

                                </Grid>

                                <Grid item lg={6} sx={{paddingRight:'50px'}}>
                                    <Feature title={"Really boy law county"} />

                                </Grid>
                                <Grid item lg={6}>
                                    <Paras text={"Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush."} />

                                </Grid>

                            </Grid>
                        </Grid>


                    </Grid>



                </Grid>


            </Container>
        </>
    )
}







