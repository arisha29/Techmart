import { useState } from "react";
import "./admin.css";
import { Image } from "react-bootstrap";
import logo from "../../../Images/Logo.png";
import { MdOutlineDashboard } from "react-icons/md";
import { IoChevronBack } from "react-icons/io5";
import { CiCircleList } from "react-icons/ci";
import { HiMiniGiftTop } from "react-icons/hi2";
import { MdOutlineAddCircle, MdCategory } from "react-icons/md";
import { FaBagShopping } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

const SideBar = () => {
  const [isSidebarShow, setIsSidebarShow] = useState(true);
  const [productsDropdown, setproductsDropdown] = useState(false);
  const [categoryDropdown, setcategoryDropdown] = useState(false);

  // toggle for sidebar
  const toggleSidebar = () => {
    setIsSidebarShow(!isSidebarShow);
  };

  const toggleProductsDropdown=()=>{
    setproductsDropdown((prevState)=>!prevState);
  };

   const toggleCategoryDropdown = () => {
     setcategoryDropdown((prevState) => !prevState);
   };

  return (
    <>
      {/* <!--wrapper--> */}
      <div className={`wrapper sidebar ${isSidebarShow ? "open" : "closed"}`}>
        {/* <!--sidebar wrapper --> */}
        <div
          className={`sidebar-wrapper ${isSidebarShow ? "open" : "closed"}`}
          data-simplebar="true"
        >
          <div className="sidebar-header">
            <div>
              <Image src={logo} width={50} />
            </div>
            <div>
              <h4 className="logo-text">Techmart</h4>
            </div>
            <div className="toggle-icon ms-auto" onClick={toggleSidebar}>
              <IoChevronBack
                color="#29456B"
                fontSize={25}
                className={isSidebarShow ? "rotate-180" : ""}
              />
            </div>
          </div>
          <ul className="metismenu" id="menu">
            <li>
              <a href="#" className="d-flex align-items-center gap-2">
                <MdOutlineDashboard color="#29456B" fontSize={25} />
                <span>Dashboard</span>
              </a>
            </li>
            <hr />
            <li>
              <a
                href="ecommerce-orders.html"
                className="d-flex align-items-center gap-2"
              >
                <HiMiniGiftTop color="#29456B" fontSize={25} />
                <span>Orders</span>
              </a>
            </li>
            <hr />
            <li>
              <a
                href="#"
                className={`has-arrow ${productsDropdown ? "open" : ""}`}
                onClick={toggleProductsDropdown}
              >
                <FaBagShopping color="#29456B" fontSize={20} />
                <div className="menu-title">Products</div>
              </a>
              {productsDropdown && (
                <ul>
                  <li>
                    <NavLink to="/all-products" className="gap-2">
                      <CiCircleList color="#29456B" fontSize={20} />
                      <span>All Products</span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/add-new-product" className="gap-2">
                      <MdOutlineAddCircle color="#29456B" fontSize={20} />
                      <span>Add New Product</span>
                    </NavLink>
                  </li>
                </ul>
              )}
            </li>
            <hr />
            <li>
              <a
                href="#"
                className={`has-arrow ${categoryDropdown ? "open" : ""}`}
                onClick={toggleCategoryDropdown}
              >
                <MdCategory color="#29456B" fontSize={20} />
                <div className="menu-title">Categories</div>
              </a>
              {categoryDropdown && (
                <ul>
                  <li>
                    <NavLink to="/all-categories" className="gap-2">
                      <CiCircleList color="#29456B" fontSize={20} />
                      <span>All Categories</span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/add-new-category" className="gap-2">
                      <MdOutlineAddCircle color="#29456B" fontSize={20} />
                      <span>Add New Category</span>
                    </NavLink>
                  </li>
                </ul>
              )}
            </li>
          </ul>
        </div>
      </div>

      {/* Styling for sidebar */}
      <style>{`
        .wrapper {
          display: flex;
        }
        .sidebar-wrapper {
          width: 250px;
          transition: all 0.3s ease;
          overflow: hidden;
        }
        .sidebar-wrapper.closed {
          width: 0px;
        }
        .toggle-icon {
          cursor: pointer;
        }
        .rotate-180 {
          transform: rotate(180deg);
          transition: transform 0.3s ease;
        }
      `}</style>
    </>
  );
};

export default SideBar;
