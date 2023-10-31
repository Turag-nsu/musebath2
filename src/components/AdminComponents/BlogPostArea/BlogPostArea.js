import React from 'react';
import './BlogPostArea.css';
import { Container } from 'react-bootstrap'

const PostArea = () => {
    const [bodyPartCount, setBodyPartCount] = React.useState(1);
    const [singleBodyParts, setSingleBodyParts] = React.useState([]);

    const addBodyPart = () => {
        const newBodyPart = {
            title: `Body part ${bodyPartCount} title`,
            content: `Body part ${bodyPartCount} content`,
            listItems: [],
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

    return (
        <div className="PostArea-container">
            
            <Container>
                <div className="blog-post-area">
                    <div className="blog-post-area-title">
                        <p>Post a blog</p>
                    </div>
                    <div className="blog-post-area-body">
                        <form>
                            <p>Add Title Area</p>
                            <input type="text" placeholder="Title" />
                            {/* <label for="file">Upload Tile Image</label> */}
                            <input type="file" placeholder="Tile Image" />
                            <select name="category" id="category">
                                <option value="Full-bathroom-remodeling">Full bathroom remodeling</option>
                                <option value="Bathtub-shower-conversions">Bathtub-shower conversions</option>
                                <option value="Senior-friendly-bathroom">Senior friendly bathroom</option>
                            </select>
                            <textarea placeholder="Main Body" />
                            <p>Add contents</p>
                            {
                                singleBodyParts.map((part, index) => (
                                    <div key={index} className="single-body-part">
                                        <p style={{ fontSize: "1rem" }}>Body Part {index + 1}</p>
                                        <input type="text" placeholder={part.title} />
                                        <textarea placeholder={part.content} />
                                        <p style={{ fontSize: "1rem" }}>Upload Image</p>
                                        <input type="file" placeholder="Tile Image" />
                                        {
                                            part.listItems.map((item, itemIndex) => (
                                                <input key={itemIndex} type="text" placeholder={item} />
                                            ))
                                        }
                                        <button
                                            className='add-list-item-btn'
                                            onClick={() => addListItem(index)} type="button" value="Add">
                                            Add List Item
                                        </button>
                                    </div>
                                ))
                            }
                            <button
                                className='add-body-part-btn'
                                onClick={addBodyPart} type="button" value="Add">
                                Add Body Part
                            </button>
                            <button className="post-submit-button" type="submit">Post</button>
                        </form>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default PostArea;
