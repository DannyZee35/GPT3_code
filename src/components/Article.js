import { Card,Typography,Button,CardActionArea,CardMedia,CardContent,CardActions,Box } from "@mui/material"
import { blog1 } from "./BlogImport"





export const Article=({ImgUrl,date,title,button,height,mb})=>{
    return(
        <>
        


        <Card sx={{ maxWidth: 500,backgroundColor:'#031B34'}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height={height}
          image={ImgUrl}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="body2" sx={{color:"white"}}>
              {date}
          </Typography>
          <Typography variant="h6" gutterBottom sx={{marginBottom:mb}}>
            {title}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" sx={{color:"white",textTransform:'capitalize'}}>
          {button}
        </Button>
      </CardActions>
    </Card>
 
        </>
    )
}