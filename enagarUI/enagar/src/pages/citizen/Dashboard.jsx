import { useEffect, useState } from "react";

import {
  getApplications,
  createApplication,
} from "../../api/applicationApi";

import {
  Building2,
  Clock3,
  XCircle,
  CheckCircle2,
  Plus,
  MapPin,
  LayoutDashboard,
  Activity,
  TrendingUp,
  Search,
  Bell,
} from "lucide-react";

import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  PieChart,
  Pie,
  Cell,
} from "recharts";

export default function Dashboard() {

  const user = JSON.parse(
    localStorage.getItem("user")
  );

  const [applications, setApplications] =
    useState([]);

  const [showForm, setShowForm] =
    useState(false);

  const [loading, setLoading] =
    useState(false);

  const [formData, setFormData] =
    useState({
      citizenName: user?.name || "",
      buildingAddress: "",
      plotNumber: "",
    });

  useEffect(() => {
    fetchApplications();
  }, []);

  const fetchApplications = async () => {

    try {

      const res =
        await getApplications();

      setApplications(res.data);

    } catch (error) {

      console.error(error);

    }
  };

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]:
        e.target.value,
    });
  };

  const handleSubmit = async () => {

    try {

      setLoading(true);

      await createApplication(
        formData
      );

      alert(
        "Application Submitted"
      );

      setShowForm(false);

      fetchApplications();

      setFormData({
        citizenName:
          user?.name || "",
        buildingAddress: "",
        plotNumber: "",
      });

    } catch (error) {

      console.error(error);

      alert("Submission Failed");

    } finally {

      setLoading(false);

    }
  };

  // ================= STATS =================

  const approved =
    applications.filter(
      (a) =>
        a.status ===
        "APPROVED"
    ).length;

  const rejected =
    applications.filter(
      (a) =>
        a.status ===
        "REJECTED"
    ).length;

  const pending =
    applications.filter(
      (a) =>
        a.status ===
        "PENDING"
    ).length;

  const total =
    applications.length;

  const chartData = [
    {
      name: "Approved",
      value: approved,
    },
    {
      name: "Rejected",
      value: rejected,
    },
    {
      name: "Pending",
      value: pending,
    },
  ];

  const performanceData = [
    {
      month: "Jan",
      applications: 4,
    },
    {
      month: "Feb",
      applications: 8,
    },
    {
      month: "Mar",
      applications: 6,
    },
    {
      month: "Apr",
      applications: 12,
    },
    {
      month: "May",
      applications: 10,
    },
    {
      month: "Jun",
      applications: 15,
    },
  ];

  const COLORS = [
    "#16a34a",
    "#dc2626",
    "#ca8a04",
  ];

  return (

    <div className="
      min-h-screen
      bg-[#f5f7fb]
      text-gray-800
    ">

      {/* ================= HEADER ================= */}

      <div className="
        bg-white
        border-b
        sticky
        top-0
        z-50
      ">

        <div className="
          px-8
          py-5
          flex
          justify-between
          items-center
        ">

          <div className="
            flex
            items-center
            gap-4
          ">

            <div className="
              bg-blue-600
              text-white
              p-3
              rounded-2xl
            ">

              <LayoutDashboard />

            </div>

            <div>

              <h1 className="
                text-3xl
                font-bold
              ">
                e-Nagar Dashboard
              </h1>

              <p className="
                text-gray-500
              ">
                Online Building Approval System
              </p>

            </div>

          </div>

          <div className="
            flex
            items-center
            gap-4
          ">

            <div className="
              bg-gray-100
              p-3
              rounded-xl
              cursor-pointer
            ">

              <Bell size={20} />

            </div>

            <div className="
              bg-blue-50
              px-5
              py-3
              rounded-2xl
              border
            ">

              Welcome,
              <span className="
                font-bold
                text-blue-700
                ml-2
              ">
                {user?.name}
              </span>

            </div>

          </div>

        </div>

      </div>

      <div className="p-8">

        {/* ================= TOP ACTION ================= */}

        <div className="
          bg-gradient-to-r
          from-blue-600
          to-indigo-700
          rounded-3xl
          p-8
          text-white
          flex
          flex-col
          lg:flex-row
          justify-between
          items-center
          mb-8
        ">

          <div>

            <h2 className="
              text-4xl
              font-bold
            ">
              Building Plan Management
            </h2>

            <p className="
              mt-3
              text-white/90
            ">
              Submit and track your building
              approval applications digitally.
            </p>

          </div>

          <button

            onClick={() =>
              setShowForm(true)
            }

            className="
              cursor-pointer
              mt-6
              lg:mt-0
              bg-white
              text-blue-700
              px-7
              py-4
              rounded-2xl
              font-bold
              flex
              items-center
              gap-3
              hover:scale-105
              transition
            "
          >

            <Plus />

            New Application

          </button>

        </div>

        {/* ================= TABLE FIRST ================= */}

        <div className="
          bg-white
          rounded-3xl
          shadow-sm
          border
          overflow-hidden
          mb-8
        ">

          <div className="
            p-6
            border-b
            flex
            flex-col
            lg:flex-row
            justify-between
            gap-4
          ">

            <div>

              <h2 className="
                text-2xl
                font-bold
              ">
                My Applications
              </h2>

              <p className="
                text-gray-500
                mt-1
              ">
                Track all submitted plans
              </p>

            </div>

            <div className="
              relative
            ">

              <Search
                className="
                  absolute
                  left-4
                  top-4
                  text-gray-400
                "
                size={18}
              />

              <input
                placeholder="Search application..."
                className="
                  pl-12
                  pr-4
                  py-3
                  border
                  rounded-2xl
                  outline-none
                  w-72
                "
              />

            </div>

          </div>

          <table className="w-full">

            <thead className="
              bg-gray-50
            ">

              <tr className="
                text-left
                text-gray-600
              ">

                <th className="p-5">
                  ID
                </th>

                <th className="p-5">
                  Plot Number
                </th>

                <th className="p-5">
                  Building Address
                </th>

                <th className="p-5">
                  Status
                </th>

              </tr>

            </thead>

            <tbody>

              {applications.map(
                (app) => (

                  <tr
                    key={app.id}
                    className="
                      border-t
                      hover:bg-gray-50
                      transition
                    "
                  >

                    <td className="
                      p-5
                      font-semibold
                    ">
                      #{app.id}
                    </td>

                    <td className="p-5">
                      {
                        app.plotNumber
                      }
                    </td>

                    <td className="
                      p-5
                      flex
                      items-center
                      gap-2
                    ">

                      <MapPin
                        size={16}
                        className="
                          text-blue-600
                        "
                      />

                      {
                        app.buildingAddress
                      }

                    </td>

                    <td className="p-5">

                      <span
                        className={`
                          px-4
                          py-2
                          rounded-full
                          text-sm
                          font-semibold

                          ${
                            app.status ===
                            "APPROVED"

                              ? "bg-green-100 text-green-700"

                              : app.status ===
                                "REJECTED"

                              ? "bg-red-100 text-red-700"

                              : "bg-yellow-100 text-yellow-700"
                          }
                        `}
                      >

                        {app.status}

                      </span>

                    </td>

                  </tr>

                )
              )}

            </tbody>

          </table>

        </div>

        {/* ================= STATS ================= */}

        <div className="
          grid
          md:grid-cols-2
          xl:grid-cols-4
          gap-6
          mb-8
        ">

          <StatCard
            title="Total Applications"
            value={total}
            icon={<Building2 />}
            color="blue"
          />

          <StatCard
            title="Approved"
            value={approved}
            icon={<CheckCircle2 />}
            color="green"
          />

          <StatCard
            title="Pending"
            value={pending}
            icon={<Clock3 />}
            color="yellow"
          />

          <StatCard
            title="Rejected"
            value={rejected}
            icon={<XCircle />}
            color="red"
          />

        </div>

        {/* ================= CHARTS ================= */}

        <div className="
          grid
          xl:grid-cols-2
          gap-8
        ">

          {/* AREA CHART */}

          <div className="
            bg-white
            rounded-3xl
            border
            p-6
            shadow-sm
          ">

            <div className="
              flex
              justify-between
              items-center
              mb-6
            ">

              <div>

                <h2 className="
                  text-2xl
                  font-bold
                ">
                  Performance Overview
                </h2>

                <p className="
                  text-gray-500
                ">
                  Monthly applications
                </p>

              </div>

              <TrendingUp
                className="
                  text-blue-600
                "
              />

            </div>

            <div className="h-96">

              <ResponsiveContainer>

                <AreaChart
                  data={
                    performanceData
                  }
                >

                  <defs>

                    <linearGradient
                      id="colorData"
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1"
                    >

                      <stop
                        offset="5%"
                        stopColor="#2563eb"
                        stopOpacity={0.5}
                      />

                      <stop
                        offset="95%"
                        stopColor="#2563eb"
                        stopOpacity={0}
                      />

                    </linearGradient>

                  </defs>

                  <CartesianGrid
                    strokeDasharray="3 3"
                  />

                  <XAxis
                    dataKey="month"
                  />

                  <YAxis />

                  <Tooltip />

                  <Area
                    type="monotone"
                    dataKey="applications"
                    stroke="#2563eb"
                    fillOpacity={1}
                    fill="url(#colorData)"
                    strokeWidth={4}
                  />

                </AreaChart>

              </ResponsiveContainer>

            </div>

          </div>

          {/* PIE CHART */}

          <div className="
            bg-white
            rounded-3xl
            border
            p-6
            shadow-sm
          ">

            <div className="
              flex
              justify-between
              items-center
              mb-6
            ">

              <div>

                <h2 className="
                  text-2xl
                  font-bold
                ">
                  Status Analytics
                </h2>

                <p className="
                  text-gray-500
                ">
                  Approval distribution
                </p>

              </div>

              <Activity
                className="
                  text-blue-600
                "
              />

            </div>

            <div className="h-96">

              <ResponsiveContainer>

                <PieChart>

                  <Pie
                    data={chartData}
                    dataKey="value"
                    outerRadius={140}
                    label
                  >

                    {chartData.map(
                      (
                        entry,
                        index
                      ) => (

                        <Cell
                          key={index}
                          fill={
                            COLORS[index]
                          }
                        />

                      )
                    )}

                  </Pie>

                  <Tooltip />

                </PieChart>

              </ResponsiveContainer>

            </div>

          </div>

        </div>

      </div>

      {/* ================= MODAL ================= */}

      {showForm && (

        <div className="
          fixed
          inset-0
          bg-black/40
          flex
          justify-center
          items-center
          z-50
        ">

          <div className="
            bg-white
            rounded-3xl
            w-full
            max-w-lg
            p-8
          ">

            <h2 className="
              text-3xl
              font-bold
              mb-6
            ">
              New Application
            </h2>

            <input
              type="text"
              name="citizenName"
              placeholder="Citizen Name"
              value={
                formData.citizenName
              }
              onChange={
                handleChange
              }
              className="
                w-full
                border
                p-4
                rounded-2xl
                mb-4
                outline-none
              "
            />

            <input
              type="text"
              name="buildingAddress"
              placeholder="Building Address"
              value={
                formData.buildingAddress
              }
              onChange={
                handleChange
              }
              className="
                w-full
                border
                p-4
                rounded-2xl
                mb-4
                outline-none
              "
            />

            <input
              type="text"
              name="plotNumber"
              placeholder="Plot Number"
              value={
                formData.plotNumber
              }
              onChange={
                handleChange
              }
              className="
                w-full
                border
                p-4
                rounded-2xl
                mb-6
                outline-none
              "
            />

            <div className="
              flex
              gap-4
            ">

              <button

                onClick={
                  handleSubmit
                }

                className="
                  flex-1
                  bg-blue-600
                  text-white
                  py-4
                  rounded-2xl
                  font-bold
                  hover:bg-blue-700
                  transition
                  cursor-pointer
                "
              >

                {
                  loading
                    ? "Submitting..."
                    : "Submit"
                }

              </button>

              <button

                onClick={() =>
                  setShowForm(
                    false
                  )
                }

                className="
                  flex-1
                  bg-gray-200
                  py-4
                  rounded-2xl
                  font-bold
                  hover:bg-gray-300
                  transition
                  cursor-pointer
                "
              >

                Cancel

              </button>

            </div>

          </div>

        </div>

      )}

    </div>
  );
}

/* ================= STAT CARD ================= */

function StatCard({
  title,
  value,
  icon,
  color,
}) {

  const colorStyles = {

    blue: `
      bg-blue-50
      text-blue-700
    `,

    green: `
      bg-green-50
      text-green-700
    `,

    yellow: `
      bg-yellow-50
      text-yellow-700
    `,

    red: `
      bg-red-50
      text-red-700
    `,
  };

  return (

    <div className="
      bg-white
      rounded-3xl
      border
      p-6
      shadow-sm
      hover:shadow-md
      transition
    ">

      <div className="
        flex
        justify-between
        items-center
      ">

        <div>

          <p className="
            text-gray-500
          ">
            {title}
          </p>

          <h2 className="
            text-4xl
            font-bold
            mt-3
          ">
            {value}
          </h2>

        </div>

        <div className={`
          p-4
          rounded-2xl
          ${colorStyles[color]}
        `}>

          {icon}

        </div>

      </div>

    </div>

  );
}