import { useState } from "react";
import {
    IoEyeOffOutline,
    IoEyeOutline,
    IoKeyOutline,
    IoMailOutline,
} from "react-icons/io5";
import { NavLink, useNavigate } from "react-router-dom";
import "./auth.css";

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="flex h-screen">
            {/* Bienvenida */}
            <div className="w-1/2">
                <img
                    src="https://hips.hearstapps.com/hmg-prod/images/hyde-park-royalty-free-image-1658404269.jpg"
                    className="w-full h-full object-cover"
                    alt=""
                />
            </div>

            {/* Formulario */}
            <div className="w-full flex flex-col items-center justify-center">
                <h1 className="mb-12 text-2xl font-bold">
                    <span className="text-indigo-500">
                        Inicia Sesión y Administra
                    </span>{" "}
                    tus Pacientes
                </h1>
                <form className="flex flex-col gap-y-4 w-[50%]">
                    <div className="flex items-center gap-x-4 border border-gray-300 rounded-lg px-4 outline-none cursor-text">
                        <IoMailOutline className="text-2xl" />
                        <input
                            type="email"
                            className="w-full outline-none py-4"
                            placeholder="Correo electrónico"
                        />
                    </div>
                    <div className="flex items-center gap-x-4 border border-gray-300 rounded-lg px-4 outline-none cursor-text">
                        <IoKeyOutline className="text-2xl" />
                        <input
                            type={showPassword ? "text" : "password"}
                            className="w-full outline-none py-4 no-show-password-icon"
                            placeholder="Contraseña"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        {/* Mostrar contraseña */}
                        {password &&
                            (showPassword ? (
                                <IoEyeOutline
                                    className="text-2xl cursor-pointer"
                                    onClick={handleShowPassword}
                                />
                            ) : (
                                <IoEyeOffOutline
                                    className="text-2xl cursor-pointer"
                                    onClick={handleShowPassword}
                                />
                            ))}
                    </div>
                    <div className="w-full flex justify-end">
                        <NavLink
                            to={"forgot-password"}
                            className="hover:text-indigo-600 hover:underline"
                        >
                            ¿Olvidaste la contraseña?
                        </NavLink>
                    </div>
                    <button
                        className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
                        onClick={() => {
                            navigate("/dashboard");
                        }}
                    >
                        Ingresar
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;
