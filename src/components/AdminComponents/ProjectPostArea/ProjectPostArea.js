import React from 'react';
import './ProjectPostArea.css';
import { Container } from 'react-bootstrap';
import { handlePost } from '../../../services/projectServices';
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { fireBaseService } from '../../../services/blogServices';

const ProjectPostArea = () => {
    const handlePostClick = async (e) => {
        e.preventDefault();
    
        const selectedImages = [];
    
        for (let i = 1; i <= 4; i++) {
            const imageInput = e.target.elements[`image${i}`];
            console.log(imageInput);
            if (imageInput && imageInput.files && imageInput.files[0]) {
                selectedImages.push(imageInput.files[0]);
            }
        }
    
        const uploadImage = async (image, index) => {
            const storage = ref(fireBaseService, `blog-images/${Date.now()}-${index}-${image.name}`);
            await uploadBytes(storage, image);
            const url = await getDownloadURL(storage);
            return url;
        }
    
        const imageUrlsArray = await Promise.all(selectedImages.map(async (image, index) => {
            const imageUrl = await uploadImage(image, index);
            return imageUrl;
        }));
    
        const formData = {
            title: e.target.elements.title.value,
            description: e.target.elements.description.value,
            // tileImage: e.target.elements.tileImage.files[0],
            images: imageUrlsArray,
        };
    
        console.log("project form data: ", formData);
    
        await handlePost(formData);
    }
    
    
    return (
        <Container>
            <div>
            <div className="blog-post-area">
                <div className="blog-post-area-title">
                    <p>Post a project</p>
                </div>
                <div className="blog-post-area-body">
                    <form
                        onSubmit={handlePostClick}
                    >
                        <p>Add Title Area</p>
                        <input type="text" placeholder="Title" name='title'/>
                        <p>Upload Images</p>
                        <input type="file" placeholder="Tile Image" name='image1'/>
                        <input type="file" placeholder="Tile Image" name='image2'/>
                        <input type="file" placeholder="Tile Image" name='image3'/>
                        <input type="file" placeholder="Tile Image" name='image4'/>
                        <textarea placeholder="Project Description" name='description'/>
                        <button 
                        // onClick={handlePostClick}
                        className='post-submit-button' type="submit" value="submit">Submit</button>
                    </form>
                </div>
            </div>
        </div>
        </Container>
    );
};

export default ProjectPostArea;
