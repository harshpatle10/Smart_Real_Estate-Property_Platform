import { useEffect, useState } from "react";

import {
  getApplications,
  getApplicationById,
  updateApplicationStatus
} from "../../api/applicationApi";

export default function Approval() {

  const [applications, setApplications] = useState([]);

  const [selectedApp, setSelectedApp] = useState(null);

  const [loading, setLoading] = useState(false);

  // LOAD ONLY APPROVED APPLICATIONS

  useEffect(() => {

    fetchApplications();

  }, []);

  const fetchApplications = async () => {

    try {

      const res = await getApplications();

      // ONLY SHOW ENGINEER APPROVED

      const approvedApps =
        res.data.filter(
          (app) =>
            app.status === "APPROVED"
        );

      setApplications(approvedApps);

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

  // FINAL DECISION

  const handleDecision = async (status) => {

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

  return (

    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 p-8">

      {/* HEADER */}

      <div className="flex justify-between items-center mb-8">

        <div>

          <h1 className="text-4xl font-bold text-gray-800">

            Officer Approval Panel

          </h1>

          <p className="text-gray-500 mt-2">

            Final approval management system

          </p>

        </div>

        <div className="bg-purple-600 text-white px-6 py-3 rounded-2xl shadow-lg">

          Pending Final Reviews:
          {" "}
          {applications.length}

        </div>

      </div>

      {/* TABLE */}

      <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">

        <table className="w-full">

          <thead className="bg-purple-700 text-white">

            <tr>

              <th className="p-5 text-left">
                App ID
              </th>

              <th className="p-5 text-left">
                Citizen
              </th>

              <th className="p-5 text-left">
                Address
              </th>

              <th className="p-5 text-left">
                Plot Number
              </th>

              <th className="p-5 text-left">
                Engineer Status
              </th>

              <th className="p-5 text-center">
                Action
              </th>

            </tr>

          </thead>

          <tbody>

            {applications.map((app) => (

              <tr
                key={app.id}
                className="
                  border-b
                  hover:bg-gray-50
                  transition
                "
              >

                <td className="p-5 font-semibold">

                  #{app.id}

                </td>

                <td className="p-5">

                  {app.citizenName}

                </td>

                <td className="p-5">

                  {app.buildingAddress}

                </td>

                <td className="p-5">

                  {app.plotNumber}

                </td>

                <td className="p-5">

                  <span
                    className="
                      bg-green-500
                      text-white
                      px-4
                      py-2
                      rounded-full
                      text-sm
                      font-bold
                    "
                  >

                    APPROVED

                  </span>

                </td>

                <td className="p-5 text-center">

                  <button

                    onClick={() =>
                      handleOpenReview(app.id)
                    }

                    className="
                      bg-purple-600
                      hover:bg-purple-700
                      text-white
                      px-5
                      py-2
                      rounded-xl
                      transition
                      cursor-pointer
                    "
                  >

                    Final Review

                  </button>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

      {/* MODAL */}

      {selectedApp && (

        <div className="
          fixed
          inset-0
          bg-black/50
          flex
          items-center
          justify-center
          z-50
        ">

          <div className="
            bg-white
            w-[600px]
            rounded-3xl
            p-8
            shadow-2xl
          ">

            {/* HEADER */}

            <div className="
              flex
              justify-between
              items-center
              mb-6
            ">

              <h2 className="
                text-3xl
                font-bold
                text-gray-800
              ">

                Final Review

              </h2>

              <button

                onClick={() =>
                  setSelectedApp(null)
                }

                className="
                  text-3xl
                  text-gray-500
                  cursor-pointer
                "
              >

                ×

              </button>

            </div>

            {/* DETAILS */}

            <div className="space-y-4">

              <div className="
                bg-gray-100
                p-4
                rounded-xl
              ">

                <p>

                  <strong>ID:</strong>
                  {" "}
                  {selectedApp.id}

                </p>

              </div>

              <div className="
                bg-gray-100
                p-4
                rounded-xl
              ">

                <p>

                  <strong>Citizen:</strong>
                  {" "}
                  {selectedApp.citizenName}

                </p>

              </div>

              <div className="
                bg-gray-100
                p-4
                rounded-xl
              ">

                <p>

                  <strong>Address:</strong>
                  {" "}
                  {selectedApp.buildingAddress}

                </p>

              </div>

              <div className="
                bg-gray-100
                p-4
                rounded-xl
              ">

                <p>

                  <strong>Plot Number:</strong>
                  {" "}
                  {selectedApp.plotNumber}

                </p>

              </div>

              <div className="
                bg-green-100
                text-green-700
                p-4
                rounded-xl
                font-semibold
              ">

                ✓ Engineer Approved

              </div>

            </div>

            {/* ACTION BUTTONS */}

            <div className="
              flex
              gap-5
              mt-10
            ">

              <button

                disabled={loading}

                onClick={() =>
                  handleDecision(
                    "FINAL_APPROVED"
                  )
                }

                className="
                  flex-1
                  bg-green-600
                  hover:bg-green-700
                  text-white
                  py-4
                  rounded-2xl
                  text-lg
                  font-semibold
                  transition
                  cursor-pointer
                "
              >

                Approve

              </button>

              <button

                disabled={loading}

                onClick={() =>
                  handleDecision(
                    "REJECTED"
                  )
                }

                className="
                  flex-1
                  bg-red-500
                  hover:bg-red-600
                  text-white
                  py-4
                  rounded-2xl
                  text-lg
                  font-semibold
                  transition
                  cursor-pointer
                "
              >

                Reject

              </button>

            </div>

          </div>

        </div>

      )}

    </div>
  );
}