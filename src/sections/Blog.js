import { Box, Container, Grid, Typography } from "@mui/material"
import { Article } from "../components/Article";
import { blog1, blog2, blog3, blog4, blog5 } from "../components/BlogImport";



export const Blog = () => {

    const typographyStyles = {
        background: 'linear-gradient(89.97deg, #AE67FA 1.84%, #F49867 102.67%)',
        WebkitBackgroundClip: 'text',
        backgroundClip: "text",
        color: 'transparent',
        fontWeight: '500'
    }
    const ContainerStyles = {
        marginTop: '100px'
    }
    return (
        <>
            <Container maxWidth="lg" sx={{ ...ContainerStyles }} className="library">
                <Box>
                    <Typography variant="h2" sx={{ ...typographyStyles }}>
                        A lot is happening, <br /> We are blogging about it.
                    </Typography>
                </Box>
                <Box>
                </Box> 
                <Grid container direction={'row'}  spacing={2} sx={{marginTop:'100px'}}>
                    <Grid item lg={5} md={6} sm={12}>
                        <Grid container>
                            <Grid item>

                            <Article mb={"200px"} height={300} title="GPT-3 and Open  AI is the future. Let us exlore how it is?" ImgUrl={blog1} button="Read Full Article" date="Sep 26, 2021" />

                                 

                            </Grid>
                          
                        </Grid>
                    </Grid>

                    <Grid item lg={7} md={6} sm={12} >
                        <Grid container direction={"column"}  
                        justifyContent="center"
                            alignItems="center"
                             >
                            <Grid item container direction={'row'} spacing={2} columnSpacing={2}>
                                <Grid item lg={6}  >
                                <Article height={150} title="GPT-3 and Open  AI is the future. Let us exlore how it is?" ImgUrl={blog2} button="Read Full Article" date="Sep 26, 2021" />

                                </Grid>
                                <Grid item lg={6}>
                                <Article height={150} title="GPT-3 and Open  AI is the future. Let us exlore how it is?" ImgUrl={blog3} button="Read Full Article" date="Sep 26, 2021" />

                                </Grid>

                                <Grid item lg={6} >
                                <Article height={150} title="GPT-3 and Open  AI is the future. Let us exlore how it is?" ImgUrl={blog4} button="Read Full Article" date="Sep 26, 2021" />

                                </Grid>
                                <Grid item lg={6}>
                                <Article height={150} title="GPT-3 and Open  AI is the future. Let us exlore how it is?" ImgUrl={blog5} button="Read Full Article" date="Sep 26, 2021" />

                                </Grid>

                               

                                

                            </Grid>
                        </Grid>


                    </Grid>



                </Grid>

            </Container>


        </>
    )
}