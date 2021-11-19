import React from "react";
import { graphql } from "gatsby";
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
        ... on SanityAbout {
          _key
          heading
          mainImage {
            ...SanityImage
            alt
          }
          body {
            _key
            _rawChildren
            style
            list
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
  const site = (data || {}).site;

  if (!site) {
    throw new Error(
      'Missing "Site settings". Open the studio at http://localhost:3333 and add some content to "Site settings" and restart the development server.'
    );
  }

  return (
    <Layout>
      {/* TODO - need to update site settings */}
      <SEO
        title={site.title}
        description={site.description}
        keywords={site.keywords}
      />
      <Container>
        <Landing pageData={data.landingPage} />
      </Container>
    </Layout>
  );
};

export default IndexPage;
