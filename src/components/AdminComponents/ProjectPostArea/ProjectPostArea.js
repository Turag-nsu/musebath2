import React from 'react';
import './ProjectPostArea.css';
import { Container } from 'react-bootstrap';
const ProjectPostArea = () => {
    return (
        <Container>
            <div>
            <div className="blog-post-area">
                <div className="blog-post-area-title">
                    <p>Post a project</p>
                </div>
                <div className="blog-post-area-body">
                    <form>
                        <p>Add Title Area</p>
                        <input type="text" placeholder="Title" />
                        {/* <label for="file">Upload Tile Image</label> */}
                        <p>Upload Images</p>
                        <input type="file" placeholder="Tile Image" />
                        <input type="file" placeholder="Tile Image" />
                        <input type="file" placeholder="Tile Image" />
                        <input type="file" placeholder="Tile Image" />
                        <textarea placeholder="Project Description" />
                        <button className='post-submit-button' type="submit" value="submit">Submit</button>
                    </form>
                </div>
            </div>
        </div>
        </Container>
    );
};

export default ProjectPostArea;