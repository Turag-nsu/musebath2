import React from 'react';
import './WorkArea.css'
import { Row, Col, Container } from 'react-bootstrap';
import Card3 from '../Card3/Card3';
import WorkAreaPic1 from '../../Images/workArea - 1.png'
import WorkAreaPic2 from '../../Images/workArea - 2.png'
import WorkAreaPic3 from '../../Images/workArea - 3.png'
import WorkAreaPic4 from '../../Images/workArea - 4.png'

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

    const marginTopCalculation = (id) => (id % 2 === 0 ? '2.5' : '0') + 'rem';

    return (
        <div className='work-area' >
            <Container>
                <Row>
                    <p className='work-area-title'>Our Working Process</p>
                </Row>
                <Row  xs={1} md={4}>
                    {works.map(work => (
                        <Col key={work.id}  style={{ marginTop: marginTopCalculation(work.id) }}>
                            <Card3  id={work.id} imgLink={work.imgLink} title={work.title} />
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
};

export default WorkArea;
