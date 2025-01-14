import { Link, Outlet } from "react-router-dom"
import NavBar from "./NavBar"

const Applayout = () => {
    return (<>

        <div style={{ border: '2px solid black' }}>
            _____________________________________
            <NavBar />
            <div></div>

            <Outlet />
            <div></div>
            ____________________________________

        </div>
    </>)
}
export default Applayout