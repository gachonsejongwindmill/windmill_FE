import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function LogoutButton() {
  const navigate = useNavigate();
  const { setToken } = useAuth();

  const handleLogout = async () => {
    const res = await fetch(
      "https://windmill-be-iqxx.onrender.com/auth/logout",
      {
        method: "POST",
        credentials: "include",
      }
    );

    if (res.ok) {
      localStorage.removeItem("token");
      setToken(null);
      window.location.href = "/";
    } else {
      alert("로그아웃 실패");
    }
  };

  return (
    <button
      onClick={handleLogout}
      className="bg-red-500 text-white px-4 py-2 rounded"
    >
      logout
    </button>
  );
}

export default LogoutButton;
