import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Anchor, Box, Heading, Image, Paragraph, Text } from 'grommet'
//import { Coffee, Cafeteria } from 'grommet-icons'
import { Helmet } from 'react-helmet'

import Layout from "../components/layout"
import Img from "gatsby-image"

import SEO from "../components/seo"

import bchack from "../images/artwork/bchack.jpg"

import Pug from '../components/site/Pug'
import CountMeIn from '../components/site/CountMeIn'
//import Tickets from '../components/site/Tickets'
import Partners from '../components/site/Partners'


const IndexPage = () => {
  const _data = useStaticQuery(graphql`
  
  query {
    allFile(filter: {relativePath: {regex: "/artwork/"}}) {
      edges {
        node {
          relativePath
          name
          childImageSharp {
            fluid(maxWidth: 1200) {
              ...GatsbyImageSharpFluid
            }
            fixed {
              ...GatsbyImageSharpFixed
            }
          }
          
        }
      }
    }
    site {
      siteMetadata {
        title
        description
        author
      }
    }

  }
`)
  let images = {}
  _data.allFile.edges.forEach(({ node }) => { images[node.name] = node.childImageSharp })
  const metadata = _data.site.siteMetadata


  return <Layout>
    <SEO title="Birthday Hackathon" />
    <Helmet>
      <script src="https://www.eventbrite.de/static/widgets/eb_widgets.js"></script>

    </Helmet>

    <Pug />

    <Box background="pale"  >
      <Heading level={2} size="xlarge" alignSelf="center" >
        A cozy Saturday to hack away
      </Heading>

      <Box direction="row-responsive" gap="large">
        <Box pad={{ horizontal: "medium" }} basis="1/2" animation="slideRight" id="expect">

          <Heading>What to expect</Heading>
          <Paragraph alignSelf="center" size="large" fill>
            What's the best way to celebrate a developer's birthday, <Anchor href="https://www.linkedin.com/in/stadolf/">Stefan</Anchor> asked himself.
            We're using his passion of being a "professional" hackathon goer for the headline
            of 2020's first hackathon. Lets start the year by getting your hands
            dirty on code, try out something new, meet extraordinary folks to build something technical together.
            Just because you can.

          </Paragraph>
          <Heading margin={{ bottom: "none" }}>There'll be</Heading>

          <Paragraph alignSelf="center" size="large">
            <ul style={{ listStyleType: "square", margin: 0, padding: 0 }}>
              <li>
                unlimited coffee supplies
              </li>
              <li>
                A healthy breakfast
              </li>
              <li>
                Two lunch options
              </li>
              <li>
                Afternoon Cake
              </li>
              <li>
                A very German dinner choice (Stulle)
              </li>
              <li>
                A choice of tasteless, sweet and higher volume (&gt; 6pm) beverages
              </li>
            </ul>
          </Paragraph>

        </Box>
        <Box basis="1/2" animation="slideLeft">
          <Img fluid={images['location'].fluid} />
          {/*<Image fit="cover" src={location} />*/}
        </Box>
      </Box>
    </Box>

    <Box background="dark-1" align="center" >
      <Box direction="row-responsive" gap="large" >
        <Box basis="1/2" height="large">
          {/*<Img fluid={images['bchack'].fluid} />*/}
          <Image fit="cover" src={bchack} />
        </Box>
        <Box basis="1/2" pad={{ horizontal: "medium" }} id="build">
          <Heading level={2} size="xlarge" margin={{ bottom: "medium" }}>
            What to build
          </Heading>

          <Text size="large" weight="bold">Conversational interfaces</Text>
          <Paragraph size="medium" fill>
            What's your interpretation of <em>"how do users interact with applications"</em>?
            Go wild with APIs for <Anchor href="https://www.twilio.com/">voice</Anchor>,
            text, <Anchor href="https://developer.amazon.com/en-US/alexa">speech</Anchor>,
            <Anchor href="https://matrix.org/">chat</Anchor> and <Anchor href="https://api.slack.com/">bots</Anchor>. In any direction.
          </Paragraph>

          <Text size="large" weight="bold">Frontends to bow down for</Text>
          <Paragraph size="medium" fill>
            What's the coolest effect that you can build using the latest frontend tools?
            Impress us with <Anchor href="https://blog.bitsrc.io/11-javascript-animation-libraries-for-2018-9d7ac93a2c59">effects</Anchor>,{' '}
            <Anchor href="https://d3js.org/">visualizations</Anchor>,{' '}
            <Anchor href="https://bashooka.com/coding/3d-javascript-libraries/">3D</Anchor>,{' '}
            <Anchor href="https://www.sitepoint.com/best-javascript-charting-libraries/">graphs</Anchor>{' '}
            and <Anchor href="https://hackernoon.com/23-best-react-ui-component-libraries-and-frameworks-250a81b2ac42">usability</Anchor> tweaks.
          </Paragraph>

          <Text size="large" weight="bold">Engage, Mr Data!</Text>
          <Paragraph size="medium" fill>
            When you've got <Anchor href="https://daten.berlin.de/datensaetze">all</Anchor>{' '}
            the <Anchor href="https://www.govdata.de/">data</Anchor>{' '}
            <Anchor href="https://data.europa.eu/euodp/en/data/">and</Anchor>{' '}
            <Anchor href="https://www.opendatanetwork.com/">APIs</Anchor>{' '}
            <Anchor href="https://registry.opendata.aws/">of</Anchor>{' '}
            <Anchor href="https://www.data.gov/">the</Anchor>{' '}
            <Anchor href="https://www.kaggle.com/">world</Anchor>{' '}
            <Anchor href="https://data.worldbank.org/">at</Anchor>{' '}
            <Anchor href="https://www.ncdc.noaa.gov/">hand</Anchor>, what can you figure out
            that nobody has figured out before? That's maybe a good opportunity to contribute some code for an <Anchor href="https://codefor.de/">OKLabs project</Anchor>.
          </Paragraph>

          <Text size="large" weight="bold">Map me, baby!</Text>
          <Paragraph size="medium" fill>
            Go crazy on <Anchor href="https://docs.mapbox.com/mapbox-gl-js/api/">map styles</Anchor> and <Anchor href="https://foam.space/map">location services</Anchor> and <Anchor href="https://www.esri.com/en-us/arcgis/products/mapping">visualize</Anchor> something really meaningful
          </Paragraph>

        </Box>
      </Box>
    </Box>

    <Box background="pale" align="center" pad="large" id="rsvp">
      <CountMeIn />
      {/*<Tickets /> */}
    </Box>

    <Box background="dark-1" align="center" direction="column" style={{ display: "none" }} >
      <Heading level={2} size="xlarge">
        The Venue
      </Heading>

      <Box direction="row-responsive" fill>
        <Box basis="1/2" height="large" elevation="xlarge">

        </Box>
        <Box basis="1/2" elevation="xlarge">


        </Box>
      </Box>
    </Box>

    <Box background="white" align="center">
      <Heading level={2} size="xlarge">
        Partners
      </Heading>

      <Partners />
      <Box width="large">
        <Paragraph fill size="small">
          Do you want to support us with anything and find your logo on the list? The Birthday Hack is a purely
          non profit, open source, celebration oriented happening and we'd love to see you support us with it :)
        If you're interested, leave a mail in our post box: <a href="mailto:info@coding-earth.com?subject=Birthday Hackathon">info@coding-earth.com</a>
        </Paragraph>
      </Box>
    </Box>

  </Layout >
}

export default IndexPage
