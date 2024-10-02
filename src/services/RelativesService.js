import axios from 'axios';

const API_URL = 'http://localhost:8080/api/relatives';

export const getRelatives = async (userId) => {
  try {
    const response = await axios.get(`${API_URL}/${userId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching relatives:', error);
    throw error;
  }
};

export const addRelative = async (userId, relative) => {
  try {
    console.log(`POST request to: ${API_URL}/${userId}`, relative); // Add this for debugging
    const response = await axios.post(`${API_URL}/${userId}`, relative);
    return response.data;
  } catch (error) {
    console.error('Error adding relative:', error);
    throw error;
  }
};

