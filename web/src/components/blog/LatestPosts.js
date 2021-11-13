import React from "react";
import {
  filterOutDocsPublishedInTheFuture,
  filterOutDocsWithoutSlugs,
  mapEdgesToNodes,
} from "../../lib/helpers";
import { StaticQuery, graphql } from "gatsby";
import PostPreview from "./PostPreview";
import BlogHeading from "./BlogHeading";

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
          <div className="relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
            <div className="absolute inset-0">
              <div className="bg-white h-1/3 sm:h-2/3" />
            </div>
            <div className="relative max-w-7xl mx-auto">
              <BlogHeading
                heading="From the blog"
                subheading="I enjoy writing about full-stack development, what I'm learning, and career
              tips. Here are a few of my latest posts.
              "
              />
              <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
                {postNodes.map((post) => {
                  return <PostPreview key={post.id} postData={post} />;
                })}
              </div>
            </div>
          </div>
        );
      }}
    />
  );
};

export default LatestPosts;
