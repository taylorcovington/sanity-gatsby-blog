import React from "react";
import {
  filterOutDocsPublishedInTheFuture,
  filterOutDocsWithoutSlugs,
  mapEdgesToNodes,
} from "../../lib/helpers";
import { StaticQuery, graphql } from "gatsby";
import BlogPostPreviewGrid from "../blog-post-preview-list";

const LatestPosts = () => {
  return (
    <StaticQuery
      query={graphql`
        query LatestPostsQuery {
          posts: allSanityPost(
            limit: 3
            sort: { fields: [publishedAt], order: DESC }
            filter: {
              slug: { current: { ne: null } }
              publishedAt: { ne: null }
            }
          ) {
            edges {
              node {
                id
                publishedAt
                readTime
                mainImage {
                  ...SanityImage
                  alt
                }
                title
                excerpt {
                  children {
                    text
                  }
                }
                slug {
                  current
                }
                authors {
                  author {
                    name
                    image {
                      ...SanityImage
                      alt
                    }
                  }
                }
                categories {
                  title
                }
              }
            }
          }
        }
      `}
      render={(data) => {
        const postNodes = (data || {}).posts
          ? mapEdgesToNodes(data.posts)
              .filter(filterOutDocsWithoutSlugs)
              .filter(filterOutDocsPublishedInTheFuture)
          : [];

        return (
          <BlogPostPreviewGrid
            heading="From the blog"
            subheading="You'll find posts about full-stack development, career tips, and dev resources."
            posts={postNodes}
            archiveUrl="/archive/"
          />
        );
      }}
    />
  );
};

export default LatestPosts;
