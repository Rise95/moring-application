import React from 'react'
import Lottie from 'react-lottie';
import Loading from '#/animations/loading.json'

const defaultOptions = {
    loop: true,
    autoplay: true, 
    animationData: Loading,
};

export default ({
    height,
    width
}) => {
    return (
        <Lottie 
            options={defaultOptions}
            height={height ?? 400}
            width={width ?? 400}
        />
    )
}