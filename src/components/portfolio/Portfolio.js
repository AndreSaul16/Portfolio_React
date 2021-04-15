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
                                image='https://github.com/AndreSaul16/Portfolio_React/blob/2800efda8c5b52018d3110f8b06e996b80bada48/src/images/java.png' />
                        </CardActionArea>
                        <CardContent>
                            <Typography gutterBottom variant='h5' align='center' >
                                Java
                            </Typography>
                            <Typography gutterBottom variant='h6'  color='textSecondary' align='center' >
                                Cillum tempor do deserunt proident. Irure duis et sit esse labore culpa eu nostrud consectetur Lorem et enim eu.
                            </Typography>
                            <Button size='small' color='primary'>
                                Share
                                </Button>
                            <Button size='small' color='primary'>
                                Live Demo
                                </Button>
                        </CardContent>
                    </Card>
                </Grid>
                {/*Project Java 2 */}
                <Grid item xs={12} sm={8} md={6}>
                    <Card className={classes.cardContainer}>
                        <CardActionArea>
                            <CardMedia
                                component='img'
                                alt='Project Java'
                                height='140'
                                image='https://picsum.photos/200/300' />
                        </CardActionArea>
                        <CardContent>
                            <Typography gutterBottom variant='h5' align='center' >
                                JavaScript
                            </Typography>
                            <Typography gutterBottom variant='h6'  color='textSecondary' align='center' >
                                Cillum tempor do deserunt proident. Irure duis et sit esse labore culpa eu nostrud consectetur Lorem et enim eu.
                            </Typography>
                            <Button size='small' color='primary'>
                                Share
                                </Button>
                            <Button size='small' color='primary'>
                                Live Demo
                                </Button>
                        </CardContent>
                    </Card>
                </Grid>
                {/*Project Java 3 */}
                <Grid item xs={12} sm={8} md={6}>
                    <Card className={classes.cardContainer}>
                        <CardActionArea>
                            <CardMedia
                                component='img'
                                alt='Project Java'
                                height='140'
                                image='https://picsum.photos/200/300' />
                        </CardActionArea>
                        <CardContent>
                            <Typography gutterBottom variant='h5' align='center' >
                                C#
                            </Typography>
                            <Typography gutterBottom variant='h6'  color='textSecondary' align='center' >
                                Cillum tempor do deserunt proident. Irure duis et sit esse labore culpa eu nostrud consectetur Lorem et enim eu.
                            </Typography>
                            <Button size='small' color='primary'>
                                Share
                                </Button>
                            <Button size='small' color='primary'>
                                Live Demo
                                </Button>
                        </CardContent>
                    </Card>
                </Grid>
                {/*Project Java 4 */}
                <Grid item xs={12} sm={8} md={6}>
                    <Card className={classes.cardContainer}>
                        <CardActionArea>
                            <CardMedia
                                component='img'
                                alt='Project Java'
                                height='140'
                                image='https://picsum.photos/200/300' />
                        </CardActionArea>
                        <CardContent>
                            <Typography gutterBottom variant='h5' align='center' >
                                HTML / CSS
                            </Typography>
                            <Typography gutterBottom variant='h6' color='textSecondary' align='center' >
                                Cillum tempor do deserunt proident. Irure duis et sit esse labore culpa eu nostrud consectetur Lorem et enim eu.
                            </Typography>
                            <Button size='small' color='primary'>
                                Share
                                </Button>
                            <Button size='small' color='primary'>
                                Live Demo
                                </Button>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Portfolio
