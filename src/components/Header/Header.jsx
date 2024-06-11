import { useRef, useState, useEffect } from "react";
import { NavLink ,Link } from "react-router-dom";
import { IoIosMenu, IoMdClose } from "react-icons/io";
import { IoCartOutline, IoHomeOutline } from "react-icons/io5";
import {
  MdRestaurantMenu,
  MdOutlineConnectWithoutContact,
} from "react-icons/md";
import logo from "../../images/logo.png";
import "./Header.css";

function Header() {
  const [scroll, setScroll] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const sidebarRef = useRef(null);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const scrollToTheTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", 
    });
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
    scrollToTheTop();
  };

  const handleClickOutside = (event) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
      setIsSidebarOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isSidebarOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isSidebarOpen]);

  return (
    <>
      <header className={`${scroll ? "custom-scroll" : "bgTransparent"}`}>
        <nav className="flex justify-center items-center w-full">
          <Link to="/" className="mr-auto" onClick={scrollToTheTop}>
          <img src={logo} alt="logo" className="mr-auto" />
              </Link>
          <div className="text-xl navContent">
            <NavLink
              className={({ isActive }) =>
                "px-6 navOptions" + (isActive ? " navActive" : "")
              }
              to="/"
              end
            >
              Home
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                "px-6 navOptions" + (isActive ? " navActive" : "")
              }
              to="/menu"
            >
              Menu
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                "px-6 navOptions" + (isActive ? " navActive" : "")
              }
              to="/cart"
            >
              Cart
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                "px-6 navOptions" + (isActive ? " navActive" : "")
              }
              to="/contact"
            >
              Contact
            </NavLink>
          </div>
          <button className="sidebarMenu" onClick={toggleSidebar}>
            <IoIosMenu />
          </button>
        </nav>
      </header>
      <aside
        ref={sidebarRef}
        className={`sidebar ${isSidebarOpen ? "open" : ""}`}
      >
        <button className="closebtn" onClick={toggleSidebar}>
          <IoMdClose />
        </button>
        <nav className="sidebar-content">
          <NavLink
            to="/"
            className={({ isActive }) =>
              "sidebarOptions" + (isActive ? " sideNavActive" : "")
            }
            end
            onClick={closeSidebar}
          >
            <IoHomeOutline />
            Home
          </NavLink>
          <NavLink
            to="/menu"
            className={({ isActive }) =>
              "sidebarOptions" + (isActive ? " sideNavActive" : "")
            }
            onClick={closeSidebar}
          >
            <MdRestaurantMenu />
            Menu
          </NavLink>
          <NavLink
            to="/cart"
            className={({ isActive }) =>
              "sidebarOptions" + (isActive ? " sideNavActive" : "")
            }
            onClick={closeSidebar}
          >
            <IoCartOutline />
            Cart
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              "contact sidebarOptions" + (isActive ? " sideNavActive" : "")
            }
            onClick={closeSidebar}
          >
            <MdOutlineConnectWithoutContact />
            Contact
          </NavLink>
        </nav>
      </aside>
    </>
  );
}

export default Header;
