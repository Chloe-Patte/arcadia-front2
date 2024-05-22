import React, { useState, useEffect } from 'react';
import "@splidejs/splide/dist/css/splide.min.css";
import { Splide, SplideSlide } from '@splidejs/react-splide';

const SimpleSlider = () => {

    return(
        <div className='max-w-4xl mx-auto'>
            <div className="block">
                <div>
                    <Splide options={{ type: 'loop', autoplay: true }} className="">
                        <SplideSlide>
                            <img alt='slide1' src="/slide/slide1.png"/>
                        </SplideSlide>
                        <SplideSlide>
                            <img alt='slide2' src="/slide/slide2.png"/>
                        </SplideSlide>
                        <SplideSlide>
                            <img alt='slide3' src="/slide/slide3.png"/>
                        </SplideSlide>
                    </Splide>
                </div>
            </div>
        </div>
    )
}

export default SimpleSlider;