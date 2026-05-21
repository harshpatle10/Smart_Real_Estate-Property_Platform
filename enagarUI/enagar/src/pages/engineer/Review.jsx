import { useEffect, useState } from "react";

import {
  getApplications,
  getApplicationById,
  updateApplicationStatus,
} from "../../api/applicationApi";

import {
  ShieldCheck,
  Building2,
  MapPin,
  CheckCircle2,
  XCircle,
  Clock3,
  Eye,
  X,
  Activity,
} from "lucide-react";

export default function Review() {
  const [applications, setApplications] =
    useState([]);

  const [selectedApp, setSelectedApp] =
    useState(null);

  const [loading, setLoading] =
    useState(false);

  useEffect(() => {
    fetchApplications();
  }, []);

  const fetchApplications = async () => {
    try {
      const res =
        await getApplications();

      setApplications(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  // OPEN REVIEW

  const handleOpenReview = async (id) => {
    try {
      const res =
        await getApplicationById(id);

      setSelectedApp(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  // APPROVE / REJECT

  const handleDecision = async (
    status
  ) => {
    try {
      setLoading(true);

      await updateApplicationStatus(
        selectedApp.id,
        status
      );

      await fetchApplications();

      alert(
        `Application ${status}`
      );

      setSelectedApp(null);
    } catch (err) {
      console.error(err);

      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  // STATS

  const approved =
    applications.filter(
      (a) =>
        a.status === "APPROVED"
    ).length;

  const rejected =
    applications.filter(
      (a) =>
        a.status === "REJECTED"
    ).length;

  const pending =
    applications.filter(
      (a) =>
        a.status === "PENDING"
    ).length;

  return (
    <div className="min-h-screen bg-[#f1f5f9] p-8">
      {/* HEADER */}

      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-8">
        <div className="flex items-center gap-5">
          <div className="bg-gray-800 p-5 rounded-3xl shadow-xl">
            <ShieldCheck
              size={34}
              className="text-white"
            />
          </div>

          <div>
            <h1 className="text-5xl font-bold text-gray-800">
              Engineer Review
            </h1>

            <p className="text-gray-500 mt-2">
              Building Approval
              Management Panel
            </p>
          </div>
        </div>

        <div className="bg-white px-8 py-5 rounded-3xl shadow-lg border border-gray-200">
          <p className="text-gray-500 text-sm">
            Total Applications
          </p>

          <h2 className="text-4xl font-bold text-gray-800 mt-2">
            {applications.length}
          </h2>
        </div>
      </div>

      {/* TABLE FIRST */}

      <div className="bg-white rounded-3xl shadow-xl border border-gray-200 overflow-hidden mb-10">
        <div className="flex justify-between items-center p-8 border-b border-gray-200">
          <div>
            <h2 className="text-3xl font-bold text-gray-800">
              Application Records
            </h2>

            <p className="text-gray-500 mt-2">
              Review submitted
              applications
            </p>
          </div>

          <div className="flex items-center gap-2 text-gray-700 font-semibold">
            <Activity size={20} />

            Live Status
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-100">
              <tr className="text-gray-700">
                <th className="p-5 text-left">
                  ID
                </th>

                <th className="p-5 text-left">
                  Citizen
                </th>

                <th className="p-5 text-left">
                  Address
                </th>

                <th className="p-5 text-left">
                  Plot
                </th>

                <th className="p-5 text-left">
                  Status
                </th>

                <th className="p-5 text-center">
                  Action
                </th>
              </tr>
            </thead>

            <tbody>
              {applications.map(
                (app) => (
                  <tr
                    key={app.id}
                    className="border-t border-gray-100 hover:bg-gray-50 transition"
                  >
                    <td className="p-5 font-bold text-gray-700">
                      #
                      {app.id}
                    </td>

                    <td className="p-5 font-semibold text-gray-800">
                      {
                        app.citizenName
                      }
                    </td>

                    <td className="p-5 text-gray-600">
                      <div className="flex items-center gap-2">
                        <MapPin
                          size={
                            16
                          }
                          className="text-gray-500"
                        />

                        {
                          app.buildingAddress
                        }
                      </div>
                    </td>

                    <td className="p-5 text-gray-700">
                      {
                        app.plotNumber
                      }
                    </td>

                    <td className="p-5">
                      <StatusBadge
                        status={
                          app.status
                        }
                      />
                    </td>

                    <td className="p-5 text-center">
                      <button
                        onClick={() =>
                          handleOpenReview(
                            app.id
                          )
                        }
                        className="
                          cursor-pointer
                          bg-gray-800
                          hover:bg-black
                          text-white
                          px-5
                          py-3
                          rounded-2xl
                          transition
                          flex
                          items-center
                          gap-2
                          mx-auto
                        "
                      >
                        <Eye
                          size={
                            18
                          }
                        />

                        Review
                      </button>
                    </td>
                  </tr>
                )
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* STATS */}

      <div className="grid md:grid-cols-3 gap-6">
        <StatCard
          title="Approved"
          value={approved}
          icon={<CheckCircle2 />}
          bg="bg-green-100"
          color="text-green-700"
        />

        <StatCard
          title="Pending"
          value={pending}
          icon={<Clock3 />}
          bg="bg-yellow-100"
          color="text-yellow-700"
        />

        <StatCard
          title="Rejected"
          value={rejected}
          icon={<XCircle />}
          bg="bg-red-100"
          color="text-red-700"
        />
      </div>

      {/* MODAL */}

      {selectedApp && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex justify-center items-center z-50 p-4">
          <div className="bg-white rounded-[30px] shadow-2xl w-full max-w-2xl overflow-hidden">
            {/* HEADER */}

            <div className="bg-gray-900 p-8 text-white flex justify-between items-center">
              <div>
                <h2 className="text-3xl font-bold">
                  Review Application
                </h2>

                <p className="text-gray-300 mt-2">
                  Verify details
                  before approval
                </p>
              </div>

              <button
                onClick={() =>
                  setSelectedApp(
                    null
                  )
                }
                className="cursor-pointer"
              >
                <X
                  size={32}
                />
              </button>
            </div>

            {/* BODY */}

            <div className="p-8 space-y-5">
              <DetailCard
                title="Application ID"
                value={`#${selectedApp.id}`}
              />

              <DetailCard
                title="Citizen Name"
                value={
                  selectedApp.citizenName
                }
              />

              <DetailCard
                title="Building Address"
                value={
                  selectedApp.buildingAddress
                }
              />

              <DetailCard
                title="Plot Number"
                value={
                  selectedApp.plotNumber
                }
              />

              <div className="bg-gray-100 rounded-2xl p-5">
                <p className="text-gray-500 mb-2">
                  Current Status
                </p>

                <StatusBadge
                  status={
                    selectedApp.status
                  }
                />
              </div>

              {/* BUTTONS */}

              <div className="grid md:grid-cols-2 gap-5 pt-5">
                <button
                  disabled={
                    loading
                  }
                  onClick={() =>
                    handleDecision(
                      "APPROVED"
                    )
                  }
                  className="
                    cursor-pointer
                    bg-green-600
                    hover:bg-green-700
                    text-white
                    py-4
                    rounded-2xl
                    text-lg
                    font-bold
                    transition
                  "
                >
                  {loading
                    ? "Processing..."
                    : "Approve"}
                </button>

                <button
                  disabled={
                    loading
                  }
                  onClick={() =>
                    handleDecision(
                      "REJECTED"
                    )
                  }
                  className="
                    cursor-pointer
                    bg-red-500
                    hover:bg-red-600
                    text-white
                    py-4
                    rounded-2xl
                    text-lg
                    font-bold
                    transition
                  "
                >
                  Reject
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

/* STATUS */

function StatusBadge({
  status,
}) {
  return (
    <span
      className={`px-4 py-2 rounded-full text-sm font-bold
      ${
        status ===
        "APPROVED"
          ? "bg-green-100 text-green-700"
          : status ===
            "REJECTED"
          ? "bg-red-100 text-red-700"
          : "bg-yellow-100 text-yellow-700"
      }
      `}
    >
      {status}
    </span>
  );
}

/* STAT CARD */

function StatCard({
  title,
  value,
  icon,
  bg,
  color,
}) {
  return (
    <div
      className={`${bg} rounded-3xl p-6 shadow-lg border border-gray-200`}
    >
      <div className="flex justify-between items-center">
        <div>
          <p className="text-gray-600">
            {title}
          </p>

          <h2
            className={`text-4xl font-bold mt-3 ${color}`}
          >
            {value}
          </h2>
        </div>

        <div
          className={`${color}`}
        >
          {icon}
        </div>
      </div>
    </div>
  );
}

/* DETAIL CARD */

function DetailCard({
  title,
  value,
}) {
  return (
    <div className="bg-gray-100 rounded-2xl p-5">
      <p className="text-gray-500 mb-2">
        {title}
      </p>

      <h3 className="text-lg font-semibold text-gray-800">
        {value}
      </h3>
    </div>
  );
}