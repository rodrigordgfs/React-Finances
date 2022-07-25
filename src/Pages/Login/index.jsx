import { useEffect } from "react";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import { isLogedIn, signInWithGoogle } from "../../adapters/firebase";
import Logo from "../../Components/Logo";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import {
  PRIMARY_COLOR,
  TERTIARY_COLOR,
  TEXT_PRIMARY_COLOR
} from "../../utils/colors";

export default function Login() {
  useLocalStorage("theme", "light");
  const navigate = useNavigate();

  useEffect(() => {
    if (isLogedIn()) {
      navigate("/");
    }
  }, []);

  const handleLogin = () => {
    signInWithGoogle().then(() => {
      const user = JSON.parse(localStorage.getItem("user")) || null;
      console.log(user);
      if (user?.uid) {
        navigate("/");
      }
    });
  };

  return (
    <div className={`${PRIMARY_COLOR} h-screen flex flex-col`}>
      <div className="flex flex-col gap-4 items-center justify-center my-0 mx-auto h-full">
        <Logo />
        <div
          onClick={handleLogin}
          className={`flex flex-row gap-2 items-center justify-between px-4 py-2 cursor-pointer ${TERTIARY_COLOR} rounded shadow-md`}
        >
          <FcGoogle size={24} />
          <p className={`font-poppins ${TEXT_PRIMARY_COLOR}`}>
            Entrar com o Google
          </p>
        </div>
      </div>
    </div>
  );
}
