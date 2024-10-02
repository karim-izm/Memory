import axios from "axios";

const API_URL = "http://localhost:8080/auth"; // Replace with your backend URL

const login = async (username, password) => {
  try {
    const response = await axios.post(`${API_URL}/login`, {
      username,
      password,
    }, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data; // Return the user data if successful
  } catch (error) {
    throw error.response?.data?.message || "Login failed";
  }
};

const loginCareGiver = async (username, password) => {
  try {
    const response = await axios.post(`${API_URL}/loginCG`, {
      username,
      password,
    }, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response; // Return the caregiver data if successful
  } catch (error) {
    throw error.response?.data?.message || "Login failed";
  }
};

const register = async (user) => {
  try {
    const response = await axios.post(`${API_URL}/register`, user, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data; // Return the user data if successful
  } catch (error) {
    throw error.response?.data?.message || "Registration failed";
  }
};

const registerCareGiver = async (careGiver) => {
  try {
    const response = await axios.post(`${API_URL}/registerCG`, careGiver, {
      params: {
        user_id: careGiver.user_id,
      },
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data; // Return the caregiver data if successful
  } catch (error) {
    throw error.response?.data?.message || "Caregiver registration failed";
  }
};

const authService = {
  login,
  loginCareGiver,
  register,
  registerCareGiver,
};

export default authService;
