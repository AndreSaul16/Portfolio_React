import React, {useState} from 'react'
import MobilRightMenuSlider from '@material-ui/core/Drawer'
import {Link} from 'react-router-dom'
import {
    AppBar,
    Toolbar,
    ListItem,
    IconButton,
    ListItemIcon,
    Avatar,
    Divider,
    List,
    Typography,
    Box,
    ListItemText,
    makeStyles
} from '@material-ui/core'
import {
    AssignmentInd,
    Home,
    Apps,
    ContactMail
} from '@material-ui/icons'
import MenuIcon from '@material-ui/icons/Menu';
import avatar from '../avatar.svg'
import Footer from './Footer'


//CSS STYLES
const useStyles = makeStyles(theme => ({
    menuSliderContainer: {
        width: 250,
        background: '#511',
        height: '100%'
    },
    avatar: {
        display: 'block',
        margin: '0.5rem auto',
        width: theme.spacing(13),
        height: theme.spacing(13)
    },
    listItem: {
        color: 'tan'
    }
}));

const menuItems = [
    {
        listIcon: <Home />,
        listText: 'Inicio',
        listPath: '/'
     },
    {
        listIcon: <AssignmentInd />,
        listText: 'Resumen',
        listPath: '/resume'
    },
    {
        listIcon: <Apps />,
        listText: 'Portafolio',
        listPath: '/portafolio'
    },
    {
        listIcon: <ContactMail />,
        listText: 'Contacto',
        listPath: '/contacto'
    }
]


const Navbar = () => {
    const [state, setState] =  useState({
        right: false
    })
    const toggleSlider = ((slider, open) => () => {
        setState({...state, [slider]: open})
    });
    const classes = useStyles();

    const sideList = slider => (
        <Box component="div" onClick={toggleSlider(slider, false)} className={classes.menuSliderContainer}>
            <Avatar src={avatar} alt="avatar de saul" className={classes.avatar} />
            <Divider />
            <List>
                {menuItems.map((lsItem, key) => (
                    <ListItem button keu={key} component={Link} to={lsItem.listPath}>
                        <ListItemIcon className={classes.listItem}>{lsItem.listIcon}</ListItemIcon>
                        <ListItemText className={classes.listItem} primary={lsItem.listText} />
                    </ListItem>
                ))}
            </List>
        </Box>
    )

    return (
        <>
            <Box component="nav">
                <AppBar position='static' style={{ background: '#222' }}>
                    <Toolbar>
                        <IconButton onClick={toggleSlider('right', true)}>
                            <MenuIcon style={{ color: 'tomato' }} />
                        </IconButton>
                        <Typography variant="h5" style={{ color: 'tan' }}>
                            Portafolio
                    </Typography>
                    <MobilRightMenuSlider open={state.right} anchor='left' onClose={toggleSlider('right', false)}>
                        {sideList('right')}
                         <Footer/>
                    </MobilRightMenuSlider>
                    </Toolbar>
                </AppBar>
            </Box>
        </>
    )
}

export default Navbar;
