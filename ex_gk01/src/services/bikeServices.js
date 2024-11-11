import axios from "axios";

const createBikeService = async (data) => {
    try {
        const res = await axios.post("https://645b0375a8f9e4d6e75e4662.mockapi.io/api/v1/bikes", data);
        return res.data;
    } catch (error) {
        throw error;
    }
}

const updateBikeService = async (data) => {
    try {
        const res = await axios.put(`https://645b0375a8f9e4d6e75e4662.mockapi.io/api/v1/bikes/${data.id}`, data);
        return res.data;
    } catch (error) {
        throw error;
    }
}

const deleteBikeService = async (id) => {
    try {
        const res = await axios.delete(`https://645b0375a8f9e4d6e75e4662.mockapi.io/api/v1/bikes/${id}`);
        return res.data;
    } catch (error) {
        const customError = new Error("Không tìm thấy xe với ID này");
        customError.name = "BikeNotFoundError";
        throw customError;
    }
}

const getBikeByIdService = async (id) => {
    try {
        const res = await axios.get(`https://645b0375a8f9e4d6e75e4662.mockapi.io/api/v1/bikes/${id}`);
        return res.data;
    } catch (error) {
        const customError = new Error("Không tìm thấy xe với ID này");
        customError.name = "BikeNotFoundError";
        throw customError;
    }
}

const getAllBikeService = async () => {
    try {
        const res = await axios.get(`https://645b0375a8f9e4d6e75e4662.mockapi.io/api/v1/bikes`);
        return res.data;
    } catch (error) {
        throw error;
    }
}
const getBikeByCtgService = async (category) => {
    try {
        const res = await axios.get(`https://645b0375a8f9e4d6e75e4662.mockapi.io/api/v1/bikes`);
        listBikeByCtg = res.data.filter((element) => element.category === category);
        return listBikeByCtg;
    } catch (error) {
        console.error("Error fetching all bikes:", error);
        throw error;
    }
}

export {
    createBikeService,
    updateBikeService,
    deleteBikeService,
    getBikeByIdService,
    getAllBikeService,
    getBikeByCtgService
}
