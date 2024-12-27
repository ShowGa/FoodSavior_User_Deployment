import axios from "axios";

const backendServerUrl = import.meta.env.VITE_BACKEND_SERVER_URL;
const API_URL = `${backendServerUrl}/api/favorite`;

class FavoriteService {
  updateFavorite(packageId) {
    const token = JSON.parse(localStorage.getItem("auth-user-jwt"));

    return axios.put(
      API_URL + `/update/${packageId}`,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  }

  getFavoriteList(userId) {
    const token = JSON.parse(localStorage.getItem("auth-user-jwt"));

    return axios.get(API_URL + `/getuserfavorite/${userId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }
}

export default new FavoriteService();
