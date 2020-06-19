import React from "react"
import { Link } from "gatsby"
import SEO from "../components/seo"
import Fade from "react-reveal/Fade"

import "../css/global.css"
import "../css/reset.css"
import "../css/type.css"

import SmallHeader from "../components/small-header/small-header"
import VideoFull from "../components/video-full/video-full"

import Back from "../components/back-nav/back-nav"

function YourHair(props) {
  return (
    <div className="black-background">
      <SEO title="Your hair is very wonderful" />
      {/* <div className="small-header__on-dark"> */}
      <SmallHeader
        colorMode={"on-dark"}
        headerTitle={"Your hair is very wonderful"}
        infoTitle={"Your hair is very wonderful"}
        infoContent={
          "Sonic interpretations of a series of 6 consecutive statements from google voice assistant data log."
        }
      />
      {/* </div> */}

      <VideoFull videoLink="https://player.vimeo.com/video/420202270?portrait=0" />

      <Back colorMode={"on-dark"} />
    </div>
  )
}

export default YourHair
