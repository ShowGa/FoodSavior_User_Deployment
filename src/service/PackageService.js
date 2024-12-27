import axios from "axios";

const backendServerUrl = import.meta.env.VITE_BACKEND_SERVER_URL;
const API_URL = `${backendServerUrl}/api/package`;

class PackageService {
  getStoreDetailPackageCard(storeId) {
    const token = JSON.parse(localStorage.getItem("auth-user-jwt"));

    return axios.get(API_URL + `/storedetail-packagecard/${storeId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }

  getPackageDetail(packageId) {
    const token = JSON.parse(localStorage.getItem("auth-user-jwt"));

    return axios.get(API_URL + `/packagedetail/${packageId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }
}

export default new PackageService();
