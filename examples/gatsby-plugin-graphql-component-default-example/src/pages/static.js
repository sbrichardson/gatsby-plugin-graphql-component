import React from "react"
import { StaticQuery, graphql } from "gatsby"

export default props => (
  <StaticQuery
    query={graphql`
      query {
        Tester
        allSitePage {
          edges {
            node {
              id
            }
          }
        }
      }
    `}
  >
    {data => {
      return <data.Tester></data.Tester>
    }}
  </StaticQuery>
)
