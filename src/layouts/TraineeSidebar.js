import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Button, Nav, NavItem } from "reactstrap";
import Logo from "./Logo";

const navigation = [
 
  {
    title: "Dashboard",
    href: "/trainee/dashboard",
    icon: "bi bi-hdd-stack",
  },
  {
    title: "Cards", 
    href: "/cards",
    icon: "bi bi-card-text",
  },
  {
    title: "Grid",
    href: "/grid",
    icon: "bi bi-columns",
  },
  {
    title: "Table",
    href: "/table",
    icon: "bi bi-layout-split",
  },
   {
    title: "Batch",
    href: "/about",
    icon: "bi bi-people",
  },
];


const TraineeSidebar = () => {
  const showMobilemenu = () => {
    document.getElementById("sidebarArea").classList.toggle("showSidebar");
  };
  let location = useLocation();

  return (
    <div className="sticky-top" style={{ top: "0" }}>
      <div className="p-3">
        <div className="d-flex align-items-center">
          <Logo />
          <span className="ms-auto d-lg-none">
            <Button
              close
              size="sm"
              className="ms-auto d-lg-none"
              onClick={() => showMobilemenu()}
            ></Button>
          </span>
        </div>
        <div className="pt-4 mt-2">
          <Nav vertical className="sidebarNav">
            {navigation.map((navi, index) => (
              <NavItem key={index} className="sidenav-bg">
                <Link
                  to={navi.href}
                  className={
                    location.pathname === navi.href
                      ? "text-primary nav-link py-3"
                      : "nav-link text-secondary py-3"
                  }
                >
                  <i className={navi.icon}></i>
                  <span className="ms-3 d-inline-block">{navi.title}</span>
                </Link>
              </NavItem>
            ))}
            <Button
              color="danger"
              tag="a"
              target="_blank"
              className="mt-3"
              href="https://www.wrappixel.com/templates/xtreme-react-redux-admin/?ref=33"
            >
              Upgrade To Pro
            </Button>
          </Nav>
        </div>
      </div>
    </div>
  );
};

export default TraineeSidebar;

