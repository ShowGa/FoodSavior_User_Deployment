import axios from "axios";

const backendServerUrl = import.meta.env.VITE_BACKEND_SERVER_URL;
const API_URL = `${backendServerUrl}/api/user`;

class UserService {
  updateUserProfile(userProfile) {
    const token = JSON.parse(localStorage.getItem("auth-user-jwt"));

    return axios.put(API_URL, userProfile, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }
}

export default new UserService();
