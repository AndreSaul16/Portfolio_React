import React from 'react'
import { makeStyles } from '@material-ui/styles'
import {
    BottomNavigation, BottomNavigationAction, Button, Link
} from '@material-ui/core';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import { Redirect } from 'react-router';

const useStyles = makeStyles({
    root: {
        '& .MuiBottomNavigationAction-root': {
            minWidth: 0,
            maxWidth: 250
        },
        '& .MuiSvgIcon-root': {
            fill: 'tan',
            '&:hover': {
                fill: 'tomato',
                fontSize: '1.8rem'
            }
        }
    }
})

const Footer = (props) => {
    const classes = useStyles()

    return (
        <BottomNavigation width='auto' style={{ background: '#222' }}>
            <BottomNavigationAction
                className={classes.root}
                style={{ padding: 0 }}
                icon={<LinkedInIcon/>}
                href='/linkedin'
            />
            <BottomNavigationAction
                className={classes.root}
                style={{ padding: 0 }}
                icon={<GitHubIcon/>}
                href='/github'
            />
        </BottomNavigation>
    )
}



export default Footer
