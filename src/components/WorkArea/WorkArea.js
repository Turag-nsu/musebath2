import React from 'react';
import './WorkArea.css'
import { Row, Col, Container } from 'react-bootstrap';
import Card3 from '../Card3/Card3';
import WorkAreaPic1 from '../../Images/workarea-1.webp'
import WorkAreaPic2 from '../../Images/workarea-2.webp'
import WorkAreaPic3 from '../../Images/workarea-3.webp'
import WorkAreaPic4 from '../../Images/workarea-4.webp'

import { useState, useEffect } from 'react';

const WorkArea = () => {
    const works = [
        {
            id: 1,
            imgLink: WorkAreaPic2,
            title: "Budget and Consulting",
        },
        {
            id: 2,
            imgLink: WorkAreaPic3,
            title: "Design and Contract",
        },
        {
            id: 3,
            imgLink: WorkAreaPic4,
            title: "Remove and Preparation",
        },
        {
            id: 4,
            imgLink: WorkAreaPic1,
            title: "Professional Installation",
        },
    ]

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // const marginTopCalculation = (id) => (id % 2 === 0 ? '2.5' : '0') + (isMobile ? '0' : '') + 'rem';
    const marginTopCalculation = (id) => {
        if (isMobile) {
            return '0rem';
        }
        else {
            return (id % 2 === 0 ? '2.5' : '0') + 'rem';
        }
    }
    return (
        <div className='work-area' >
            <Container>
                <Row>
                    <article>
                        <h1 className='work-area-title'>Our Working Process</h1>
                    </article>

                </Row>
                <Row xs={1} md={4}>
                    {works.map(work => (
                        <Col
                            key={work.id}
                            style={{
                                marginTop: marginTopCalculation(work.id),
                            }}
                        >
                            <Card3 id={work.id} imgLink={work.imgLink} title={work.title} />
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
};

export default WorkArea;
