import Header from "./Header";
import { Outlet } from "react-router-dom";
import Cookies from "universal-cookie";
export default function Layout() {

    return (
        <main>
            <Header />
            <Outlet />
        </main>
    );
}