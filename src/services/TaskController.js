import axios from 'axios';

// Define the base URL for the API
const API_URL = 'http://localhost:8080/api/tasks'; // Adjust this to match your backend API

// Function to get tasks for a specific user and date
export const getTasksForDate = async (userId, date) => {
  try {
    const response = await axios.get(`${API_URL}/list`, {
      params: { userId, date },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching tasks:', error);
    throw error;
  }
};

// Function to add a new task or medication
export const addTask = async (userId, taskData) => {
  try {
    const response = await axios.post(`${API_URL}/add`, taskData, {
      params: { userId },
    });
    return response.data;
  } catch (error) {
    console.error('Error adding task:', error);
    throw error;
  }
};
