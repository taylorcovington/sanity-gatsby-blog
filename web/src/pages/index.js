import React from "react";
import { graphql } from "gatsby";
import {
  filterOutDocsPublishedInTheFuture,
  filterOutDocsWithoutSlugs,
  mapEdgesToNodes,
} from "../lib/helpers";
import BlogPostPreviewList from "../components/blog-post-preview-list";
import Container from "../components/container";
import GraphQLErrorList from "../components/graphql-error-list";
import SEO from "../components/seo";
import Layout from "../containers/layout";
import Landing from "./Landing";

export const query = graphql`
  query IndexPageQuery {
    site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
      title
      description
      keywords
    }

    landingPage: sanityPage(title: { eq: "Landing" }) {
      id
      content {
        __typename
        ... on SanityHero {
          _key
          _type
          backgroundImage {
            _key
            _type
            _rawAsset
            _rawHotspot
            _rawCrop
          }
          tagline {
            _key
            _type
            style
            list
            _rawChildren
          }
          heading
          subheading
          ctas {
            _key
            link
            title
            type
          }
        }
        ... on SanityImageSection {
          _key
          _type
        }
        ... on SanityMailchimp {
          _key
          _type
        }
        ... on SanityTestimonial {
          _key
          _type
        }
        ... on SanityTextSection {
          _key
          _type
        }
      }
    }
  }
`;

const IndexPage = (props) => {
  const { data, errors } = props;

  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    );
  }
  console.log("data: ", data);
  const site = (data || {}).site;
  console.log("site: ", site);
  // const postNodes = (data || {}).posts
  //   ? mapEdgesToNodes(data.posts)
  //       .filter(filterOutDocsWithoutSlugs)
  //       .filter(filterOutDocsPublishedInTheFuture)
  //   : [];

  // if (!site) {
  //   throw new Error(
  //     'Missing "Site settings". Open the studio at http://localhost:3333 and add some content to "Site settings" and restart the development server.'
  //   );
  // }

  return (
    <Layout>
      {/* <SEO
        title={site.title}
        description={site.description}
        keywords={site.keywords}
      /> */}
      <Container>
        {/* <h1 hidden>Welcome to {site.title}</h1> */}
        <Landing pageData={data.landingPage} />
      </Container>
    </Layout>
  );
};

export default IndexPage;

// fragment SanityImage on SanityMainImage {
//   crop {
//     _key
//     _type
//     top
//     bottom
//     left
//     right
//   }
//   hotspot {
//     _key
//     _type
//     x
//     y
//     height
//     width
//   }
//   asset {
//     _id
//   }
// }
