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
            className="project-icons-margin img-fluid fa-w-24"
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
            className="project-icons-margin img-fluid"
            src={icon}
            style={{ width: "2em", height: "2em" }}
          />
        ))}
      </>
    )
  } else if (props.iconImg && props.icons) {
    return (
      <>
        {props.iconImg.map(icon => (
          <Image
            className="project-icons-margin img-fluid"
            src={icon}
            style={{ width: "2em", height: "2em" }}
          />
        ))}
        {props.icons.map((icon, index) => (
          <FontAwesomeIcon
            key={index}
            icon={icon}
            className="project-icons-margin img-fluid fa-w-24"
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
