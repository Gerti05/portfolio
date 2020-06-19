import React from "react"
import { Nav } from "react-bootstrap"
import { Link } from "gatsby"

const Navigation = () => {
  return (
    <Nav className="justify-content-center sticky-top" defaultActiveKey="#home">
      <Nav.Item>
        <Link to="#home" className="nav-link">
          About
        </Link>
      </Nav.Item>
      <Nav.Item>
        <div className="separator">/</div>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#form">Contact</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <div className="separator">/</div>
      </Nav.Item>
      <Nav.Item>
        <Link to="#work" className="nav-link">
          Projects
        </Link>
      </Nav.Item>
    </Nav>
  )
}

export default Navigation
