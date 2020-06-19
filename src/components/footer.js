import React from "react"
import { Nav } from "react-bootstrap"
import {
  faLinkedin,
  faGithubSquare,
} from "@fortawesome/free-brands-svg-icons"
import { faCopyright } from "@fortawesome/free-regular-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Footer = () => {
  return (
    <Nav className="d-flex justify-content-center media-link" activeKey="none">
      <Nav.Item>
        <Nav.Link
          href="https://www.linkedin.com/in/gerti-goga-648ba9155/"
          target="-blank"
        >
          <FontAwesomeIcon
            className="media-link-icons"
            icon={faLinkedin}
            size="lg"
          />
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="https://github.com/Gunner05" target="_blank">
          <FontAwesomeIcon
            className="media-link-icons"
            icon={faGithubSquare}
            size="lg"
          />
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link>
          <FontAwesomeIcon icon={faCopyright} size="lg" /> 2019
        </Nav.Link>
      </Nav.Item>
    </Nav>
  )
}

export default Footer
