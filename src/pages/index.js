import React from "react";
import Link from "gatsby-link";
import Helmet from "react-helmet";

const Index = ({data}) => {
  const { edges: posts } = data.allMarkdownRemark;
  return (
    <div>
      {posts.map(({ node: post }) => (
        <div className="blog-post-preview" key={post.id}>
          <h1>
            <Link to={post.frontmatter.path}>{post.frontmatter.title}</Link>
          </h1>
          <h2>{post.frontmatter.date}</h2>
          <p>{post.excerpt}</p>
        </div>
      ))}
    </div>
  );
}

export default Index

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 250)
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            path
          }
        }
      }
    }
  }
`
