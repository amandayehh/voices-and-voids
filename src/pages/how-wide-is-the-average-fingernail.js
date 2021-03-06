import React from "react"
import SEO from "../components/seo"

import "../css/global.css"
import "../css/reset.css"
import "../css/type.css"

import Layout from "../components/layout/layout"
import SmallHeader from "../components/small-header/small-header"
import VideoFull from "../components/video-full/video-full"
import ContentFingernail from "../components/content-fingernail/content-fingernail"

import Back from "../components/back-nav/back-nav"

function Fingernail(props) {
  return (
    <div>
      <SEO title="How wide is the average fingernail" />
      <Layout>
        <SmallHeader
          colorMode={"small-header__on-dark"}
          headerTitle={"How wide is the average fingernail"}
          infoTitle={"How wide is the average fingernail"}
          infoContent={[
            "Sonic and visual responses to 6 consecutive questions from a Google Voice Assistant data log, sourced from an Amazon Mechanical Turk worker.",
            <br />,
            <br />,
            "Collaborator:",
            <br />,
            "Danny Clay",
          ]}
        />

        <VideoFull
          videoSrc="https://player.vimeo.com/video/431887966?title=0&byline=0&portrait=0"
          title="How wide is the average fingernail"
        />

        <ContentFingernail />

        <Back homeSection="#how-wide-is-the-average-fingernail" />
      </Layout>
    </div>
  )
}

export default Fingernail
