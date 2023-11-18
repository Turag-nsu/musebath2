import React from "react";
import "./MyModal.css";
import { useState } from "react";
import callMade2 from "../../../Images/call-made2.svg";
import callMade3 from "../../../Images/call-made3.svg"
// import { set } from "mongoose";
const MyModal = ({ mainImageIdx, images }) => {
    // const [viewModal, setViewModal] = useState(true);
    const [titleImgIdx, setTitleImgIdx] = useState(mainImageIdx);
    const modalNextClickHandler = () => {
        // setTitleImgIdx((titleImgIdx + 1) % images.length);
        const mainImageBody = document.querySelector('.main-Image');
        mainImageBody.style.transform = 'translateX(100vw)';
        mainImageBody.style.transition = 'all 1s ease-in-out';
        setTimeout(() => {
            setTitleImgIdx((titleImgIdx + 1) % images.length);
            mainImageBody.style.transform = 'translateX(0%)';
            mainImageBody.style.transform = 'opacity(1)';
            mainImageBody.style.transition = 'opacity 1s ease-in-out';
        }, 1000);
    }
    const modalPrevClickHandler = () => {
        
        const mainImageBody = document.querySelector('.main-Image');
        mainImageBody.style.transform = 'translateX(-100vw)';
        mainImageBody.style.transition = 'all 1s ease-in-out';
        setTimeout(() => {
            setTitleImgIdx((titleImgIdx - 1 + images.length) % images.length);
            mainImageBody.style.transform = 'translateX(0%)';
            mainImageBody.style.transform = 'opacity(1)';
            mainImageBody.style.transition = 'opacity 1s ease-in-out';
        }, 1000);


    }
    // if (!viewModal) {
    //     return null;
    // }
    return (
        <div className="modal-area">
            
            <div className="main-Image">
                <img src={images[titleImgIdx]} alt="" />
            </div>
            <div className="modal-buttons">
                <div className="modal-next-btn">
                    <button
                        onClick={modalNextClickHandler}
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
                        <div className="testimonial-prev-button" style={{backgroundColor: '#000a1a'}}>
                            <img src={callMade2} alt="" />
                        </div>

                    </button>
                </div>
            </div>
            {/* <div className="close-btn">
                <button onClick={() => setViewModal(false)}>Close</button>
            </div> */}
        </div>
    );
}
export default MyModal;