import React from 'react'
import {
    Typography,
    Avatar,
    Grid,
    Box,
    makeStyles
} from '@material-ui/core'

import avatar from '../avatar.svg'
import Typed from 'react-typed'

// CSS STYLES
const useStyles = makeStyles(theme => ({
    avatar:{
        width: theme.spacing(15),
        height: theme.spacing(15),
        margin: theme.spacing(1)
    },
    tittle: {
        color: 'tomato'
    },
    subtittle: {
        color: 'tan',
        marginBottom: '3rem'
    },
    typedConainer: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '100vw',
        textAlign: 'center',
        zIndex: 1
    }
}))

const Header = () => {
    const classes = useStyles();
    return (
        <Box className={classes.typedConainer}>
            <Grid container justify='center'>
            <Avatar className={classes.avatar} src={avatar} alt="avatar de saul" />
            </Grid>
            <Typography variant="h4" className={classes.tittle}>
            <Typed strings={["Saúl Briceño"]} />
            </Typography>
            <br/>
            <Typography variant="h4" className={classes.subtittle}>
            <Typed strings={["Front-End Developer", "Back-End Developer", "Full Stack Developer"]} 
            typeSpeed={50} backSpeed={70} loop
            />
            </Typography>
        </Box>
    )
}

export default Header
