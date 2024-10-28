import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {projects} from '../helpers/helper';
import { div } from 'framer-motion/client';

export default function TimelineComponent() {
    return (
        <VerticalTimeline 
        lineColor=' #454B1B'
        >
            {projects.map((project) => {
                return (
                    <VerticalTimelineElement
                    contentStyle={{background:"inherit",color:"#000000",border:"2px solid #cddc39"}}
                    contentArrowStyle={{borderRight:"10px solid #cddc39"}}
                    iconStyle={{background:"#454B1B",color:"#fff"}}
                    icon={
                        <div className='flex items-center justify-center pt-4'>
                            <img src={project.icon} alt={project.title} className="w-[70%] h-[70%] "/>
                        </div>
                    }
                  
                    >
                        <div className='flex items-center justify-center flex-col'>
                            <h3 className='text-lime-500 text-lg font-primary '>{project.title}</h3>
                            <p className='text-white text-sm font-primary'>{project.description}</p>
                        </div>
                    </VerticalTimelineElement>
                )
            })}

        </VerticalTimeline>

    )
}
