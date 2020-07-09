import React from "react"

import { Button, ButtonGroup } from "react-bootstrap"
import ProjectIcons from "./projectIcons"

export default function projectButtons(props) {
  if (props.githubLink && !props.websiteLink) {
    return (
      <div className="d-flex justify-content-center">
        <Button
          className="mt-3 codeBtn"
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
          className=" mt-3 webBtn"
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
        <ButtonGroup vertical>
        <Button
            className="mt-3 mr-2 codeBtn"
            href={props.githubLink}
            target="_blank"
          >
            {" "}
            Source Code
            <ProjectIcons buttonIcons={props.buttonIcons[0]} />
          </Button>
          <Button
            className="mt-3 webBtn"
            href={props.websiteLink}
            target="_blank"
          >
            {" "}
            Website
            <ProjectIcons buttonIcons={props.buttonIcons[1]} />
          </Button>
</ButtonGroup>
         
        </div>
      </div>
    )
  }
}
