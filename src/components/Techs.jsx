import React from 'react'
import { technologies } from '../helpers/helper'
import BallCanvas from './Ball'

export default function Techs() {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10 w-1/2'>
      {technologies.map((tech,index)=>{
        return (
            <div className='w-20 h-20' key={tech.name}>
                <BallCanvas icon={tech.icon}/>
            </div>
        )
      })}
    </div>
  )
}
