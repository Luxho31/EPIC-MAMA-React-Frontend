import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthLayout from "./layouts/AuthLayout";
import Login from "./pages/auth/login";
import Register from "./pages/auth/register";
import DashboardLayout from "./layouts/DashboardLayout";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<AuthLayout />}>
                    <Route index element={<Login />} />
                    <Route path="register" element={<Register />} />
                </Route>
                <Route path="/dashboard" element={<DashboardLayout />}>
                    {/* <Route index element={<Login />} />
                    <Route path="register" element={<Register />} /> */}
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
