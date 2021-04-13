import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles, Box, Container } from '@material-ui/core';
import Navbar from '../Navbar';
import WorkIcon from '@material-ui/icons/Work';
import SchoolIcon from '@material-ui/icons/School';
import timelineElements from './TimelineElements';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../../App.css';
const Resume = () => {
    let schoolIconStyle = { background: 'tomato', color: '#233' }
    return (<>
        <Navbar/>
        <Box>
            <div className='timeLine-content'>
                <Typography variant='h1' className='tittle'>Tecnologias que manejo</Typography>
                <VerticalTimeline style={{ background: 'toamto'}} >
                    {
                        timelineElements.map(item => {
                            return <VerticalTimelineElement
                                key={item.key}
                                iconStyle={schoolIconStyle}
                                icon={<SchoolIcon />}
                                contentStyle={{ background: 'tan', padding: '2em 3em' }}
                            >
                                <Typography variant='h3' className="vertical-timeline-element-tittle" style={{ color: 'tomato', paddingTop: '0.25em' }}>
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
