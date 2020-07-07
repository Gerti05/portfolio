import React from "react"

import { Button } from "react-bootstrap"
import ProjectIcons from "./projectIcons"

export default function projectButtons(props) {
  if (props.githubLink && !props.websiteLink) {
    return (
      <div className="d-flex justify-content-center">
        <Button
          variant="danger"
          className="mt-3"
          href={props.githubLink}
          target="_blank"
        >
          {" "}
          Source Code
          <ProjectIcons buttonIcons={props.buttonIcons} />
        </Button>
      </div>
    )
  } else if (!props.githubLink && props.websiteLink) {
    return (
      <div className="d-flex justify-content-center">
        <Button
          variant="dark"
          className=" mt-3"
          href={props.websiteLink}
          target="_blank"
        >
          {" "}
          Website
          <ProjectIcons buttonIcons={props.buttonIcons} />
        </Button>
      </div>
    )
  } else if (props.githubLink && props.websiteLink) {
    return (
      <div>
        <div className="d-flex justify-content-center">
          <Button
            variant="warning"
            className="mt-3 mr-2"
            href={props.githubLink}
            target="_blank"
          >
            {" "}
            Source Code
            <ProjectIcons buttonIcons={props.buttonIcons[0]} />
          </Button>
          <Button
            variant="light"
            className="mt-3"
            href={props.websiteLink}
            target="_blank"
          >
            {" "}
            Website
            <ProjectIcons buttonIcons={props.buttonIcons[1]} />
          </Button>
        </div>
      </div>
    )
  }
}
