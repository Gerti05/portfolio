import React, { Component } from "react"
import Layout from "../components/layout"
import { Helmet } from "react-helmet"
import Avatar from "../components/avatar"

import { Row, Col } from "react-bootstrap"

import Summer1 from "../../public/projectPics/img/PurpleSummer1.jpg"
import Monster from "../../public/projectPics/img/monsterGame.jpg"
import Quote from "../../public/projectPics/img/Quotes.jpg"
import Covid19 from "../../public/projectPics/img/covidworldata.jpg"
import SpaceX from "../../public/projectPics/img/spaceX.jpg"
import Stock from "../../public/projectPics/img/stockApp.jpg"
import MailMore from "../../public/projectPics/img/mailmorelv.jpg"
import Apollo from "../../public/projectPics/img/apollo.png"
import GraphQL from "../../public/projectPics/img/graphQL.png"
import Redux from "../../public/projectPics/img/redux.png"
import Vue from "../../public/projectPics/img/vue.png"
import Vuetify from "../../public/projectPics/img/vuetify.png"

import {
  faBootstrap,
  faHtml5,
  faSass,
  faJsSquare,
  faReact,
  faCss3Alt,
  faGithubSquare,
} from "@fortawesome/free-brands-svg-icons"
import { faGlobe } from "@fortawesome/free-solid-svg-icons"

import Responsive from "../../public/animat-essential/responsive/animat-responsive-color.gif"
import Customize from "../../public/animat-essential/customize/animat-customize-color.gif"
import Optimized from "../../public/animat-essential/line-chart/animat-linechart-color.gif"
import favicon100 from "../../public/projectPics/img/favicon.png"

import Projects from "../components/projects"

export default class IndexPage extends Component {
  constructor() {
    this.state = [
      {
        name: "Purple Summer",
        image: Summer1,
        githubLink: "https://github.com/Gerti05/PurpleSummer",
        buttonIcons: faGithubSquare,
        icons: [faBootstrap, faHtml5, faSass, faJsSquare],
        iconColor: ["#5c3e86", "#ef652a", "#cd6799", "#f7df1e"],
        text: "Landing page for a fictional ice cream company.",
      },
      {
        name: "Covid 19 Data",
        image: Covid19,
        githubLink: "https://github.com/Gerti05/covidData",
        websiteLink: "https://covidworldata.com/",
        buttonIcons: [faGithubSquare, faGlobe],
        icons: [faReact, faBootstrap, faJsSquare],
        iconColor: ["#00d8ff", "#5c3e86", "#f7df1e"],
        iconImg: [Redux],
        text: "Website displaying Covid-19 data.",
      },
      {
        name: "Quote Generator",
        image: Quote,
        githubLink: "https://github.com/Gerti05/Quotes",
        buttonIcons: faGithubSquare,
        icons: [faBootstrap, faHtml5, faSass, faJsSquare, faReact],
        iconColor: ["#5c3e86", "#ef652a", "#cd6799", "#f7df1e", "#00d8ff"],
        text: "Random quote generator that you can tweet.",
      },
      {
        name: "Monster Game",
        image: Monster,
        githubLink: "https://github.com/Gerti05/monster-game",
        websiteLink: "https://stoic-thompson-ece060.netlify.app/",
        buttonIcons: [faGithubSquare, faGlobe],
        icons: [faCss3Alt],
        iconColor: ["#2965f1"],
        iconImg: [Vue, Vuetify],
        text: "The Monster Game is a quasi fighting game.",
      },
      {
        name: "SpaceX App",
        image: SpaceX,
        githubLink: "https://github.com/Gerti05/spaceX_app",
        websiteLink: "https://spacex-app-005.herokuapp.com/",
        buttonIcons: [faGithubSquare, faGlobe],
        icons: [faBootstrap, faReact],
        iconColor: ["#5c3e86", "#00d8ff"],
        iconImg: [Apollo, GraphQL],
        text: "Uses SpaceX api to give details about it's rocket launches.",
      },
      {
        name: "StockEZe App",
        image: Stock,
        githubLink: "https://github.com/Gerti05/stockapp",
        websiteLink: "https://stockeze.com/",
        buttonIcons: [faGithubSquare, faGlobe],
        icons: [faBootstrap, faReact, faCss3Alt],
        iconColor: ["#5c3e86", "#00d8ff", "#2965f1"],
        text:
          "Gives the best metrics for picking stocks without unneeded info.",
      },
      {
        name: "MailMoreLV Website",
        image: MailMore,
        githubLink: "https://github.com/Gerti05/MailMoreLV",
        websiteLink: "https://mailmorelv.com/",
        buttonIcons: [faGithubSquare, faGlobe],
        icons: [faBootstrap, faReact, faCss3Alt],
        iconColor: ["#5c3e86", "#00d8ff", "#2965f1"],
        text:
          "A three page website created using Gatsby for a virtual mail business.",
      }
    ]
  }

  render() {
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
        >
          <title>Portfolio</title>
          <meta
            name="description"
            content="This is my portfolio website and it was created with React and Gatsby."
          />
          Facebook Meta Tags
          <meta property="og:url" content="http://fiivemedia.com" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Portfolio" />
          <meta
            property="og:description"
            content="This is my portfolio website and it was created with React and Gatsby."
          />
          <meta
            property="og:image"
            content="https://i.ibb.co/FmH55x4/Portfolio.png"
          />
          Twitter Meta Tags
          <meta name="twitter:card" content="summary_large_image" />
          <meta property="twitter:domain" content="fiivemedia.com" />
          <meta property="twitter:url" content="http://fiivemedia.com" />
          <meta name="twitter:title" content="Portfolio" />
          <meta
            name="twitter:description"
            content="This is my portfolio website and it was created with React and Gatsby."
          />
          <meta
            name="twitter:image"
            content="https://i.ibb.co/FmH55x4/Portfolio.png"
          />
          Meta Tags Generated via https://www.opengraph.xyz
        </Helmet>
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
            <img
              className="icons"
              src={Responsive}
              alt="Responsive Design Gif"
            />
            <img
              className="icons"
              src={Customize}
              alt="Customizable Design Gif"
            />
            <img
              className="icons"
              src={Optimized}
              alt="Optimizable Design Gif"
            />
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
                {" "}
                <Projects
                  name={this.state[0].name}
                  image={this.state[0].image}
                  githubLink={this.state[0].githubLink}
                  buttonIcons={this.state[0].buttonIcons}
                  icons={this.state[0].icons}
                  iconColor={this.state[0].iconColor}
                  text={this.state[0].text}
                />
              </Col>
              <Col xs={12} s={12} md={6} lg={6} className="work container1">
                {" "}
                <Projects
                  name={this.state[1].name}
                  image={this.state[1].image}
                  githubLink={this.state[1].githubLink}
                  websiteLink={this.state[1].websiteLink}
                  buttonIcons={this.state[1].buttonIcons}
                  icons={this.state[1].icons}
                  iconColor={this.state[1].iconColor}
                  iconImg={this.state[1].iconImg}
                  text={this.state[1].text}
                />
              </Col>
            </Row>
          </div>
          <div className="d-flex justify-content-around">
            <Row>
              <Col xs={12} s={12} md={6} lg={6} className="work container1">
                {" "}
                <Projects
                  name={this.state[2].name}
                  image={this.state[2].image}
                  githubLink={this.state[2].githubLink}
                  buttonIcons={this.state[2].buttonIcons}
                  icons={this.state[2].icons}
                  iconColor={this.state[2].iconColor}
                  text={this.state[2].text}
                />
              </Col>
              <Col xs={12} s={12} md={6} lg={6} className="work container1">
                {" "}
                <Projects
                  name={this.state[3].name}
                  image={this.state[3].image}
                  githubLink={this.state[3].githubLink}
                  websiteLink={this.state[3].websiteLink}
                  buttonIcons={this.state[3].buttonIcons}
                  icons={this.state[3].icons}
                  iconColor={this.state[3].iconColor}
                  iconImg={this.state[3].iconImg}
                  text={this.state[3].text}
                />
              </Col>
            </Row>
          </div>
          <div className="d-flex justify-content-around">
            <Row>
              <Col xs={12} s={12} md={6} lg={6} className="work container1">
                {" "}
                <Projects
                  name={this.state[4].name}
                  image={this.state[4].image}
                  githubLink={this.state[4].githubLink}
                  websiteLink={this.state[4].websiteLink}
                  buttonIcons={this.state[4].buttonIcons}
                  icons={this.state[4].icons}
                  iconColor={this.state[4].iconColor}
                  iconImg={this.state[4].iconImg}
                  text={this.state[4].text}
                />
              </Col>
              <Col xs={12} s={12} md={6} lg={6} className="work container1">
                {" "}
                <Projects
                  name={this.state[6].name}
                  image={this.state[6].image}
                  githubLink={this.state[6].githubLink}
                  websiteLink={this.state[6].websiteLink}
                  buttonIcons={this.state[6].buttonIcons}
                  icons={this.state[6].icons}
                  iconColor={this.state[6].iconColor}
                  text={this.state[6].text}
                />
              </Col>
            </Row>
          </div>
        </div>
      </Layout>
    )
  }
}
