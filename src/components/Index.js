import React from 'react'
import Header from './Header'
import Navbar from './Navbar'
import Particles from 'react-particles-js'
import { makeStyles } from '@material-ui/core'
const useStyles = makeStyles({
    particlesCanva: {
        position: 'absolute',
        opacity: '0.2'
    }
})
const Home = () => {
    const classes = useStyles();
    return (
        <>
            <Navbar />
            <Header />
            <Particles canvasClassName={classes.particlesCanva}
                params={{
                    particles: {
                        number: {
                            value: 65,
                            density: {
                                enable: true,
                                value_area: 900
                            }
                        },
                        shape: {
                            type: 'circle',
                            strole: {
                                width: 1,
                                color: 'tomato'
                            }
                        },
                        size:{
                            value: 8,
                            random: true,
                            anum: {
                                enable: true,
                                speed: 6,
                                size_min: 0.1,
                                sync: false
                            }
                        },
                        opacity: {
                            value: 1,
                            ramdom: true,
                            anum: {
                                enable: true,
                                speed: 7,
                                opacity_min: 0.1,
                                sync: true
                            }
                        }
                    }
                }} />

        </>
    )
}
export default Home;