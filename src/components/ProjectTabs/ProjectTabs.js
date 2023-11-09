import React from "react";
import "./ProjectTabs.css";
import Nav from 'react-bootstrap/Nav';
import { Container } from "react-bootstrap";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import Nav from 'react-bootstrap/Nav';
// import { Container } from "react-bootstrap";

const ProjectTabs = () => {
    const [activeKey, setActiveKey] = useState("link-1");
    const navigate = useNavigate();

    const handleSelect = (selectedKey) => {
        setActiveKey(selectedKey);
        navigate(`/projects?category=${selectedKey}`);
    };

    return (
        <Container>
            <div className="project-tabs">
                <Nav defaultActiveKey="all" activeKey={activeKey} onSelect={handleSelect} as="ul" variant="underline">
                    <Nav.Item as="li">
                        <Nav.Link eventKey="all">All</Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                        <Nav.Link eventKey="Full bathroom remodeling">Full bathroom remodeling</Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                        <Nav.Link eventKey="Bathtub-shower conversions">Bathtub-shower conversions</Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                        <Nav.Link eventKey="Senior friendly bathroom">Senior friendly bathroom</Nav.Link>
                    </Nav.Item>
                </Nav>
            </div>
        </Container >
    );
};
export default ProjectTabs;