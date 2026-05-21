import { BrowserRouter, Routes, Route } from "react-router-dom";

import Landing from "./pages/landing/Landing";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";

import AdminDashboard from "./pages/admin/AdminDashboard";
import Review from "./pages/engineer/Review";
import Approval from "./pages/officer/Approval";
import Dashboard from "./pages/citizen/Dashboard";

export default function App() {
  return (
    <BrowserRouter>

      <Routes>

        {/* 🏠 PUBLIC PAGES */}
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* 🔐 ROLE DASHBOARDS */}
        <Route path="/citizen" element={<Dashboard/>} />
        <Route path="/admin" element={<AdminDashboard/>} />
        <Route path="/engineer" element={<Review/>} />
        <Route path="/officer" element={<Approval/>} />

      </Routes>

    </BrowserRouter>
  );
}