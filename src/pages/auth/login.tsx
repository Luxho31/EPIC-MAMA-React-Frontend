const Login = () => {
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
                <h1 className="mb-6">
                    Inicia Sesión y Administra tus Pacientes
                </h1>
                <form className="flex flex-col gap-y-4 w-[50%]">
                    <input
                        type="email"
                        className="border border-gray-300 outline-none"
                        placeholder="Correo electrónico"
                    />
                    <input
                        type="password"
                        className="border border-gray-300 outline-none"
                        placeholder="Contraseña"
                    />
                    <button className="bg-blue-500 text-white px-4 py-2 rounded">
                        Ingresar
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;
