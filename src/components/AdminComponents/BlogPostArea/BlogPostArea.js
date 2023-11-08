import React from 'react';
import './BlogPostArea.css';
import { Container } from 'react-bootstrap';
import { handlePost, fireBaseService } from '../../../services/blogServices';
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
const PostArea = () => {
    const [bodyPartCount, setBodyPartCount] = React.useState(1);
    const [singleBodyParts, setSingleBodyParts] = React.useState([]);

    const addBodyPart = () => {
        const newBodyPart = {
            title: `Body part ${bodyPartCount} title`,
            content: `Body part ${bodyPartCount} content`,
            listItems: [],
            image: null,
        };
        setBodyPartCount(bodyPartCount + 1);
        setSingleBodyParts([...singleBodyParts, newBodyPart]);
    }

    const addListItem = (index) => {
        const newListItem = `List item ${singleBodyParts[index].listItems.length + 1}`;
        const updatedBodyPart = {
            ...singleBodyParts[index],
            listItems: [...singleBodyParts[index].listItems, newListItem],
        };
        const updatedBodyParts = [...singleBodyParts];
        updatedBodyParts[index] = updatedBodyPart;
        setSingleBodyParts(updatedBodyParts);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const uploadImage = async (image, index) => {
            const storage = ref(fireBaseService, `blog-images/${Date.now()}-${index}-${image.name}`);
            await uploadBytes(storage, image);
            const url = await getDownloadURL(storage);
            return url;
        }

        const bodyPartsPromises = singleBodyParts.map(async (part, index) => {
            const imageFile = e.target.elements[`image${index}`].files[0];
            const imageUrl = imageFile ? await uploadImage(imageFile, index) : null;
            console.log("image url is: ",imageUrl);
            return {
                title: e.target.elements[`title${index}`].value,
                content: e.target.elements[`content${index}`].value,
                listItems: part.listItems.map((item, itemIndex) => e.target.elements[`listItem${index}-${itemIndex}`].value),
                image: imageUrl,
            };
        });

        const bodyParts = await Promise.all(bodyPartsPromises);

        const formData = {
            title: e.target.elements.title.value,
            uploadDate: e.target.elements.uploadDate.value,
            tileImage: await uploadImage(e.target.elements.tileImage.files[0]),
            category: e.target.elements.category.value,
            mainBody: e.target.elements.mainBody.value,
            bodyParts,
        };
        console.log("formdata is: ",formData);
        const rs = handlePost(formData);
        if (rs) {
            const postBtn = document.querySelector(".post-submit-button")
            postBtn.innerHTML = "Posted";
            postBtn.style.backgroundColor = "green";
            postBtn.style.color = "white";
            // postBtn.disabled = true;
            postBtn.style.transition = "all 0.5s ease-in-out";
            setTimeout(() => {
                window.location.reload();
            }, 2000);
        }
        else {
            alert("Something went wrong when posting the blog");
        }
        console.log(formData);
    }
    const startLoading = () => {
        document.querySelector(".post-submit-button").innerHTML = "Loading...";
    }
    return (
        <div className="PostArea-container">

            <Container>
                <div className="blog-post-area">
                    <div className="blog-post-area-title">
                        <p>Post a blog</p>
                    </div>
                    <div className="blog-post-area-body">
                        <form onSubmit={handleSubmit}>
                            <p>Add Title Area</p>
                            <input type="text" placeholder="Title" name="title" />
                            <input type="text" placeholder="Upload Date(Ex. 2 July, 2023)" name="uploadDate" />
                            {/* <label for="file">Upload Tile Image</label> */}
                            <input type="file" placeholder="Tile Image" name="tileImage" />
                            <select name="category" id="category">
                                <option value="Full-bathroom-remodeling">Full bathroom remodeling</option>
                                <option value="Bathtub-shower-conversions">Bathtub-shower conversions</option>
                                <option value="Senior-friendly-bathroom">Senior friendly bathroom</option>
                            </select>
                            <textarea placeholder="Main Body" name="mainBody" />
                            <p>Add contents</p>
                            {
                                singleBodyParts.map((part, index) => (
                                    <div key={index} className="single-body-part">
                                        <input type="text" placeholder="Title" name={`title${index}`} defaultValue={part.title} />
                                        <textarea placeholder="Content" name={`content${index}`} defaultValue={part.content} />
                                        <input type="file" placeholder="Image" name={`image${index}`} />
                                        <button type="button" onClick={() => addListItem(index)}>Add List Item</button>
                                        {
                                            part.listItems.map((item, itemIndex) => (
                                                <div key={itemIndex}>
                                                    <input type="text" placeholder="List Item" name={`listItem${index}-${itemIndex}`} defaultValue={item} />
                                                </div>
                                            ))
                                        }
                                    </div>
                                ))
                            }
                            <button type="button" className='add-body-part-btn' onClick={addBodyPart}>Add Body Part</button>
                            <button type="submit" className="post-submit-button" onClick={startLoading}>Post</button>
                        </form>
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default PostArea;
