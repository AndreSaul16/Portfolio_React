import React from 'react'
import { makeStyles } from '@material-ui/core';
import { Typography, Box } from '@material-ui/core';
import Navabr from '../Navbar';

const useStyle = makeStyles(theme => ({
    mainContiner: {
        background: '#233'
    },
    timeLine: {
        position: 'relative',
        padding: '1rem',
        margin: '0 auto',
        '&:before': {
            content: "''",
            position: 'absolute',
            height: '100%',
            border: '1px solid tan',
            right: '40px',
            top: 0
        },
        '&:after': {
            content: "''",
            display: 'table',
            clear: 'both',
        },
        [theme.breakpoints.up('md')]: {
            padding: '2rem',
            '&:before': {
                left: 'calc(50% -1px)',
                right: '50%'
            }
        }
    },
    timeLineItem: {
        padding: '1rem',
        borderBottom: '2px solid tan',
        position: 'relative',
        margin: '1rem 3rem 1rem 1rem',
        clear: 'both',
        '&:after': {
            content: "''",
            position: 'absolute'
        },
        '&:before': {
            content: "''",
            position: 'absolute',
            right: "-0.625rem",
            top: 'calc(50% - 5px)',
            borderStye: 'solid',
            borderColor: 'tomato tomato transparent transparent',
            borderWidth: '0.625rem',
            transform: 'rotate(45deg)'
        },
        [theme.breakpoints.up("md")]: {
            width: '44%',
            margin: '1rem',
            "&:nth-of-type(2n):after": {
                right: '100%',
                margin: "1rem",
                borderColor: "tan"
            },
            "&:nth-of-type(2n):before": {
                right: 'auto',
                left: "-0.625rem",
                borderColor: 'transparent transparent tomato tomato'
            }
        }
    },
    timeLineYear: {
        textAlign: 'center',
        maxWidth: '9.375rem',
        margin: '0 3rem 0 auto',
        fontSize: '1.8rem',
        background: 'tomato',
        color: 'white',
        lineHeight: 1,
        padding: '0.5rem 0 1rem',
        '&:before': {
            display: 'flex'
        },
        [theme.breakpoints.up("md")]: {
            textAlign: 'center',
            margin: "0 auto",
            '&:nth-of-type(2n)': {
                float: 'auto',
                margin: '0 auto'
            },
            "&:nth-of-type(2n):before": {
                display: 'flex',
            }
        }
    },
    heading: {
        color: 'tomato',
        padding: '3rem 0',
        textTransform: 'uppercase'
    },
    subHeading: {
        textAlign: 'center',
        color: 'white',
        padding: '0',
        textTransform: 'uppercase'
    }
}))




const Resume = () => {
    const classes = useStyle();


    return (
        <>
            <Navabr />
            <Box component='header' className={classes.mainContiner}>
                <Typography variant='h4' align='center' className={classes.heading}>
                    working experience
                </Typography>
                <Box component='div' className={classes.timeLine}>
                    <Typography variant='h2' className={`${classes.timeLineYear} ${classes.timeLineItem}`}>
                        2013
                </Typography>
                    <Box component='div' flexDirection="row" className={classes.timeLineItem}>
                        <Typography variant='h5' align='center' className={classes.subHeading}>
                            web desing
                </Typography>
                        <Typography variant='body1' align='center' style={{ color: "tomato" }}>
                            Company name Woorked
                </Typography>
                        <Typography variant='body1' align='center' style={{ color: "tan" }}>
                            Este es un texto de ejemplo
                </Typography>
                    </Box>




                    <Typography variant='h2' className={`${classes.timeLineYear} ${classes.timeLineItem}`}>
                        2013
                </Typography>
                    <Box component='div' className={classes.timeLineItem}>
                        <Typography variant='h5' align='center' className={classes.subHeading}>
                            web desing
                </Typography>
                        <Typography variant='body1' align='center' style={{ color: "tomato" }}>
                            Company name Woorked
                </Typography>
                        <Typography variant='body1' align='center' style={{ color: "tan" }}>
                            Este es un texto de ejemplo
                </Typography>
                    </Box>



                    <Typography variant='h2' className={`${classes.timeLineYear} ${classes.timeLineItem}`}>
                        2013
                </Typography>
                    <Box component='div' className={classes.timeLineItem}>
                        <Typography variant='h5' align='center' className={classes.subHeading}>
                            web desing
                </Typography>
                        <Typography variant='body1' align='center' style={{ color: "tomato" }}>
                            Company name Woorked
                </Typography>
                        <Typography variant='body1' align='center' style={{ color: "tan" }}>
                            Este es un texto de ejemplo
                </Typography>
                    </Box>
                </Box>
            </Box>
        </>
    )

}
export default Resume
