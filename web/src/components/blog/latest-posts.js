import React from "react";
import {
  filterOutDocsPublishedInTheFuture,
  filterOutDocsWithoutSlugs,
  mapEdgesToNodes,
} from "../../lib/helpers";
import { StaticQuery, graphql } from "gatsby";
import { imageUrlFor } from "../../lib/image-url";
import { buildImageObj, cn, getBlogUrl } from "../../lib/helpers";
import { format } from "date-fns";

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
        console.log("data: ", data);
        const postNodes = (data || {}).posts
          ? mapEdgesToNodes(data.posts)
              .filter(filterOutDocsWithoutSlugs)
              .filter(filterOutDocsPublishedInTheFuture)
          : [];

        console.log("postNodes: ");
        console.log(JSON.stringify(postNodes, null, 2));
        return (
          <div className="relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
            <div className="absolute inset-0">
              <div className="bg-white h-1/3 sm:h-2/3" />
            </div>
            <div className="relative max-w-7xl mx-auto">
              <div className="text-center">
                <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
                  From the blog
                </h2>
                <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
                  I enjoy writing about full-stack development, what I'm
                  learning, and career tips and tricks! Here are a few of my
                  latest posts.
                </p>
              </div>
              <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
                {postNodes.map((post) => {
                  const {
                    id,
                    title,
                    mainImage,
                    excerpt,
                    publishedAt,
                    readTime,
                    slug,
                    authors,
                    categories,
                  } = post;

                  const { author } = authors[0];
                  const { name: authorName, image: authorImage } = author;
                  console.log("authorName: ", authorName);
                  const { children } = excerpt[0];
                  const { text: excerptText } = children[0];

                  return (
                    <div
                      key={id}
                      className="flex flex-col rounded-lg shadow-lg overflow-hidden"
                    >
                      <div className="flex-shrink-0">
                        {mainImage && mainImage.asset && (
                          <img
                            src={imageUrlFor(buildImageObj(mainImage))
                              .width(600)
                              .height(Math.floor((9 / 16) * 600))
                              .auto("format")
                              .url()}
                            className="h-48 w-full object-cover"
                            alt={mainImage.alt}
                          />
                        )}
                      </div>
                      <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                        <div className="flex-1">
                          <div className="flex flex-row ">
                            {categories.map((category) => (
                              <p
                                key={category.title}
                                className="text-sm font-medium text-indigo-600 mr-2"
                              >
                                <a
                                  // href={post.category.href}
                                  className="hover:underline"
                                >
                                  {category.title}
                                </a>
                              </p>
                            ))}
                          </div>

                          <a
                            // href={post.href}
                            className="block mt-2"
                          >
                            <p className="text-xl font-semibold text-gray-900">
                              {title}
                            </p>
                            <p className="mt-3 text-base text-gray-500">
                              {excerptText}
                            </p>
                          </a>
                        </div>
                        <div className="mt-6 flex items-center">
                          <div className="flex-shrink-0">
                            <a
                            // href={post.author.href}
                            >
                              <span className="sr-only">{authorName}</span>

                              <img
                                className="h-10 w-10 rounded-full"
                                src={imageUrlFor(buildImageObj(authorImage))
                                  .width(600)
                                  .height(Math.floor((9 / 16) * 600))
                                  .auto("format")
                                  .url()}
                                alt=""
                              />
                            </a>
                          </div>
                          <div className="ml-3">
                            <p className="text-sm font-medium text-gray-900">
                              <a
                                // href={post.author.href}
                                className="hover:underline"
                              >
                                {authorName}
                              </a>
                            </p>
                            <div className="flex space-x-1 text-sm text-gray-500">
                              {/* <time dateTime={post.datetime}>{post.date}</time> */}
                              <time dateTime={publishedAt}>
                                {format(new Date(publishedAt), "MMMM Mo, yyyy")}
                              </time>
                              <span aria-hidden="true">&middot;</span>
                              <span>{readTime} read</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
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
