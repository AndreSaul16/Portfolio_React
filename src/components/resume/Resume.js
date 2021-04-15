import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles, Box, Container, Grid } from '@material-ui/core';
import Navbar from '../Navbar';
import WorkIcon from '@material-ui/icons/Work';
import SchoolIcon from '@material-ui/icons/School';
import timelineElements from './TimelineElements';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../../App.css';
import Saul from '../../Saul.png'

const useStyles = makeStyles(theme => ({
    CV: {
        textAlign: 'justify'
    }
}))


const Resume = () => {
    let schoolIconStyle = { background: '#57C4A8', color: 'white', textShadow: '1px 1px 1px #1E2328', }
    return (<>
        <Navbar />
        <Box>
            <Grid style={{ background: 'white', padding: '40px', margin: 'auto', marginTop: '30px', width: '89%', borderRadius: '20px' }}>
                <Box style={{ display: 'inline-flex', alignContent: 'center' }}>
                    <Box style={{ alignContent: 'center',padding:'30px', margin: '10px'  }}>
                        <img src={Saul} alt='saul' width='400' style={{ borderRadius: '320px' }} />
                    </Box>
                    <Grid style={{ padding: '30px' }}>
                        <Typography variant='h2' align='center' style={{color: '#57C4A8', padding:'10px'}}>
                            ¿Quien soy?
                        </Typography>
                        <Typography variant='h6' align='justify' style={{padding:'10px', margin: '10px' }}>
                            Mi nombre es Saul Briceño, programador y emprendedor digital.
                            Tengo 23 años, y en los ultimos años de mi carrera profesional he tenido la oportunidad de trabajar en distintar areas,
                            esto me ha permitido desarrollar habilidades de comuncacion, colaboracion y liderazgo. Tambien he aprendido que sin importar en que area me desempeñe,
                            la humildad, el compromiso y las ganas de seguir aprendiendo, son claves para avanzar hacia el exito.
                         </Typography>
                        <Typography variant='h6' align='justify' style={{padding:'10px', margin: '10px' }}>
                            Mi interes por el mundo digital empezo desde que era muy pequeño, pero no fue hasta hace unos años y por no fue sino hasta hace unos años, y a raíz de las necesidades actuales de transformación digital,
                            que durante el ultimo año comence, desde los cimientos, mi camino como programador. A continuacion te cuento que tecnologias manejo:
                        </Typography>
                    </Grid>
                </Box>
            </Grid>
        </Box>
        <Box>
            <div className='timeLine-content'>
                <Typography variant='h1' className='tittle' style={{ color: '#57C4A8', textShadow: '0.5px 0.5px 0.5px #1E2328' }}>Tecnologias</Typography>
                <VerticalTimeline>
                    {
                        timelineElements.map(item => {
                            return <VerticalTimelineElement
                                key={item.key}
                                iconStyle={schoolIconStyle}
                                icon={<SchoolIcon />}
                                contentStyle={{ background: 'white', padding: '2em 3em', borderRadius: '10px' }}
                            >
                                <Typography variant='h3' className="vertical-timeline-element-tittle" style={{ color: '#57C4A8', paddingTop: '0.25em', textShadow: '0.4px 0.5px 0.4px #1E2328' }}>
                                    {item.tittle}
                                </Typography>
                                <Typography variant='h6' className="vertical-timeline-element-subtittle">
                                    {item.date}
                                </Typography>
                                <Typography variant='p' className="vertical-timeline-element-subtittle">
                                    {item.description}
                                </Typography>
                            </VerticalTimelineElement>
                        })
                    }
                </VerticalTimeline>
            </div >
        </Box>
    </>
    )
}

export default Resume
