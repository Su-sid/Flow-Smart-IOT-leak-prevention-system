// import React from "react";
import { Nav } from "react-bootstrap";
import { useNavigate, useLocation } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { name: "Status", path: "/status" },
    { name: "Pressure Level", path: "/pressure-level" },
    { name: "Flow Level", path: "/flow-level" },
    // Add more items as needed
  ];

  const handleSelect = (selectedKey) => {
    navigate(selectedKey);
  };

  return (
    <Nav
      className="flex-column sidebar"
      variant="pills"
      activeKey={location.pathname}
      onSelect={handleSelect}
    >
      {navItems.map((item) => (
        <Nav.Link eventKey={item.path} key={item.path}>
          {item.name}
        </Nav.Link>
      ))}
    </Nav>
  );
};

export default Sidebar;
