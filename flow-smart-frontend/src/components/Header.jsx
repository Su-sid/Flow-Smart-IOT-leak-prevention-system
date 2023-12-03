// import React from "react";
import { Button } from "react-bootstrap";

function Header() {
  return (
    <div className="d-flex justify-content-end">
      <Button variant="outline-secondary">Sign Out</Button>
      {/* Placeholder for user profile icon */}
      <div className="user-icon-placeholder" />
    </div>
  );
}

export default Header;
