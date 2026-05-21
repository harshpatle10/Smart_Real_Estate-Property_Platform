import api from "./axios";

export const createZone = (data) =>
  api.post("/admin/zones", data);

export const getZones = () =>
  api.get("/admin/zones");

export const getDashboard = () =>
  api.get("/admin/dashboard");