import { Image } from "react-bootstrap";
import logo from "../../../Images/Logo.png";
import { MdOutlineDashboard } from "react-icons/md";
import { IoChevronBack } from "react-icons/io5";
import { CiCircleList } from "react-icons/ci";
import { HiMiniGiftTop } from "react-icons/hi2";
import { MdOutlineAddCircle } from "react-icons/md";


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
              <IoChevronBack color="#29456B" fontSize={25} />
            </div>
          </div>
          <ul className="metismenu" id="menu">
            <li>
              <a href="#" className="d-flex align-items-center gap-2">
                {/* <div className="menu"> */}
                <MdOutlineDashboard color="#29456B" fontSize={25} />
                <span>Dashboard</span>
                {/* </div> */}
              </a>
            </li>
            <hr />
            <li>
              <a
                href="ecommerce-products.html"
                className="d-flex align-items-center gap-2"
              >
                <CiCircleList color="#29456B" fontSize={25} />
                <span>Products</span>
              </a>
            </li>
            <hr />
            
            <li>
              <a
                href="ecommerce-add-new-products.html"
                className="d-flex align-items-center gap-2"
              >
                <MdOutlineAddCircle color="#29456B" fontSize={25} />
                <span>Add New Products</span>
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
          </ul>
        </div>
      </div>
    </>
  );
};

export default SideBar;
