import api from "./axios";

export const createReview = (data) =>
  api.post("/reviews", data);

export const updateReview = (id, data) =>
  api.put(`/reviews/${id}`, data);