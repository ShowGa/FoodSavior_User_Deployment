import axios from "axios";

const backendServerUrl = import.meta.env.VITE_BACKEND_SERVER_URL;
const API_URL = `${backendServerUrl}/api/review`;

const ReviewService = {
  createReview(data, storeId) {
    const token = JSON.parse(localStorage.getItem("auth-user-jwt"));
    return axios.post(API_URL + `/createreview/${storeId}`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },
};

export default ReviewService;
