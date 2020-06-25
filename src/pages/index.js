import React from "react"
import Layout from "../components/layout"
import { Helmet } from "react-helmet"
import Avatar from "../components/avatar"

import { Image, Row, Col, Button } from "react-bootstrap"
import Summer1 from "../../public/projectPics/img/PurpleSummer1.jpg"
import Monster from "../../public/projectPics/img/monsterGame.jpg"
import Quote from "../../public/projectPics/img/Quotes.jpg"
import CalculatorApp from "../../public/projectPics/img/calculatorApp.jpg"
import SpaceX from "../../public/projectPics/img/spaceX.jpg"
import Stock from "../../public/projectPics/img/stockApp.jpg"
import Apollo from "../../public/projectPics/img/apollo.png"
import GraphQL from "../../public/projectPics/img/graphQL.png"
import Vue from "../../public/projectPics/img/vue.png"
import Vuetify from "../../public/projectPics/img/vuetify.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faBootstrap,
  faHtml5,
  faSass,
  faJsSquare,
  faReact,
  faCss3Alt,
  faGithubSquare,
} from "@fortawesome/free-brands-svg-icons"
import {
  faGlobe,
} from "@fortawesome/free-solid-svg-icons"
import Responsive from "../../public/animat-essential/responsive/animat-responsive-color.gif"
import Customize from "../../public/animat-essential/customize/animat-customize-color.gif"
import Optimized from "../../public/animat-essential/line-chart/animat-linechart-color.gif"
import favicon100 from "../../public/projectPics/img/favicon.png"

const IndexPage = () => {
  return (
    <Layout>
      <Helmet
        link={[
          {
            rel: "icon",
            type: "image/psd",
            size: "100x100",
            href: `${favicon100}`,
          },
        ]}
      ></Helmet>
      <div className="text-center m-0 flex-column">
        <Avatar />
      </div>
      <div>
        <article className="text-center intro">
          <h1 className="intro-h">Hi, I'm Gerti!</h1>
          <p className="intro-p">
            I'm a Front-End web developer with an incredible passion for
            programming, and with real world entrepreneurial web building
            experience.{" "}
          </p>
        </article>

        <div className="d-flex justify-content-center">
          <img className="icons" src={Responsive} alt="Responsive Design Gif" />
          <img
            className="icons"
            src={Customize}
            alt="Customizable Design Gif"
          />
          <img className="icons" src={Optimized} alt="Optimizable Design Gif" />
        </div>
        <div className="d-flex justify-content-center">
          <p className="icon-p">Responsive</p>
          <p className="icon-p">Customized</p>
          <p className="icon-p">Optimized</p>
        </div>
        <div className="d-flex justify-content-center">
          <p className="icon-p2">Design</p>
          <p className="icon-p2">Layout</p>
          <p id="work" className="icon-p2">
            Pages
          </p>
        </div>

        <div className="mt-5 text-center">
          <h1 className="intro-h">Projects</h1>
        </div>
        <div className="d-flex justify-content-around">
          <Row>
            <Col xs={12} s={12} md={6} lg={6} className="work container1">
              <Image
                className="image"
                rounded
                fluid
                src={Summer1}
                alt="PurpleSummer Website"
              />
              <div className="overlay">
                <div className="text">
                  <h4 className="project-h mb-3 text-center">Purple Summer</h4>
                  <p className="text-center project-p mb-4">
                    This is a demo website that{<br />}demonstrates a landing
                    page for a{<br />}
                    fictional ice cream company.{<br />}
                  </p>
                  <div className="d-flex justify-content-center">
                    <Button
                      className="source-btn mt-3"
                      href="https://github.com/Gunner05/PurpleSummer"
                      target="_blank"
                    >
                      {" "}
                      Source Code
                      <FontAwesomeIcon
                        className="media-link-icons ml-1"
                        icon={faGithubSquare}
                        size="lg"
                      />
                    </Button>
                  </div>
                </div>
              </div>
              <div className="project-detail-background d-flex justify-content-around">
                <FontAwesomeIcon
                  icon={faBootstrap}
                  className="project-icons-margin img-fluid"
                  size="2x"
                  style={{ color: "#5c3e86" }}
                />
                <FontAwesomeIcon
                  icon={faHtml5}
                  className="project-icons-margin img-fluid"
                  size="2x"
                  style={{ color: "#ef652a" }}
                />
                <FontAwesomeIcon
                  icon={faSass}
                  className="project-icons-margin img-fluid"
                  size="2x"
                  style={{ color: "#cd6799" }}
                />
                <FontAwesomeIcon
                  icon={faJsSquare}
                  className="project-icons-margin img-fluid"
                  size="2x"
                  style={{ color: "#f7df1e" }}
                />
              </div>
            </Col>
            <Col xs={12} s={12} md={6} lg={6} className="work container1">
              <Image
                className="image"
                rounded
                fluid
                src={CalculatorApp}
                alt="Video App website"
              />
              <div className="overlay">
                <div className="text">
                  <h4 className="project-h mb-3 text-center">Calculator App</h4>
                  <p className="text-center project-p mb-4">
                    This is a calculator app{<br />} I tried to model it after
                    the{<br />} Microsoft Windows calculator.{<br />} It is not
                    100% finished so if{<br />} you find any bugs please{<br />}{" "}
                    let me know.
                  </p>
                  <div className="d-flex justify-content-center">
                    <Button
                      className="source-btn mt-3"
                      href="https://github.com/Gunner05/calculator"
                      target="_blank"
                    >
                      {" "}
                      Source Code
                      <FontAwesomeIcon
                        className="media-link-icons ml-1"
                        icon={faGithubSquare}
                        size="lg"
                      />
                    </Button>
                  </div>
                </div>
              </div>
              <div className="project-detail-background d-flex justify-content-around">
                <FontAwesomeIcon
                  icon={faBootstrap}
                  className="project-icons-margin img-fluid"
                  size="2x"
                  style={{ color: "#5c3e86" }}
                />
                <FontAwesomeIcon
                  icon={faHtml5}
                  className="project-icons-margin img-fluid"
                  size="2x"
                  style={{ color: "#ef652a" }}
                />
                <FontAwesomeIcon
                  icon={faCss3Alt}
                  className="project-icons-margin img-fluid"
                  size="2x"
                  style={{ color: "#2965f1" }}
                />
                <FontAwesomeIcon
                  icon={faJsSquare}
                  className="project-icons-margin img-fluid"
                  size="2x"
                  style={{ color: "#f7df1e" }}
                />
                <FontAwesomeIcon
                  icon={faReact}
                  className="project-icons-margin img-fluid"
                  size="2x"
                  style={{ color: "#00d8ff" }}
                />
              </div>
            </Col>
          </Row>
        </div>
        <div className="d-flex justify-content-between">
          <Row>
            <Col xs={12} s={12} md={6} lg={6} className="work container1">
              <Image
                className="image"
                rounded
                fluid
                src={Quote}
                alt="Random Quote Machine"
              />
              <div className="overlay">
                <div className="text">
                  <h4 className="project-h mb-3 text-center">
                    Quote Generator
                  </h4>
                  <p className="text-center project-p mb-4">
                    This is a random quote{<br />} generator. Once you find a
                    {<br />}quote that you like, you {<br />}
                    can tweet it!{<br />}
                  </p>
                  <div className="d-flex justify-content-center">
                    <Button
                      className="source-btn mt-3"
                      href="https://github.com/Gunner05/Quotes"
                      target="_blank"
                    >
                      {" "}
                      Source Code
                      <FontAwesomeIcon
                        className="media-link-icons ml-1"
                        icon={faGithubSquare}
                        size="lg"
                      />
                    </Button>
                  </div>
                </div>
              </div>
              <div className="project-detail-background d-flex justify-content-around">
                <FontAwesomeIcon
                  icon={faBootstrap}
                  className="project-icons-margin img-fluid"
                  size="2x"
                  style={{ color: "#5c3e86" }}
                />
                <FontAwesomeIcon
                  icon={faHtml5}
                  className="project-icons-margin img-fluid"
                  size="2x"
                  style={{ color: "#ef652a" }}
                />
                <FontAwesomeIcon
                  icon={faSass}
                  className="project-icons-margin img-fluid"
                  size="2x"
                  style={{ color: "#cd6799" }}
                />
                <FontAwesomeIcon
                  icon={faJsSquare}
                  className="project-icons-margin img-fluid"
                  size="2x"
                  style={{ color: "#f7df1e" }}
                />
                <FontAwesomeIcon
                  icon={faReact}
                  className="project-icons-margin img-fluid"
                  size="2x"
                  style={{ color: "#00d8ff" }}
                />
              </div>
            </Col>
            <Col xs={12} s={12} md={6} lg={6} className="work container1">
              <Image
                className="image"
                rounded
                fluid
                src={Monster}
                alt="Monster Game"
              />
              <div className="overlay">
                <div className="text">
                  <h4 className="project-h mb-3 text-center">Monster Game</h4>
                  <p className="text-center project-p mb-4">
                    This is called the Monster Game.{<br />} This is a quasi fighting 
                    game.{<br />}The objective is to attack and{<br />} 
                    bring the monsters health to zero.{<br />}
                  </p>
                  <div className="d-flex justify-content-center">
                    <Button
                      className="source-btn mt-3"
                      href="https://github.com/Gerti05/monster-game"
                      target="_blank"
                    >
                      {" "}
                      Source Code
                      <FontAwesomeIcon
                        className="media-link-icons ml-1"
                        icon={faGithubSquare}
                        size="lg"
                      />
                    </Button>
                  </div>
                  <div className="d-flex justify-content-center">
                  <Button
                      className="source-btn mt-3"
                      target="_blank"
                      href="https://stoic-thompson-ece060.netlify.app/"
                    >
                      Website
                      <FontAwesomeIcon
                        className="media-link-icons ml-1"
                        icon={faGlobe}
                        size="lg"
                      />
                    </Button>
                  </div>
                </div>
              </div>
              <div className="project-detail-background d-flex justify-content-around">
              <Image
                  className="project-icons-margin mt-4 img-fluid"
                  src={Vue}
                  style={{ width: "35px", height: "35px", color: "red" }}
                />
                <Image
                  className="project-icons-margin mt-4 img-fluid"
                  src={Vuetify}
                  style={{ width: "35px", height: "35px", color: "red" }}
                />
                <FontAwesomeIcon
                  icon={faCss3Alt}
                  className="project-icons-margin img-fluid"
                  size="2x"
                  style={{ color: "#2965f1" }}
                />
              </div>
            </Col>
            <Col xs={12} s={12} md={6} lg={6} className="work container1">
              <Image
                className="image"
                rounded
                fluid
                src={SpaceX}
                alt="SpaceX Launches Detail Site"
              />
              <div className="overlay">
                <div className="text">
                  <h4 className="project-h mb-3 text-center">SpaceX App</h4>
                  <p className="text-center project-p mb-4">
                    This website uses the SpaceX{<br />} api to give the details
                    {<br />} about it's rocket launches.{<br />}
                    It uses React, Apollo, and Graphql.{<br />}
                  </p>
                  <div className="d-flex justify-content-center">
                    <Button
                      className="source-btn mt-3"
                      href="https://github.com/Gunner05/spaceX_app"
                      target="_blank"
                    >
                      {" "}
                      Source Code
                      <FontAwesomeIcon
                        className="media-link-icons ml-1"
                        icon={faGithubSquare}
                        size="lg"
                      />
                    </Button>
                  </div>
                </div>
              </div>
              <div className="project-detail-background d-flex justify-content-around">
                <FontAwesomeIcon
                  icon={faBootstrap}
                  className="project-icons-margin img-fluid"
                  size="2x"
                  style={{ color: "#5c3e86" }}
                />
                <FontAwesomeIcon
                  icon={faReact}
                  className="project-icons-margin img-fluid"
                  size="2x"
                  style={{ color: "#00d8ff" }}
                />
                <Image
                  className="project-icons-margin mt-4 img-fluid"
                  src={Apollo}
                  style={{ width: "35px", height: "35px", color: "red" }}
                />
                <Image
                  className="project-icons-margin mt-4 img-fluid"
                  src={GraphQL}
                  style={{ width: "35px", height: "35px", color: "red" }}
                />
              </div>
            </Col>
            <Col xs={12} s={12} md={6} lg={6} className="work container1">
              <Image
                className="image"
                rounded
                fluid
                src={Stock}
                alt="Stock lookup app"
              />
              <div className="overlay">
                <div className="text">
                  <h4 className="project-h mb-3 text-center">StockEZe App</h4>
                  <p className="text-center project-p mb-4">
                    This website uses an api{<br />} to give the best metrics
                    for
                    {<br />} picking stocks. It gives you{<br />}
                    all the most important information.{<br />} without the
                    unneeded info.
                  </p>
                  <div className="d-flex justify-content-center">
                    <Button
                      className="source-btn mt-3"
                      href="https://github.com/Gunner05/stockapp"
                      target="_blank"
                    >
                      {" "}
                      Source Code
                      <FontAwesomeIcon
                        className="media-link-icons ml-1"
                        icon={faGithubSquare}
                        size="lg"
                      />
                    </Button>
                  </div>
                  <div className="d-flex justify-content-center">
                  <Button
                      className="source-btn mt-3"
                      target="_blank"
                      href="https://flamboyant-ride-48c833.netlify.com/"
                    >
                      Website
                      <FontAwesomeIcon
                        className="media-link-icons ml-1"
                        icon={faGlobe}
                        size="lg"
                      />
                    </Button>
                  </div>
                </div>
              </div>
              <div className="project-detail-background d-flex justify-content-around">
                <FontAwesomeIcon
                  icon={faBootstrap}
                  className="project-icons-margin img-fluid"
                  size="2x"
                  style={{ color: "#5c3e86" }}
                />
                <FontAwesomeIcon
                  icon={faReact}
                  className="project-icons-margin img-fluid"
                  size="2x"
                  style={{ color: "#00d8ff" }}
                />
                <FontAwesomeIcon
                  icon={faCss3Alt}
                  className="project-icons-margin img-fluid"
                  size="2x"
                  style={{ color: "#2965f1" }}
                />
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
