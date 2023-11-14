//post the blog to backend


import axios from 'axios';
import { initializeApp } from "firebase/app";
import { getStorage, deleteObject, ref } from "firebase/storage";

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
        return res;
        // console.log(res);
    } catch (err) {
        console.log(err);
    }
}
// import { getStorage, ref, deleteObject } from "firebase/storage";

// const storage = getStorage();

// // Create a reference to the file to delete
// const desertRef = ref(storage, 'images/desert.jpg');

// // Delete the file
// deleteObject(desertRef).then(() => {
//   // File deleted successfully
// }).catch((error) => {
//   // Uh-oh, an error occurred!
// });
const handleDeletePost = async (id) => {
    //also delete images from firebase
    const post = await handleGetPost(id);
    const data = post.data
    console.log("{data} is: -----",data);
    const images = [];
    images.push(data.tileImage);
    data.bodyParts && data.bodyParts.forEach(bodyPart => {
        images.push(bodyPart.image);
    });
    const deleteImagesFromFirebaseByLink = async (images) => {
        const storage = getStorage(fireBaseApp);
        images.forEach(image => {
            const imageRef = ref(storage, image);
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
        // console.log(res);
    } catch (err) {
        console.log(err);
    }
}
const fireBaseService = getStorage(fireBaseApp)
export { handlePost, handleGetPosts, handleGetPost, handleUpdatePost, handleDeletePost, fireBaseService};