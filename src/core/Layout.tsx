import {Outlet} from "react-router-dom"
import Footer from "./Footer.tsx"
import Header from "./Header.tsx"
import {ToastContainer} from "react-toastify";

export default function Layout() {
    return (
        <>
            <Header/>
            <main>
                <Outlet/>
            </main>
            <Footer/>
            <ToastContainer/>
        </>
    )
}
