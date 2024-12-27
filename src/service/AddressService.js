import axios from "axios";

const backendServerUrl = import.meta.env.VITE_BACKEND_SERVER_URL;
const API_URL = `${backendServerUrl}/api/address`;

class AddressService {
  getAddressByPosition(position) {
    const token = JSON.parse(localStorage.getItem("auth-user-jwt"));

    return axios.post(API_URL + `/user-change-position`, position, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }
}

export default new AddressService();
