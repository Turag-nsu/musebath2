import React, { useState, useEffect, useRef } from 'react';
import './ImageSlider.css';

import arrowLeft from '../../Images/Project/arrow-left.svg';
import arrowRight from '../../Images/Project/arrow-right.svg';


const ImageSlider = ({images}) => {
    const [image1, image2, image3, image4] = images.map((image) => image);
    const [selectedImage, setSelectedImage] = useState(image1);
    const [selected, setSelected] = useState(null);
    const thumbnailsContainerRef = useRef(null);
    const scrollBarThumbRef = useRef(null);
    
    const handleImageClick = (newImage, moveDirection, moveAmount) => {
        setSelected(newImage);
        const thumbnailsContainer = thumbnailsContainerRef.current;
        if (thumbnailsContainer) {
            const currentTranslateX =
                parseInt(
                    thumbnailsContainer.style.transform.replace('translateX(', '').replace('px)', '')
                ) || 0;
            const newTranslateX =
                currentTranslateX + (moveDirection === 'left' ? -moveAmount : moveAmount);
            thumbnailsContainer.style.transform = `translateX(${newTranslateX}px)`;
            setTimeout(() => {
                setSelectedImage(newImage);
                setSelected(null);
                thumbnailsContainer.appendChild(
                    thumbnailsContainer.querySelector(`[src="${newImage.img}"]`)
                );
                thumbnailsContainer.style.transform = `translateX(${currentTranslateX}px)`;
            }, 500);
        }
    };

    useEffect(() => {
        const thumbnailsContainer = thumbnailsContainerRef.current;
        const scrollBarThumb = scrollBarThumbRef.current;

        if (thumbnailsContainer && scrollBarThumb) {
            const thumbnailsWidth = Math.min(thumbnailsContainer.offsetWidth, 3000);
            const scrollBarThumbWidth = Math.min(scrollBarThumb.offsetWidth, 1080);
            // console.log(scrollBarThumbWidth);

            const scrollBarWidth = thumbnailsWidth - scrollBarThumbWidth;
            // console.log(scrollBarWidth);
            const handleThumbDrag = (event) => {
                event.preventDefault();
                const initialX = event.clientX;
                const initialThumbX = scrollBarThumb.offsetLeft;

                const handleThumbMove = (event) => {
                    event.preventDefault();
                    const currentX = event.clientX;
                    const diffX = currentX - initialX;
                    const newThumbX = Math.min(
                        Math.max(initialThumbX + diffX, 0),
                        scrollBarWidth
                    );

                    // Calculate the translateX for the thumbnailsContainer based on the newThumbX.
                    const translateX =
                        (-newThumbX / scrollBarWidth * Math.max(thumbnailsWidth - thumbnailsContainer.offsetWidth, 378) * 2);
                    // console.log("newThumbX", newThumbX);
                    // console.log("scrollBarWidth", scrollBarWidth);
                    // console.log("thumbnailsWidth", thumbnailsWidth);
                    // console.log("thumbnailsWidth - thumbnailsContainer.offsetWidth", thumbnailsWidth - thumbnailsContainer.offsetWidth);
                    // console.log("translateX", translateX);

                    thumbnailsContainer.style.transform = `translateX(${translateX}px)`;

                    scrollBarThumb.style.left = `${newThumbX}px`;
                };

                const handleThumbRelease = (event) => {
                    event.preventDefault();
                    document.removeEventListener('mousemove', handleThumbMove);
                    document.removeEventListener('mouseup', handleThumbRelease);
                };

                document.addEventListener('mousemove', handleThumbMove);
                document.addEventListener('mouseup', handleThumbRelease);
            };

            scrollBarThumb.addEventListener('mousedown', handleThumbDrag);
        }
    }, []);
    const [ofsetAmmount, setOfsetAmmount] = useState(1);
    const handleScrollClick = (direction) => {
        if (direction === 'left') setOfsetAmmount(1);
        const thumbnailsContainer = thumbnailsContainerRef.current;
        const scrollBarThumb = scrollBarThumbRef.current;
        const ofset = 30*ofsetAmmount;
        // if (direction === 'left' && ofsetAmmount === 0) return;
        if (direction === 'right' && ofsetAmmount === 3) return;
        thumbnailsContainer.style.transition = 'transform 0.5s ease-in-out';
        thumbnailsContainer.style.transform = `translateX(${direction === 'left' ? 0 : -ofset}%)`;
        scrollBarThumb.style.transition = 'transform 0.5s ease-in-out';
        scrollBarThumb.style.transform = `translateX(${direction === 'left' ? 0 : ofset*2.8}%)`;
        if (direction === 'right') setOfsetAmmount(ofsetAmmount + 1);
    };  
    return (
        <div
        
        className="image-slider-area">
            <div className="image-slider-container">
                <div className="selected-image-show-area">
                    <img
                        className={selected ? 'hide' : ''}
                        src={selectedImage.img}
                        alt=""
                    />
                </div>
                <div className="image-slider-thumbnails" ref={thumbnailsContainerRef}>
                    {/* Replace the following lines with your thumbnail elements */}
                    <img
                        onClick={() => handleImageClick(image1, 'left', image1.id * 30)}
                        src={image1.img}
                        alt=""
                        className={selectedImage === image1 ? 'selected' : selected === image1 ? 'hide' : ''}
                    />
                    <img
                        onClick={() => handleImageClick(image2, 'left', image1.id * 30)}
                        src={image2.img}
                        alt=""
                        className={selectedImage === image2 ? 'selected' : selected === image2 ? 'hide' : ''}
                    />
                    <img
                        onClick={() => handleImageClick(image3, 'left', image1.id * 30)}
                        src={image3.img}
                        alt=""
                        className={selectedImage === image3 ? 'selected' : selected === image3 ? 'hide' : ''}
                    />
                    <img
                        onClick={() => handleImageClick(image4, 'left', image1.id * 30)}
                        src={image4.img}
                        alt=""
                        className={selectedImage === image4 ? 'selected' : selected === image4 ? 'hide' : ''}
                    />
                </div>
                <div className="scrollbar-container">
                    <div className="scroll-bar">
                        <div className="scroll-bar-thumb" ref={scrollBarThumbRef}></div>
                    </div>
                    <div className="scroll-button">
                        <img
                            onClick={() => handleScrollClick("left")}
                            src={arrowLeft} alt="" />
                        <img
                            onClick={() => handleScrollClick("right")}
                            style={{ marginLeft: "1.25rem" }}
                            src={arrowRight} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ImageSlider;
