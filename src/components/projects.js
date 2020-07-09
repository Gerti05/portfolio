import React from "react"

import { Image } from "react-bootstrap"
import ProjectIcons from "./projectIcons"
import ProjectButtons from "./projectButtons"

export default function projects(props) {
  return (
    <div>
      <div class="overlayContainer">
      <Image
        className="image"
        rounded
        fluid
        src={props.image}
        alt={props.name}
      />
      <div className="overlay2"></div>
      <div className="overlay">
        <h4 className="text-center project-h">{props.name}</h4>
        <p className="text-center mb-2 project-p">{props.text}</p>
        
    <ProjectButtons
          githubLink={props.githubLink}
          buttonIcons={props.buttonIcons}
          websiteLink={props.websiteLink}
        />
    
        
      </div>
      </div>
      <div className="project-detail-background d-flex justify-content-around">
        <ProjectIcons
          icons={props.icons}
          iconColor={props.iconColor}
          iconImg={props.iconImg}
        />
      </div>
    </div>
  )
}
