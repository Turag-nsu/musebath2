import React, { useState, useRef } from "react";
import "./MyModal.css";
import { Spinner } from "react-bootstrap";
import callMade2 from "../../../Images/call-made2.svg";
import callMade3 from "../../../Images/call-made3.svg";


const MyModal = ({ mainImageIdx, images }) => {
    const [titleImgIdx, setTitleImgIdx] = useState(mainImageIdx);
    const [showLoader, setShowLoader] = useState(false);
    const mainImageBodyRef = useRef(null);

    const modalNextClickHandler = () => {
        mainImageBodyRef.current.style.transform = 'translateX(100%)';
        mainImageBodyRef.current.style.opacity = '0';
        mainImageBodyRef.current.style.transition = 'all 1s ease-in-out';
        setTimeout(() => {
            setShowLoader(true);
        }, 1000);
        const nextImg = new Image();
        nextImg.src = images[(titleImgIdx - 1 + images.length) % images.length];
        nextImg.onload = () => {

            setTimeout(() => {
                setTitleImgIdx((titleImgIdx - 1 + images.length) % images.length);
                mainImageBodyRef.current.style.transform = 'translateX(0%)';
                mainImageBodyRef.current.style.opacity = '1';
                mainImageBodyRef.current.style.transition = 'opacity 1s ease-in-out';
                // mainImageBodyRef.current.style.transition = 'none';
                setShowLoader(false);
            }, 1000);
        };
    };

    const modalPrevClickHandler = () => {
        mainImageBodyRef.current.style.transform = 'translateX(-100%)';
        mainImageBodyRef.current.style.opacity = '0';
        mainImageBodyRef.current.style.transition = 'all 1s ease-in-out';
        setTimeout(() => {
            setShowLoader(true);
        }, 1000);
        const prevImg = new Image();
        prevImg.src = images[(titleImgIdx + 1) % images.length];
        prevImg.onload = () => {

            setTimeout(() => {
                setTitleImgIdx((titleImgIdx + 1) % images.length);
                mainImageBodyRef.current.style.transform = 'translateX(0%)';
                mainImageBodyRef.current.style.opacity = '1';
                mainImageBodyRef.current.style.transition = 'opacity 1s ease-in-out';
                // mainImageBodyRef.current.style.transition = 'none';
                setShowLoader(false);
            }, 1000);
        };
    };

    return (
        <div className="modal-area">
            {showLoader && (
                <div className="loader">
                    <Spinner animation="border" variant="light" />
                </div>
            )}
            <div
                className="main-Image"
                ref={mainImageBodyRef}
            // style={{ transition: 'transform 1s ease-in-out' }}
            >
                <img src={images[titleImgIdx]} alt="" />
            </div>
            <div className="modal-buttons">
                <div className="modal-next-btn">
                    <button onClick={modalNextClickHandler}
                        style={{ border: 'none' }}
                    >
                        <div className="testimonial-next-button">
                            <img src={callMade3} alt="" />
                        </div>
                    </button>
                </div>
                <div className="modal-prev-btn">
                    <button
                        onClick={modalPrevClickHandler}
                        style={{ border: 'none' }}
                    >
                        <div className="testimonial-prev-button" style={{ backgroundColor: '#000a1a' }}>
                            <img src={callMade2} alt="" />
                        </div>
                    </button>
                </div>
                {/* <div className="plaggging">
                    <button 
                    
                    className= "share-btn" style={{ border: 'none' }}>
                        share
                    </button>
                </div> */}
            </div>
        </div>
    );
}

export default MyModal;
