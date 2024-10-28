import React from 'react'
import { Tilt } from 'react-tilt'

export default function Sample() {
  const defaultOptions={
    reverse:false,
    max:25,
    perspective:1000,
    scale:1.1,
    speed:1000,
    transition:true,
    axis:null,
    reset:true,
    easing:"cubic-bezier(.03,.98,.52,.99)",
  }


  return (
    <>
    <h1 className='text-white mb-4'>We are going to see the Tilt component now</h1>

    <Tilt options={defaultOptions} style={{ height: 250, width: 250 }} className="bg-primary">
      <div>👽</div>
    </Tilt>
    
    </>
  )
}
