import React from "react";

import "./TestArea.css";               
import axios from "axios";
import { Container } from "react-bootstrap";
const TestArea = () => {
    const [data, setData] = React.useState([]);
    const [images, setImages] = React.useState([]);
    const getAllProjects = async () => {
        const response = await axios.get(`https://musebath.onrender.com/api/project-posts`);
        // console.log(response.data);
        
        await setData(response.data);
        const imagesArray = [];
        // response.data.forEach(project => {
        //     imagesArray.push(project.images.forEach(image => {
        //         return image.img;
        //     }));
        // });
        response.data.forEach(project => {
            const allImg = project.images.map(image => {
                return image.img;
            });
            const allImgWithID = allImg.map(img => {
                return {img, id: project.id};
            });
            imagesArray.push(...allImgWithID);
        });
        setImages(imagesArray);
        console.log(images);
    }
    

    React.useEffect(() => {
        getAllProjects();
        
    }, []);
    const heightSize = (id) => {
        return id%2===0 ? '30rem' : '20rem';
    }
  return (
    <div className="TestArea">
        <h1>TestArea</h1>
        <Container>
        <div className="image-container">
        {
            images.map((image, idx) => (
                
                <img  style={{height: `${heightSize(idx)}`}} src={image.img} alt="" />
                
            ))
        }
        </div>
        </Container>
    </div>
  );
}

export default TestArea;