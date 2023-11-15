import axios from "axios";
import { deleteObject } from "@firebase/storage";
import { fireBaseService } from "./blogServices";

const baseUrl = "https://musebath.onrender.com/api/project-posts";


const handlePost = async (formData) => {
    const config = {
        headers: {
        "Content-Type": "application/json",
        },
    };
    try {
        const res = await axios.post(`${baseUrl}`, formData, config);
        console.log(res);
        return res;
    } catch (err) {
        console.log(err);
    }
    }

const handleGetProjects = async () => {
    
    try {
        const res = await axios.get(`${baseUrl}`);
        return res;
    } catch (err) {
        console.log(err);
    }
}

const handleGetProject = async (id) => {
    try {
        const res = await axios.get(`${baseUrl}/${id}`);
        // console.log(res);
        return res;
    } catch (err) {
        console.log(err);
    }
}

const handleUpdateProject = async (id, formData) => {
    const config = {
        headers: {
            "Content-Type": "application/json",
        },
    };
    try {
        const res = await axios.put(`${baseUrl}/${id}`, formData, config);
        console.log(res);
    } catch (err) {
        console.log(err);
    }
}

const handleDeleteProject = async (id) => {
    const project = await handleGetProject(id);
    const data = project.data;
    const images = [];
    data.images.forEach((image) => {
        images.push(image.img);
    });
    const deleteImagesFromFirebaseByLink = async (images) => {
        const storage = fireBaseService.getStorage();
        images.forEach(image => {
            const imageRef = fireBaseService.ref(storage, image);
            deleteObject(imageRef).then(() => {
                console.log("image deleted successfully");
            }).catch((error) => {
                console.log("firebase error: ",error);
            });
        });
    }

    try {
        const res = await axios.delete(`${baseUrl}/${id}`);
        await deleteImagesFromFirebaseByLink(images);
        console.log(res);
    } catch (err) {
        console.log(err);
    }

}

const hanleGetPostByCategory = async (category) => {
    try {
        const res = await axios.get(`${baseUrl}?=${category}`);
        console.log(res);
    } catch (err) {
        console.log(err);
    }
}

export {
    handlePost,
    handleGetProjects,
    handleGetProject,
    handleUpdateProject,
    handleDeleteProject,
    hanleGetPostByCategory,
};