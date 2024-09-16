import React from 'react';
import {Canvas} from "@react-three/fiber"
import HackerRoom from '../Components/HackerRoom';
import CanvasLoader from '../Components/CanvasLoader';
import {Suspense } from 'react'
import { PerspectiveCamera } from '@react-three/drei';

const Hero = () => {
    return (
        <section className="min-h-screen w-full flex flex-col relative">
            <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
                <p className="sm:text-3xl text-2xl font-medium text-white text-center font-generalsans">Hi, I am Anushka <span className="waving-hand">👋</span></p>
                <p class="hero_tag text-gray_gradient text-5xl text-white text-center">Building Products & Brands</p>
            </div>

            <div className="w-full h-full absolute insert-0">
                <Canvas className="w-full h-full">
                    <Suspense fallback={<CanvasLoader />}>
                    <PerspectiveCamera makeDefault position={[0,0,30]}/>
                    <HackerRoom scale={0.05} position={[0, 0,0]} rotation={[0, -Math.PI / 2, 0]}/>
                    </Suspense>
                </Canvas>
            </div>
        </section> 
    )
}

export default Hero;