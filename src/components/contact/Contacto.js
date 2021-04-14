import React from 'react'
import { makeStyles, withStyles } from '@material-ui/styles'
import {
    Typography,
    Button,
    Grid,
    Box, FormControl, FormHelperText, FormLabel, TextField
} from '@material-ui/core'
import SendIcon from '@material-ui/icons/Send';
import Navbar from '../Navbar';
import emailjs from 'emailjs-com';


//------------> STYLES <--------------
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


//------------> COMPONENT <--------------
function Contact() {
    const classes = useStyles();
    const [user, setUser] = React.useState({
        user_name: '',
        message: '',
        user_email: '',
        company_name: ''
    })


//------------> FUNCTION FOR SEND <-----------------------------------------
function sendEmail(e) {                                                   //-
    e.preventDefault();                                                   //-
                                                                          //-
    emailjs.send('service_o0njyq4', 'template_2rciqwi', user,'user_n3iAFY4p6zW79Y8e53HSo')        //-
      .then((result) => {                                                 //-
          console.log(result.text);                                       //-
      }, (error) => {                                                     //-
          console.log(error.text);                                        //-
      });                                                                 //-
  }                                                                       //-
//--------------------------------------------------------------------------


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
                        name='user_name'
                        margin='dense'
                        inputProps={{ style: { color: 'white' } }}
                        size='medium'
                        onChange={(event) => setUser({...user, user_name: event.target.value })}
                        required
                    />
                    <br />
                    <InputField
                        fullWidth={true}
                        label='Email' variant='outlined'
                        name='user_email'
                        margin='dense'
                        inputProps={{ style: { color: 'white' } }}
                        size='medium'
                        onChange={(event) => setUser({...user, user_email: event.target.value })}
                        required
                    />
                    <br />
                    <InputField
                        fullWidth={true}
                        label='Company Name' variant='outlined'
                        name='company_name'
                        margin='dense'
                        inputProps={{ style: { color: 'white' } }}
                        onChange={(event) => setUser({ ...user, company_name: event.target.value })}
                        size='medium'
                    />
                    <br />
                    <InputField
                        fullWidth={true}
                        label='Message' variant='outlined'
                        name='message'
                        multiline
                        margin='dense'
                        inputProps={{ style: { color: 'white' } }}
                        onChange={(event) => setUser({...user, message: event.target.value })}
                        size='medium'
                    />
                    <br/>
                    <Button variant='outlined' fullWidth={true} endIcon={<SendIcon/>}
                    className={classes.button} onClick={sendEmail}>
                        Send
                    </Button>
                </Box>
            </Grid>
        </Box>
    </>
    )
}

export default Contact;
