import React from 'react'
import { skills } from '../helpers/helper'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'

export default function SkillComponent() {
    return (
        <>
            {skills.map((skill, index) => {
                return (
                    <Tilt className="sm:w-1/3 w-full">

                        <motion.div className='w-full bg-terminal bg-opacity-5 border border-white backdrop-blur-md rounded-lg p-2'>


                            <div options={{ max: 45, scale: 1, speed: 300 }} className=' rounded-lg py-5  min-h-[280px] flex items-center justify-evenly flex-col'>

                                <img src={skill.icon} alt="React" className='h-16 w-16 object-contain' />
                                <h3 className='text-white text-xl font-primary text-center'>{skill.title}</h3>
                            </div>


                        </motion.div>
                    </Tilt>
                )
            })}
        </>
    )
}
