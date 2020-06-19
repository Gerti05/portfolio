import React from "react"
import Footer from "./footer"
import Navbar from "./navbar"
import Contact from "./contact"
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { Container } from "react-bootstrap"
import "../styles/index.scss"

const Layout = props => {
  return (
    <div>
      <Container>
        <Navbar id="home" />
        {props.children}
        <Contact />
        <Footer />
      </Container>
    </div>
  )
}

export default Layout
