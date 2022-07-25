import { useNavigate } from "react-router-dom";
import { TERTIARY_COLOR, TEXT_PRIMARY_COLOR } from "../../utils/colors";

export default function Logout() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };
  return (
    <div
      onClick={handleLogout}
      className={`flex flex-row my-0 mx-auto gap-2 w-fit items-center justify-between px-6 py-2 cursor-pointer ${TERTIARY_COLOR} rounded shadow-md mb-8`}
    >
      <p className={`font-poppins font-semibold ${TEXT_PRIMARY_COLOR}`}>Sair</p>
    </div>
  );
}
