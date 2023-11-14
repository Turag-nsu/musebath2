//post the blog to backend


import axios from 'axios';
import { initializeApp } from "firebase/app";
import { getStorage, deleteObject } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyBsdoz5ju3arNc1fok2MwSffwrXYJYx2Wk",
    authDomain: "musebath-d2e31.firebaseapp.com",
    projectId: "musebath-d2e31",
    storageBucket: "musebath-d2e31.appspot.com",
    messagingSenderId: "454186895843",
    appId: "1:454186895843:web:71acf307e26bca58ad78d6",
    measurementId: "G-0E5YZS9C1L"
  };

const fireBaseApp = initializeApp(firebaseConfig);
const fireBaseService = getStorage(fireBaseApp);
const baseUrl = 'https://musebath.onrender.com/api/blog-posts';

const handlePost = async (formData) => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
        },
    };
    try {
        const res = await axios.post(`${baseUrl}`, formData, config);
        // console.log(res);
        return res;
    } catch (err) {
        console.log(err);
    }
}

const handleGetPosts = async () => {
    try {
        const res = await axios.get(`${baseUrl}`);
        return res;
    } catch (err) {
        console.log(err);
    }
}

const handleGetPost = async (id) => {
    try {
        const res = await axios.get(`${baseUrl}/${id}`);
        return res;
    } catch (err) {
        console.log(err);
    }
}

const handleUpdatePost = async (id, formData) => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
        },
    };
    try {
        const res = await axios.put(`${baseUrl}/${id}`, formData, config);
        console.log(res);
    } catch (err) {
        console.log(err);
    }
}

const handleDeletePost = async (id) => {
    //also delete images from firebase
    const post = await handleGetPost(id);
    const data = post.data;
    console.log("data is: ",data);
    const images = [];
    images.push(data.tileImage);
    data.bodyParts && data.bodyParts.forEach(bodyPart => {
        images.push(bodyPart.image);
    });
    const deleteImagesFromFirebaseByLink = async (images) => {
        images.forEach(async (image) => {
            const imageRef = fireBaseService.refFromURL(image);
            await deleteObject(imageRef);
        });
    }

    try {
        
        await deleteImagesFromFirebaseByLink(images);
        const res = await axios.delete(`${baseUrl}/${id}`);
        console.log(res);
    } catch (err) {
        console.log(err);
    }
}
export { handlePost, handleGetPosts, handleGetPost, handleUpdatePost, handleDeletePost, fireBaseService};
