// ResponsiveImage.js
import React from 'react';

const ResponsiveImage = ({ imgSrc, altText }) => {
    return (
        <picture>
            <source
                type="image/avif"
                srcSet={`${imgSrc}.avif?width=100 100w, ${imgSrc}.avif?width=200 200w, ${imgSrc}.avif?width=400 400w, ${imgSrc}.avif?width=800 800w`} />
            <source
                type="image/webp"
                srcSet={`${imgSrc}.webp?width=100 100w, ${imgSrc}.webp?width=200 200w, ${imgSrc}.webp?width=400 400w, ${imgSrc}.webp?width=800 800w`} />
            <img
                src={`${imgSrc}.png`}
                srcSet={`${imgSrc}.png?width=100 100w, ${imgSrc}.png?width=200 200w, ${imgSrc}.png?width=400 400w, ${imgSrc}.png?width=800 800w`}
                sizes="(max-width: 800px) 100vw, 50vw"
                loading="lazy"
                decoding="async"
                alt={altText}
            />
        </picture>
    );
};

export default ResponsiveImage;
