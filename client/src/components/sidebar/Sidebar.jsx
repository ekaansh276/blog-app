import { useEffect, useState } from "react"
import "./sidebar.css"
import axios from "axios";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

export default function Sidebar() {
    const [cats, setCats] = useState([]);

    useEffect(() => {
        const getCats = async () => {
            const res = await axios.get("/categories")
            setCats(res.data)
        }
        getCats();
    }, [])
    return (
        <div className="sidebar">
            <div className="sidebarItem">
                <span className="sidebarTitle">ABOUT ME</span>
                <img src="https://i.pinimg.com/control/564x/4e/a1/a4/4ea1a42cd668f843cfba6a2297d565fd.jpg" alt=""
                    height="200px" width="200px" />
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam, libero eius! Natus porro esse laborum ad maiores eius dolorem tenetur.</p>
            </div>

            <div className="sidebarItem">
                <span className="sidebarTitle">CATEGORIES</span>
                <ul className="sidebarList">
                    {cats.map((c) => (
                        <Link to={`/?cat=${c.name}`} className="link">
                            <li className="sidebarListItem">{c.name}</li>
                        </Link>

                    ))}
                </ul>
            </div>
            <span className="sidebarItem">FOLLOW US</span>
            <div className="sidebarSocial">
                <i className="sidebarIcon fa-brands fa-square-facebook"></i>
                <i className="sidebarIcon fa-brands fa-square-twitter"></i>
                <i className="sidebarIcon fa-brands fa-square-pinterest"></i>
                <i className="sidebarIcon fa-brands fa-square-instagram"></i>
            </div>
        </div>
    )
}
