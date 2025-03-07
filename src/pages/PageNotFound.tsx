import { useEffect } from "react";
import { useNavigate } from "react-router";

const NotFound = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to /stores after 3 seconds
    const timer = setTimeout(() => {
      navigate("/stores");
    }, 3000);

    return () => clearTimeout(timer); // Cleanup the timer
  }, [navigate]);

  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <h1 className="text-4xl font-bold text-red-500">404 - Page Not Found</h1>
      <p className="text-gray-600 mt-2">Redirecting to stores...</p>
    </div>
  );
};

export default NotFound;
