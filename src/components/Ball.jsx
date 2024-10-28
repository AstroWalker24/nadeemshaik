import React , {Suspense} from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls,Decal, Float,useTexture,Preload } from '@react-three/drei'


function Ball(props) {
    const [decal] = useTexture([props.icon])


  return (
    <Float
    speed={1.75 }
    rotationIntensity={1}
    floatIntensity={2}
    >
        <ambientLight intensity={0.25}/>
        <directionalLight position={[0,0,0.05]}/>
        <mesh castShadow receiveShadow scale={2.5}>
            <dodecahedronGeometry  args={[1,1]}/>
            <meshStandardMaterial
            color="#AAFF00"
            polygonOffset
            polygonOffsetFactor={-5}
            flatShading
            />

            <Decal 
            position={[0,0,1]}
            rotation={[2*Math.PI,0,6.25]}
            map={decal}
            />

        </mesh>

    </Float>
  )
}


// canvas for displaying the ball
const BallCanvas=({icon})=>{
    return (
        <Canvas
        frameloop='demand'
        gl={{preserveDrawingBuffer:true}}
        >

        <Suspense 
        fallback={null}
        >
            <OrbitControls
            enableZoom={false}/>

            <Ball icon={icon}/>
        </Suspense>

        </Canvas>
    )
}

export default BallCanvas
