import React from 'react'
import { makeStyles, withStyles } from '@material-ui/styles'
import {
    textField,
    Typography,
    Button,
    Grid,
    Box, FormControl, FormHelperText, FormLabel, TextField
} from '@material-ui/core'
import SendIcon from '@material-ui/icons/Send';
import Navbar from '../Navbar';

const useStyles = makeStyles(theme => ({
    form: {
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        position: 'absolute'
    },
    button: {
        marginTop: '1rem',
        color: 'tomato',
        borderColor: 'tomato'
    }
}))

const InputField = withStyles({
    root: {
        '& label.Mui-focused': {
            color: 'tomato',
        },
        '& label': {
            color: 'tan',
        },
        '& .MuiOutlinedInput-root': {
            '& filedset': {
                borderColor: 'tan'
            },
            '&:hover fieldset': {
                borderColor: 'tan'
            },
            '&.Mui-focused fieldset': {
                borderColor: 'tan'
            }
        }
    },
})(TextField);

function Contact() {
    const classes = useStyles();
    return (<>
        <Navbar />
        <Box component='div'>
            <Grid container justify='center'>
                <Box component='form' className={classes.form}>
                    <Typography variant="h5" style={{color: 'tomato', textAlign: ' center', textTransform: 'uppercase'}}>
                        Contactame...
                    </Typography>
                    <InputField
                        fullWidth={true}
                        label='Name' variant='outlined'
                        margin='dense'
                        inputProps={{ style: { color: 'white' } }}
                        size='medium'
                    />
                    <br />
                    <InputField
                        fullWidth={true}
                        label='Email' variant='outlined'
                        margin='dense'
                        inputProps={{ style: { color: 'white' } }}
                        size='medium'
                    />
                    <br />
                    <InputField
                        fullWidth={true}
                        label='Company Name' variant='outlined'
                        margin='dense'
                        inputProps={{ style: { color: 'white' } }}
                        size='medium'
                    />
                    <br />
                    <Button variant='outlined' fullWidth={true} endIcon={<SendIcon/>}
                    className={classes.button}>
                        Send
                    </Button>
                </Box>
            </Grid>
        </Box>
    </>
    )
}

export default Contact;