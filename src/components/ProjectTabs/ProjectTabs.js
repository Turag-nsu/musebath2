import React from "react";
import "./ProjectTabs.css";
import Nav from 'react-bootstrap/Nav';
import { Container } from "react-bootstrap";

const ProjectTabs = () => {
    return (

        <Container>
            <div className="project-tabs">
                <Nav defaultActiveKey="link-1" as="ul" variant="underline">
                    <Nav.Item as="li">
                        <Nav.Link eventKey="link-1">All</Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                        <Nav.Link eventKey="link-2">Full bathroom remodeling</Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                        <Nav.Link eventKey="link-3">Bathtub-shower conversions</Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                        <Nav.Link eventKey="link-4">Senior friendly bathroom</Nav.Link>
                    </Nav.Item>
                </Nav>
            </div>
        </Container >

    );
};
export default ProjectTabs;