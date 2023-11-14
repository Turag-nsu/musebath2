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
// const handleDeletePost = async (id) => {
//     //also delete images from firebase
//     const post = await handleGetPost(id);
//     const data = post.data
//     console.log("{data} is: -----",data);
//     const images = [];
//     images.push(data.tileImage);
//     data.bodyParts && data.bodyParts.forEach(bodyPart => {
//         images.push(bodyPart.image);
//     });
//     const deleteImagesFromFirebaseByLink = async (images) => {
//         const storage = getStorage(fireBaseApp);
//         images.forEach(image => {
//             const imageRef = ref(storage, image);
//             deleteObject(imageRef).then(() => {
//                 console.log("image deleted successfully");
//             }).catch((error) => {
//                 console.log("firebase error: ",error);
//             });
//         });
//     }

//     try {
//         const res = await axios.delete(`${baseUrl}/${id}`);
//         await deleteImagesFromFirebaseByLink(images);
//         // console.log(res);
//     } catch (err) {
//         console.log(err);
//     }
// }
const handleDeleteProject = async (id) => {
    // {"_id":{"$oid":"654f25ac0d77e35131a3b232"},"description":["feywf fefwe  fwe gfwgffvd v dfdfhd hdd fdf iohdf iovdfdfd"," efwef7wfwfwhwfwwf  wefwhwef  hwefhwfwf","uiughruighwug wfgwf gwfgwe f  wfwgfgwe7fh78wfweg we gwgfwfwegf78g we78gf78wegf78gwe78gf78wgf78wegf78 wggf78wef7 wefwe  wfwf wegf78gfgsdgfyugfyugwe fgefgw"],"title":"test project","images":[{"_id":{"$oid":"654be4f3393ecc3e30778bb2"},"id":{"$numberInt":"1"},"img":"https://firebasestorage.googleapis.com/v0/b/musebath-d2e31.appspot.com/o/blog-images%2F1699472623029-0-project-hero-bg.jpeg?alt=media&token=8e1808db-303c-4005-ae73-05a4f84f5c45"},{"_id":{"$oid":"654be4f3393ecc3e30778bb3"},"id":{"$numberInt":"2"},"img":"https://firebasestorage.googleapis.com/v0/b/musebath-d2e31.appspot.com/o/blog-images%2F1699472623032-1-project-12.jpeg?alt=media&token=22670727-04ae-4543-aca7-ecdb543fe356"},{"_id":{"$oid":"654be4f3393ecc3e30778bb4"},"id":{"$numberInt":"3"},"img":"https://firebasestorage.googleapis.com/v0/b/musebath-d2e31.appspot.com/o/blog-images%2F1699472623033-2-project-7.jpeg?alt=media&token=5dd52b2f-5c5b-4ae1-b142-bfd3bd691695"},{"_id":{"$oid":"654be4f3393ecc3e30778bb5"},"id":{"$numberInt":"4"},"img":"https://firebasestorage.googleapis.com/v0/b/musebath-d2e31.appspot.com/o/blog-images%2F1699472623034-3-project-2.jpeg?alt=media&token=18ff5ae0-b5fe-4c8e-8d4b-f6692cf33c27"}],"id":{"$numberInt":"1"},"__v":{"$numberInt":"0"}}
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