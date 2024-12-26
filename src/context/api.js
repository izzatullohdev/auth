import axios from "axios";

const Base_url = "https://authnode-llkl.onrender.com/";

export const serverApi = async (endpoint, method = "GET", data = null) => {
  try {
    // Register va login uchun tokenni olishmasin
    const token = (method !== "POST" && localStorage.getItem("token")) || "";

    // Request konfiguratsiyasi
    const config = {
      method,
      url: `${Base_url}${endpoint}`,
      headers: {
        Authorization: token ? `Bearer ${token}` : "", // Agar token bo'lsa yuborish
        "Content-Type": "application/json",
      },
      data, // POST so'rovlarida yuboriladigan ma'lumotlar
    };

    // Serverga so'rov yuborish
    const response = await axios(config);
    return response.data;
  } catch (error) {
    console.error("Xatolik yuz berdi:", error.response?.data || error.message);
    return null;
  }
};
