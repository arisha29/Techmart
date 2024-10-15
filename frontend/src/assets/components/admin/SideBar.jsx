import { Image } from "react-bootstrap";
import logo from "../../Images/Logo.png";
import { MdOutlineDashboard } from "react-icons/md";
import { IoChevronBack } from "react-icons/io5";

const SideBar = () => {
  return (
    <>
      {/* <!--wrapper--> */}
      <div className="wrapper">
        {/* <!--sidebar wrapper --> */}
        <div className="sidebar-wrapper" data-simplebar="true">
          <div className="sidebar-header">
            <div>
              <Image src={logo} width={50} />
            </div>
            <div>
              <h4 className="logo-text">Techmart</h4>
            </div>
            <div className="toggle-icon ms-auto">
              <IoChevronBack />
            </div>
          </div>
          <ul className="metismenu" id="menu">
            <li>
              <a href="#" className="">
                <div className="menu">
                  <MdOutlineDashboard />
                  <span>Dashboard</span>
                </div>
              </a>
            </li>

            <li>
              <a href="ecommerce-products.html">Products</a>
            </li>
            <li>
              <a href="ecommerce-products-details.html">Product Details</a>
            </li>
            <li>
              <a href="ecommerce-add-new-products.html">Add New Products</a>
            </li>
            <li>
              <a href="ecommerce-orders.html">Orders</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default SideBar;
