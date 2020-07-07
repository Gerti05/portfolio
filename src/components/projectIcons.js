import React from "react"

import { Spinner, Image } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function projectIcons(props) {
  if (props.buttonIcons) {
    return (
      <FontAwesomeIcon
        className="ml-1"
        icon={props.buttonIcons}
        size="lg"
      />
    )
  } else if (props.icons && !props.iconImg) {
    return (
      <>
        {props.icons.map((icon, index) => (
          <FontAwesomeIcon
            key={index}
            icon={icon}
            className="project-icons-margin img-fluid"
            size="2x"
            style={{ color: props.iconColor[index] }}
          />
        ))}
      </>
    )
  } else if (props.iconImg && !props.icons) {
    return (
      <>
        {props.iconImg.map(icon => (
          <Image
            className="project-icons-margin mt-4 img-fluid"
            src={icon}
            style={{ width: "35px", height: "35px", color: "red" }}
          />
        ))}
      </>
    )
  } else if (props.iconImg && props.icons) {
    return (
      <>
        {props.iconImg.map(icon => (
          <Image
            className="project-icons-margin mt-4 img-fluid"
            src={icon}
            style={{ width: "35px", height: "35px", color: "red" }}
          />
        ))}
        {props.icons.map((icon, index) => (
          <FontAwesomeIcon
            key={index}
            icon={icon}
            className="project-icons-margin img-fluid"
            size="2x"
            style={{ color: props.iconColor[index] }}
          />
        ))}
      </>
    )
  } else {
    return <Spinner className="mt-4" animation="border" variant="warning" />
  }
}
