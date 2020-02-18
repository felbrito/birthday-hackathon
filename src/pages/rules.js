/* eslint-disable react/display-name */
import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Anchor, Box, Heading, Image, Paragraph, Text } from 'grommet'
// import { Coffee, Cafeteria } from 'grommet-icons'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Pug from '../components/site/Pug'

import { MDXProvider } from '@mdx-js/react'
import { MDXRenderer } from 'gatsby-plugin-mdx'

const MdxComponents = {
  h1: props => <Heading level={1} {...props}/>,
  h2: props => <Heading level={2} size="large" margin={{ bottom: 'small' }} {...props}/>,
  h3: props => <Heading level={3} size="large" margin={{ bottom: 'small' }} {...props}/>,

  p: props => <Paragraph fill {...props} />
}

const RulesPage = () => {
  const data = useStaticQuery(graphql`
  
  query {
    
    site {
      siteMetadata {
        title
        description
        author
      }
    }
    mdx: allMdx {
      edges {
        node {
          frontmatter { title } 
          body
        }
      }
    }
  }
`)

  const content = {}
  data.mdx.edges.forEach(({ node }) => { content[node.frontmatter.title] = node.body })

  return <Layout>
    <MDXProvider components={MdxComponents}>
      <SEO title="Birthday Hackathon - Rules" />

      <Pug />

      <Box background="pale" align="center" >
        <Box fill pad={{ horizontal: 'medium' }} width={{ max: 'large' }}>
          <MDXRenderer>{content.agenda}</MDXRenderer>
        </Box>
      </Box>

      <Box background="black" align="center" >
        <Box fill pad={{ horizontal: 'medium' }} width={{ max: 'large' }}>
          <MDXRenderer>{content.rules}</MDXRenderer>
        </Box>
      </Box>
      <Box background="pale" align="center" >
        <Box fill pad={{ horizontal: 'medium' }} width={{ max: 'large' }}>
          <MDXRenderer>{content.hints}</MDXRenderer>
        </Box>
      </Box>
      <Box background="white" align="center" >
        <Box fill pad={{ horizontal: 'medium' }} margin={{ bottom: 'xlarge' }} width={{ max: 'large' }}>
          <MDXRenderer>{content.resources}</MDXRenderer>
        </Box>
      </Box>
    </MDXProvider>
  </Layout >
}

export default RulesPage