import api from "./axios";

export const createApplication = (data) =>

  api.post("/applications", data);

export const getApplications = () =>

  api.get("/applications");

export const getApplicationById = (id) =>

  api.get(`/applications/${id}`);

export const updateApplicationStatus =
  (id, status) =>

    api.put(
      `/applications/${id}/status?status=${status}`
    );