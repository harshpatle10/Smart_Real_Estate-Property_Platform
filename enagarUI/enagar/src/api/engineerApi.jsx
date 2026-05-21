import axios from "axios";

const BASE_URL =
  "http://localhost:8080/api/engineer";

const token =
  localStorage.getItem("token");

export const getAssignedApplications =
  async () => {

    const response =
      await axios.get(
        `${BASE_URL}/applications`,
        {
          headers: {
            Authorization:
              `Bearer ${token}`,
          },
        }
      );

    return response.data;
};

export const getApplicationById =
  async (id) => {

    const response =
      await axios.get(
        `${BASE_URL}/applications/${id}`,
        {
          headers: {
            Authorization:
              `Bearer ${token}`,
          },
        }
      );

    return response.data;
};

export const reviewApplication =
  async (id, data) => {

    const response =
      await axios.post(
        `${BASE_URL}/applications/${id}/review`,
        data,
        {
          headers: {
            Authorization:
              `Bearer ${token}`,
          },
        }
      );

    return response.data;
};