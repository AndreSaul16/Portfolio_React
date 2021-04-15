import React from 'react'
import Navbar from '../Navbar'
import { makeStyles } from '@material-ui/styles'
import {
    Box,
    Grid,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Button,
    Typography,
    CardActionArea
} from '@material-ui/core'
import java from '../../images/java.png';
import csharp from '../../images/c#.png';
import javascrtipt from '../../images/javascript.png';
import htmlCss from '../../images/hmlt-css.png';


const useStyles = makeStyles({
    mainContainer: {
        height: '100%'
    },
    cardContainer: {
        maxWidth: 345,
        margin: '3rem',
        margin: '5rem auto'
    }
});

const Portfolio = () => {
    const classes = useStyles();
    return (
        <Box component="div" className={classes.mainContainer}>
            <Navbar />
            <Grid container justify='center'>
                {/*Project Java 1 */}
                <Grid item xs={12} sm={8} md={6}>
                    <Card className={classes.cardContainer}>
                        <CardActionArea >
                            <CardMedia
                                component='img'
                                alt='Project Java'
                                height='140'
                                image={java} />
                        </CardActionArea>
                        <CardContent>
                            <Typography gutterBottom variant='h5' style={{color: '#57C4A8'}} align='center' >
                                Java
                            </Typography>
                            <Typography gutterBottom variant='h6' color='textSecondary' align='center' >
                                Un tetris en java fx, con sistema de puntuacion y bloques de varios colores.
                            </Typography>
                            <Button size='small' style={{color: '#004AAD'}}>
                                COMPARTIR
                                </Button>
                            <Button size='small' style={{color: '#004AAD'}} href='/java'>
                                VER EN GITHUB
                                </Button>
                        </CardContent>
                    </Card>
                </Grid>
                {/*Project javascript 2 */}
                <Grid item xs={12} sm={8} md={6}>
                    <Card className={classes.cardContainer}>
                        <CardActionArea>
                            <CardMedia
                                component='img'
                                alt='Project Java'
                                height='140'
                                image={javascrtipt} />
                        </CardActionArea>
                        <CardContent>
                            <Typography gutterBottom variant='h5' style={{color: '#57C4A8'}} align='center' >
                                JavaScript
                            </Typography>
                            <Typography gutterBottom variant='h6' color='textSecondary' align='center' >
                                El codigo del portafolio en el que estas navegando se encuetra en este repositorio de github, utilice react, mi libreria favoria de javascript y material-ui para los estilos
                            </Typography>
                            <Button size='small' style={{color: '#004AAD'}}>
                                COMPARTIR
                                </Button>
                            <Button size='small' style={{color: '#004AAD'}} href='/javascript'>
                                VER EN GITHUB
                                </Button>
                        </CardContent>
                    </Card>
                </Grid>
                {/*Project c# 3 */}
                <Grid item xs={12} sm={8} md={6}>
                    <Card className={classes.cardContainer}>
                        <CardActionArea>
                            <CardMedia
                                component='img'
                                alt='Project Java'
                                height='140'
                                image={csharp} />
                        </CardActionArea>
                        <CardContent>
                            <Typography gutterBottom variant='h5' style={{color: '#57C4A8'}} align='center' >
                                C#
                            </Typography>
                            <Typography gutterBottom variant='h6' color='textSecondary' align='center' >
                                Una app de consola construida con .net framework, que nos permite hacer crud sobre una base de datos.
                            </Typography>
                            <Button size='small' style={{color: '#004AAD'}}>
                                COMPARTIR
                                </Button>
                            <Button size='small' style={{color: '#004AAD'}} href='/csharp'>
                                VER EN GITHUB
                                </Button>
                        </CardContent>
                    </Card>
                </Grid>
                {/*Project HTML / CSS 4 */}
                <Grid item xs={12} sm={8} md={6}>
                    <Card className={classes.cardContainer}>
                        <CardActionArea>
                            <CardMedia
                                component='img'
                                alt='Project Java'
                                height='140'
                                image={htmlCss} />
                        </CardActionArea>
                        <CardContent>
                            <Typography gutterBottom variant='h5' style={{color: '#57C4A8'}} align='center' >
                                HTML / CSS
                            </Typography>
                            <Typography gutterBottom variant='h6' color='textSecondary' align='center' >
                                Una pequeña pagina web creada solamente con html y css.
                            </Typography>
                            <Button size='small' style={{color: '#004AAD'}} color='primary'>
                                COMPARTIR
                                </Button>
                            <Button size='small' style={{color: '#004AAD'}} color='primary' href='/html-css'>
                                VER EN GITHUB
                                </Button>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Portfolio
