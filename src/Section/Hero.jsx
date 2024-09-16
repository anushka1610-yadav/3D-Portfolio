import React from 'react';

const Hero = () => {
    return (
        <section className="min-h-screen w-full flex flex-col relative">
            <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
                <p className="sm:text-3xl text-2xl font-medium text-white text-center font-generalsans">Hi, I am Anushka <span className="waving-hand">👋</span></p>
                <p class="hero_tag text-gray_gradient text-5xl text-white text-center">Building Products & Brands</p>

            </div>
        </section> 
    )
}

export default Hero;