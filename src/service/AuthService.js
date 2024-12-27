import axios from "axios";

const backendServerUrl = import.meta.env.VITE_BACKEND_SERVER_URL;
const API_URL = `${backendServerUrl}/api/auth`;

class AuthService {
  firebaseGoogleOAuth(data) {
    return axios.post(API_URL + "/googleoauth", data, {
      withCredentials: true,
    });
  }
}

export default new AuthService();
