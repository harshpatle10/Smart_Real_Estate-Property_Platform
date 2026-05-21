const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-blue-700 text-white p-5">
      <h1 className="text-3xl font-bold mb-10">
        e-Nagar
      </h1>

      <div className="space-y-4">
        <button className="block w-full text-left">
          Dashboard
        </button>

        <button className="block w-full text-left">
          Applications
        </button>

        <button className="block w-full text-left">
          Reports
        </button>
      </div>
    </div>
  );
};

export default Sidebar;