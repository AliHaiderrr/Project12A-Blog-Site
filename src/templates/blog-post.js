import React from "react"
import { graphql, Link } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import Layout from "../components/layout"
import Img from "gatsby-image"
import Seo from "../components/seo"

export const query = graphql`
  query($slug: String!) {
    contentfulPost(slug: { eq: $slug }) {
      title
      publishedDate(formatString: "DD MMMM, YYYY")
      featuredImage {
        fluid(maxWidth: 750) {
          ...GatsbyContentfulFluid
        }
      }
      body {
        raw
      }
    }
  }
`

const BlogPost = props => {
    const options = {
        renderNode: {
          "embedded-asset-block": node => {
            const alt = node.data.target.fields.title["en-US"]
            const url = node.data.target.fields.file["en-US"].url
            return <img alt={alt} src={url} />
          },
        },
      }

    return (
      <Layout>
        <Seo title={props.data.contentfulPost.title} />
        <Link to="/blog/">Visit the Blog Page</Link>
        <div className="content">
          ...
          {props.data.contentfulPost.featuredImage && (
            <Img
              className="featured"
              fluid={props.data.contentfulPost.featuredImage.fluid}
              alt={props.data.contentfulPost.title}
            />
          )}
  
          {documentToReactComponents(JSON.parse( props.data.contentfulPost.body.raw, options))}
        </div>
      </Layout>
    )
  }

export default BlogPost