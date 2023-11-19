import React from 'react';
import './GallaryArea.css';
import { Container, Row, Col } from 'react-bootstrap';
import CustomButton from '../CustomButton/CustomButton';
import { Link } from 'react-router-dom';
// import {CloseButton} from "react-bootstrap";

import { useState } from "react";
import MyModal from './MyModal/MyModal';


const GallaryArea = ({ images, title }) => {
    const [showModal, setShowModal] = useState(false);
    const [mainImageIdx, setMainImageIdx] = useState(0);
    return (
        <div className='gallary-area' >
            <div stile={{ marginTop: "13.5rem" }} className="lightbox-viewer">
                {showModal &&
                    <div>
                        <div className='modal-overlay' onClick={() => setShowModal(false)}></div>
                        <MyModal mainImageIdx={mainImageIdx} images={images} />
                        <button className='close-btn' onClick={() => setShowModal(false)}>X</button>
                    </div>
                }
            </div>


            <Container>
                <p
                    data-aos="zoom-in"
                    data-aos-delay={200}
                    data-aos-duration="700"
                    data-aos-ofset="200"
                    className='gallary-area-title'>
                    {title}
                </p>
                <Row xs={1} md={3}>
                    <Col md={3} >
                        <div className='gallary-pic-container'
                            data-aos="flip-left"
                            data-aos-delay={200}
                            data-aos-duration="1000"
                            data-aos-ofset="200"
                            data-aos-anchor-placement="top-center"
                            onClick={() => {
                                setShowModal(true);
                                // console.log(showModal)
                                setMainImageIdx(0);
                            }
                            }
                        >
                            <img src={images[0]} alt="" />
                        </div>

                    </Col>
                    <Col md={5}>
                        <div
                            data-aos="flip-left"
                            data-aos-delay={200 + 1 * 100}
                            data-aos-duration="1000"
                            data-aos-ofset="200"
                            data-aos-anchor-placement="top-center"
                            className='gallary-pic-container'
                            onClick={() => {
                                setShowModal(true);
                                setMainImageIdx(1);
                            }
                            }>
                            <img src={images[1]} alt="" />
                        </div>

                    </Col>
                    <Col md={4}>
                        <div
                            data-aos="flip-left"
                            data-aos-delay={200 + 2 * 100}
                            data-aos-duration="1000"
                            data-aos-ofset="200"
                            data-aos-anchor-placement="top-center"
                            className='gallary-pic-container'

                            onClick={() => {
                                setShowModal(true);
                                setMainImageIdx(2);
                            }
                            }>
                            <img src={images[2]} alt="" />
                        </div>

                    </Col>
                </Row>
                <Row xs={1} md={2}>
                    <Col md={6}>
                        <div
                            data-aos="flip-left"
                            data-aos-delay={200 + 3 * 100}
                            data-aos-duration="1000"
                            data-aos-ofset="200"
                            data-aos-anchor-placement="top-center"
                            className='gallary-pic-container'
                            onClick={() => {
                                setShowModal(true);
                                setMainImageIdx(3);
                            }
                            }
                        >
                            <img src={images[3]} alt="" />
                        </div>

                    </Col>
                    <Col md={6}>
                        <div
                            data-aos="flip-left"
                            data-aos-delay={200 + 4 * 100}
                            data-aos-duration="1000"
                            data-aos-ofset="200"
                            data-aos-anchor-placement="top-center"
                            onClick={() => {
                                setShowModal(true);
                                setMainImageIdx(4);
                            }
                            }
                            className='gallary-pic-container'>
                            <img src={images[4]} alt="" />
                        </div>

                    </Col>
                </Row>
                <div className="gallary-btn"
                    data-aos="zoom-in"
                    data-aos-delay={200}
                    data-aos-duration="700"
                    data-aos-ofset="200"
                    data-aos-anchor-placement="top-center"
                >
                    <Link to='/projects'><CustomButton text="View All Projects" /></Link>
                </div>
            </Container>

        </div>
    );
};

export default GallaryArea;