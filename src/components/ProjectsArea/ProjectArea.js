import React from 'react';
import './ProjectArea.css';
import { Container, Row, Col } from 'react-bootstrap';
import CustomButton from '../CustomButton/CustomButton';

// Import your project images here
import project1 from '../../Images/Project/project-1.jpeg';
import project2 from '../../Images/Project/project-2.jpeg';
import project3 from '../../Images/Project/project-3.jpeg';
import project4 from '../../Images/Project/project-4.jpeg';
import project5 from '../../Images/Project/project-5.jpeg';
import project6 from '../../Images/Project/project-6.jpeg';
import project7 from '../../Images/Project/project-7.jpeg';
import project8 from '../../Images/Project/project-8.jpeg';
import project9 from '../../Images/Project/project-9.jpeg';
import project10 from '../../Images/Project/project-10.jpeg';
import project11 from '../../Images/Project/project-11.jpeg';
import project12 from '../../Images/Project/project-12.jpeg';
import project13 from '../../Images/Project/project-13.jpeg';
import project14 from '../../Images/Project/project-14.jpeg';
import project15 from '../../Images/Project/project-15.jpeg';
import project16 from '../../Images/Project/project-16.jpeg';
import project17 from '../../Images/Project/project-17.jpeg';
import { Link } from 'react-router-dom';

const projectImages = [
    project1, project2, project3, project4, project5, project6,
    project7, project8, project9, project10, project11, project12,
    project13, project14, project15, project16, project17
];

const ProjectArea = () => {
    const singleCol = (start, end, cls) => {
        const rows = [];
        let imgClass = cls === 'large' ? 'project-area-pic-large' : 'project-area-pic-small';
        imgClass = cls === 'last' ? 'project-area-pic-last' : imgClass;
        for (let i = start; i <= end; i++) {
            rows.push(
                <Row key={i}>
                    <div className={`${imgClass}`} data-aos="flip-up" data-aos-delay={200}>
                        <Link to={`/projects/${i}`}>
                        <img src={projectImages[i - 1]} alt={`Project ${i}`} />
                        </Link>
                    </div>
                </Row>
            );
        }
        return rows;
    };

    return (
        <div className="project-area">
        <Container>
            
                <Row xs={1} md={3}>
                    <Col>
                        {singleCol(1, 2, "")}
                        {singleCol(3, 4, 'large')}
                        {singleCol(5, 6, "")}
                    </Col>
                    <Col>
                        {singleCol(7, 8, 'large')}
                        {singleCol(9, 9, "")}
                        {singleCol(10, 11, 'large')}

                        <div className="project-area-btn">
                            <CustomButton text="View More" />
                        </div>
                        {/* Add more image rows as needed */}
                    </Col>
                    <Col>
                        {singleCol(12, 13, "")}
                        {singleCol(14, 15, 'large')}
                        {singleCol(16, 17, "")}
                        {/* Add more image rows as needed */}
                        <div className="project-area-btn2">
                            <CustomButton text="View More" />
                        </div>
                    </Col>
                </Row>
            
        </Container>
        </div>
    );
};

export default ProjectArea;
