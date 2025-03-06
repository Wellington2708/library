import axios from "axios";

const favoritesApi = axios.create({
    baseURL: "http://localhost:8000/favorites"

});

async function getFavorites() {
    const response = await favoritesApi.get("/");
    return response.data;
}

async function postFavorite(id) {
    await favoritesApi.post(`/${id}`);
    
}

async function deleteFavorite(id) {
    await favoritesApi.delete(`/${id}`);

}

export { 
    getFavorites,
    postFavorite,
    deleteFavorite
 };