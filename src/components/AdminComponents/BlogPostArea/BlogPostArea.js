import React from 'react';
import './BlogPostArea.css';
import { Container } from 'react-bootstrap';
import { handlePost, fireBaseService } from '../../../services/blogServices';
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import PageLoading from '../../PageLoading/PageLoading';


const PostArea = () => {
    const [bodyPartCount, setBodyPartCount] = React.useState(1);
    const [singleBodyParts, setSingleBodyParts] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(false);
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
        //get confirmation
        setIsLoading(true);
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
            uploaderName: e.target.elements.uploaderName.value,
            tileImage: await uploadImage(e.target.elements.tileImage.files[0]),
            category: e.target.elements.category.value,
            mainBody: e.target.elements.mainBody.value,
            bodyParts,
        };
        // console.log("formdata is: ",formData);
        const rs = handlePost(formData);
        if (rs.status === 200 ) {
            setIsLoading(false);
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
            alert("Something went wrong when posting the blog, check connection or contact the developer");
            setIsLoading(false);
        }
        console.log(formData);
    }
    if (isLoading) return <PageLoading />;
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
                            <input type="text" placeholder="Title" name="title" required/>
                            <input type="text" placeholder="Upload Date(Ex. 2 July, 2023)" name="uploadDate" />
                            <input type="text" placeholder="Uploader Name" name="uploaderName" />
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
                                        <input type="text" name={`title${index}`} placeholder={part.title} />
                                        <textarea placeholder={part.content} name={`content${index}`} />
                                        <input type="file" placeholder="Image" name={`image${index}`} />
                                        
                                        {
                                            part.listItems.map((item, itemIndex) => (
                                                <div key={itemIndex}>
                                                    <input type="text" placeholder={item} name={`listItem${index}-${itemIndex}`} />
                                                </div>
                                            ))
                                        }
                                        <button type="button" className='add-list-item-btn' onClick={() => addListItem(index)}>Add List Item</button>
                                    </div>
                                ))
                            }
                            <button type="button" className='add-body-part-btn' onClick={addBodyPart}>Add Body Part</button>
                            <button type="submit" className="post-submit-button">Post</button>
                        </form>
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default PostArea;
