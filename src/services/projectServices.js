import axios from "axios";

const baseUrl = "http://localhost:3000/api/project-posts";


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
    try {
        const res = await axios.delete(`${baseUrl}/${id}`);
        // console.log(res);
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