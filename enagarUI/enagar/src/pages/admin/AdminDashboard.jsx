import { useEffect, useState } from "react";

import {
  getDashboard,
  getZones,
  createZone
} from "../../api/adminApi";

import {
  getApplications
} from "../../api/applicationApi";

export default function AdminDashboard() {

  const [dashboard, setDashboard] = useState({});

  const [zones, setZones] = useState([]);

  const [applications, setApplications] = useState([]);

  const [activeTab, setActiveTab] =
    useState("dashboard");

  const [formData, setFormData] = useState({
    zoneName: "",
    city: ""
  });

  // LOAD DATA

  useEffect(() => {

    fetchDashboard();

    fetchZones();

    fetchApplications();

  }, []);

  const fetchDashboard = async () => {

    try {

      const res =
        await getDashboard();

      setDashboard(res.data);

    } catch (err) {

      console.error(err);

    }
  };

  const fetchZones = async () => {

    try {

      const res =
        await getZones();

      setZones(res.data);

    } catch (err) {

      console.error(err);

    }
  };

  const fetchApplications = async () => {

    try {

      const res =
        await getApplications();

      setApplications(res.data);

    } catch (err) {

      console.error(err);

    }
  };

  // HANDLE INPUT

  const handleChange = (e) => {

    setFormData({

      ...formData,

      [e.target.name]:
        e.target.value

    });

  };

  // CREATE ZONE

  const handleCreateZone =
    async () => {

      try {

        await createZone(formData);

        alert("Zone Created Successfully");

        setFormData({
          zoneName: "",
          city: ""
        });

        fetchZones();

        fetchDashboard();

      } catch (err) {

        console.error(err);

        alert("Failed To Create Zone");

      }
  };

  return (

    <div className="
      flex
      min-h-screen
      bg-[#020817]
      text-white
    ">

      {/* SIDEBAR */}

      <div className="
        w-72
        bg-[#0f172a]/80
        backdrop-blur-xl
        border-r
        border-cyan-500/10
        shadow-[0_0_40px_rgba(0,255,255,0.05)]
        p-6
      ">

        <h1 className="
          text-4xl
          font-bold
          mb-12
        ">

          e-Nagar

        </h1>

        <div className="
          space-y-4
        ">

          {/* DASHBOARD */}

          <div

            onClick={() =>
              setActiveTab("dashboard")
            }

            className={`
              p-4
              rounded-2xl
              cursor-pointer
              transition
              border
              ${
                activeTab === "dashboard"
                  ? "bg-cyan-500 text-white border-cyan-400 shadow-lg shadow-cyan-500/30"
                  : "bg-white/5 hover:bg-cyan-500/10 border-white/10"
              }
            `}
          >

            Dashboard

          </div>

          {/* ZONES */}

          <div

            onClick={() =>
              setActiveTab("zones")
            }

            className={`
              p-4
              rounded-2xl
              cursor-pointer
              transition
              border
              ${
                activeTab === "zones"
                  ? "bg-cyan-500 text-white border-cyan-400 shadow-lg shadow-cyan-500/30"
                  : "bg-white/5 hover:bg-cyan-500/10 border-white/10"
              }
            `}
          >

            Zone Management

          </div>

          {/* APPLICATIONS */}

          <div

            onClick={() =>
              setActiveTab("applications")
            }

            className={`
              p-4
              rounded-2xl
              cursor-pointer
              transition
              border
              ${
                activeTab === "applications"
                  ? "bg-cyan-500 text-white border-cyan-400 shadow-lg shadow-cyan-500/30"
                  : "bg-white/5 hover:bg-cyan-500/10 border-white/10"
              }
            `}
          >

            Applications

          </div>

        </div>

      </div>

      {/* MAIN CONTENT */}

      <div className="
        flex-1
        p-8
      ">

        {/* HEADER */}

        <div className="
          flex
          justify-between
          items-center
          mb-10
        ">

          <div>

            <h1 className="
              text-5xl
              font-bold
            ">

              Admin Dashboard

            </h1>

            <p className="
              text-gray-400
              mt-3
            ">

              Smart Building Approval System

            </p>

          </div>

          <div className="
            bg-cyan-500
            text-white
            px-6
            py-3
            rounded-2xl
            font-semibold
            shadow-lg
            shadow-cyan-500/30
          ">

            Welcome Admin

          </div>

        </div>

        {/* ================= DASHBOARD ================= */}

        {activeTab === "dashboard" && (

          <>

            {/* STATS */}

            <div className="
              grid
              grid-cols-3
              gap-6
              mb-10
            ">

              {/* CARD */}

              <div className="
                bg-white/5
                backdrop-blur-xl
                border
                border-white/10
                hover:border-cyan-400/30
                transition
                rounded-3xl
                p-8
              ">

                <p className="
                  text-gray-400
                  mb-4
                ">

                  Total Zones

                </p>

                <h1 className="
                  text-6xl
                  font-extrabold
                  text-cyan-400
                ">

                  {dashboard.totalZones || 0}

                </h1>

              </div>

              {/* CARD */}

              <div className="
                bg-white/5
                backdrop-blur-xl
                border
                border-white/10
                hover:border-cyan-400/30
                transition
                rounded-3xl
                p-8
              ">

                <p className="
                  text-gray-400
                  mb-4
                ">

                  Total Applications

                </p>

                <h1 className="
                  text-6xl
                  font-extrabold
                  text-cyan-400
                ">

                  {applications.length}

                </h1>

              </div>

              {/* CARD */}

              <div className="
                bg-white/5
                backdrop-blur-xl
                border
                border-white/10
                hover:border-cyan-400/30
                transition
                rounded-3xl
                p-8
              ">

                <p className="
                  text-gray-400
                  mb-4
                ">

                  System Health

                </p>

                <h1 className="
                  text-6xl
                  font-extrabold
                  text-cyan-400
                ">

                  99%

                </h1>

              </div>

            </div>

            {/* ANALYTICS */}

            <div className="
              bg-white/5
              backdrop-blur-xl
              border
              border-white/10
              rounded-3xl
              p-8
            ">

              <h2 className="
                text-3xl
                font-bold
                mb-8
              ">

                Zone Analytics

              </h2>

              <div className="
                flex
                items-end
                gap-6
                h-72
              ">

                {zones.map((zone, index) => (

                  <div
                    key={zone.id}
                    className="
                      flex-1
                      flex
                      flex-col
                      items-center
                    "
                  >

                    <div
                      className="
                        w-full
                        rounded-t-3xl
                        bg-gradient-to-t
                        from-cyan-600
                        to-cyan-300
                        shadow-lg
                        shadow-cyan-500/20
                      "

                      style={{
                        height:
                          `${80 + index * 40}px`
                      }}
                    />

                    <p className="
                      mt-4
                      text-sm
                      font-semibold
                    ">

                      {zone.zoneName}

                    </p>

                  </div>

                ))}

              </div>

            </div>

          </>

        )}

        {/* ================= ZONES ================= */}

        {activeTab === "zones" && (

          <div className="
            grid
            grid-cols-2
            gap-8
          ">

            {/* FORM */}

            <div className="
              bg-white/5
              backdrop-blur-xl
              border
              border-white/10
              rounded-3xl
              p-8
            ">

              <h2 className="
                text-3xl
                font-bold
                mb-8
              ">

                Create Zone

              </h2>

              <input

                type="text"

                name="zoneName"

                placeholder="Enter Zone Name"

                value={
                  formData.zoneName
                }

                onChange={handleChange}

                className="
                  w-full
                  bg-white/5
                  border
                  border-white/10
                  text-white
                  placeholder:text-gray-400
                  p-4
                  rounded-2xl
                  mb-5
                  focus:border-cyan-400
                  focus:ring-2
                  focus:ring-cyan-400/20
                  outline-none
                "
              />

              <input

                type="text"

                name="city"

                placeholder="Enter City"

                value={
                  formData.city
                }

                onChange={handleChange}

                className="
                  w-full
                  bg-white/5
                  border
                  border-white/10
                  text-white
                  placeholder:text-gray-400
                  p-4
                  rounded-2xl
                  mb-6
                  focus:border-cyan-400
                  focus:ring-2
                  focus:ring-cyan-400/20
                  outline-none
                "
              />

              <button

                onClick={
                  handleCreateZone
                }

                className="
                  w-full
                  bg-cyan-500
                  hover:bg-cyan-400
                  text-white
                  py-4
                  rounded-2xl
                  font-bold
                  cursor-pointer
                  transition
                  shadow-lg
                  shadow-cyan-500/30
                "
              >

                Create Zone

              </button>

            </div>

            {/* ZONE TABLE */}

            <div className="
              bg-white/5
              backdrop-blur-xl
              border
              border-white/10
              rounded-3xl
              p-8
            ">

              <h2 className="
                text-3xl
                font-bold
                mb-6
              ">

                Zone List

              </h2>

              <table className="
                w-full
              ">

                <thead>

                  <tr className="
                    border-b
                    border-white/10
                    text-gray-400
                  ">

                    <th className="p-4 text-left">
                      ID
                    </th>

                    <th className="p-4 text-left">
                      Zone
                    </th>

                    <th className="p-4 text-left">
                      City
                    </th>

                  </tr>

                </thead>

                <tbody>

                  {zones.map((zone) => (

                    <tr
                      key={zone.id}

                      className="
                        border-b
                        border-white/5
                        hover:bg-cyan-500/10
                        transition
                      "
                    >

                      <td className="p-4">
                        {zone.id}
                      </td>

                      <td className="p-4">
                        {zone.zoneName}
                      </td>

                      <td className="p-4">
                        {zone.city}
                      </td>

                    </tr>

                  ))}

                </tbody>

              </table>

            </div>

          </div>

        )}

        {/* ================= APPLICATIONS ================= */}

        {activeTab === "applications" && (

          <div className="
            bg-white/5
            backdrop-blur-xl
            border
            border-white/10
            rounded-3xl
            p-8
          ">

            <h2 className="
              text-3xl
              font-bold
              mb-8
            ">

              All Applications

            </h2>

            <div className="
              overflow-x-auto
            ">

              <table className="
                w-full
              ">

                <thead>

                  <tr className="
                    border-b
                    border-white/10
                    text-gray-400
                  ">

                    <th className="p-4 text-left">
                      ID
                    </th>

                    <th className="p-4 text-left">
                      Citizen
                    </th>

                    <th className="p-4 text-left">
                      Address
                    </th>

                    <th className="p-4 text-left">
                      Plot
                    </th>

                    <th className="p-4 text-left">
                      Status
                    </th>

                  </tr>

                </thead>

                <tbody>

                  {applications.map((app) => (

                    <tr
                      key={app.id}

                      className="
                        border-b
                        border-white/5
                        hover:bg-cyan-500/10
                        transition
                      "
                    >

                      <td className="p-4">
                        {app.id}
                      </td>

                      <td className="p-4">
                        {app.citizenName}
                      </td>

                      <td className="p-4">
                        {app.buildingAddress}
                      </td>

                      <td className="p-4">
                        {app.plotNumber}
                      </td>

                      <td className="p-4">

                        <span className={`
                          px-4
                          py-2
                          rounded-xl
                          text-sm
                          font-bold
                          ${
                            app.status === "APPROVED"
                              ? "bg-green-500 text-white"
                              : app.status === "REJECTED"
                              ? "bg-red-500 text-white"
                              : "bg-yellow-400 text-black"
                          }
                        `}>

                          {app.status}

                        </span>

                      </td>

                    </tr>

                  ))}

                </tbody>

              </table>

            </div>

          </div>

        )}

      </div>

    </div>
  );
}