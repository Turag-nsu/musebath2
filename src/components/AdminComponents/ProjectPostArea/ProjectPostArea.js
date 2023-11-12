import React from 'react';
import './ProjectPostArea.css';
import { Container } from 'react-bootstrap';
import { handlePost } from '../../../services/projectServices';
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { fireBaseService } from '../../../services/blogServices';


const ProjectPostArea = () => {

    const [descriptionInput, setDescriptionInput] = React.useState([]);
    // const [showAlert, setShowAlert] = React.useState(false);
    const handlePostClick = async (e) => {
        //disable submit button
        e.target.elements.submit.disabled = true;
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
        const imgUrlArrayToJson = (imgUrlArray) => {
            for (let i = 0; i < imgUrlArray.length; i++) {
                imgUrlArray[i] = {
                    id: i + 1,
                    img: imgUrlArray[i]
                };
            }
        }
        imgUrlArrayToJson(imageUrlsArray);
        // console.log("imageUrlsArray: ", imageUrlsArray);
        const allDescriptions = descriptionInput.map((item, index) => e.target.elements[`description${index}`].value);
        const formData = {
            title: e.target.elements.title.value,
            subtitle: e.target.elements.subtitle.value,
            category: e.target.elements.category.value,
            description: allDescriptions,
            // tileImage: e.target.elements.tileImage.files[0],
            images: imageUrlsArray,
        };

        // console.log("project form data: ", formData);

        const response = await handlePost(formData);
        if (response.status === 200) {
            //reload window
            window.location.reload();
        }
        else {
            alert("Something went wrong. please contact the developer");
        }
    }
    const addDescriptionInputBox = () => {
        const newDescriptionInput = {
            text: `Description ${descriptionInput.length + 1}`,
        };
        setDescriptionInput([...descriptionInput, newDescriptionInput]);
    }
    const handleAddDescriptionClick = (e) => {
        e.preventDefault();
        addDescriptionInputBox();

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
                            <input type="text" placeholder="Title" name='title' required />
                            <input type="text" placeholder="Subtitle" name='subtitle' required />
                            <select name="category" id="category">
                                <option value="Full-bathroom-remodeling">Full bathroom remodeling</option>
                                <option value="Bathtub-shower-conversions">Bathtub-shower conversions</option>
                                <option value="Senior-friendly-bathroom">Senior friendly bathroom</option>
                            </select>
                            <p>Upload Images</p>
                            <input type="file" placeholder="Tile Image" name='image1' required />
                            <input type="file" placeholder="Tile Image" name='image2' required />
                            <input type="file" placeholder="Tile Image" name='image3' required />
                            <input type="file" placeholder="Tile Image" name='image4' required />
                            <p>Add Description Area</p>
                            {
                                descriptionInput.map((item, index) => {
                                    return (
                                        <div key={index} style={{ width: "100%" }}>
                                            <textarea type="text" placeholder={item.text} name={`description${index}`} />
                                        </div>
                                    )
                                })
                            }
                            <button
                                className='add-body-part-btn'
                                onClick={handleAddDescriptionClick}
                            >Add description</button>
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
