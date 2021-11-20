const { isFuture } = require("date-fns");
const path = require("path");
/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const { format } = require("date-fns");

async function createBlogPostPages(graphql, actions) {
  const { createPage } = actions;
  const result = await graphql(`
    {
      allSanityPost(
        filter: { slug: { current: { ne: null } }, publishedAt: { ne: null } }
      ) {
        edges {
          node {
            id
            publishedAt
            slug {
              current
            }
          }
        }
      }
    }
  `);

  if (result.errors) throw result.errors;

  const postEdges = (result.data.allSanityPost || {}).edges || [];

  postEdges
    .filter((edge) => !isFuture(new Date(edge.node.publishedAt)))
    .forEach((edge) => {
      const { id, slug = {}, publishedAt } = edge.node;
      const dateSegment = format(new Date(publishedAt), "yyyy/MM");
      const path = `/blog/${dateSegment}/${slug.current}/`;

      createPage({
        path,
        component: require.resolve("./src/templates/blog-post.js"),
        context: { id },
      });
    });
}

async function createPages(graphql, actions) {
  const { data } = await graphql(`
    {
      allSanityRoute {
        edges {
          node {
            id
            slug {
              _key
              _type
              current
            }
            page {
              id
              content {
                ... on SanityHero {
                  _key
                  _type
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
        }
      }
    }
  `);

  data.allSanityRoute.edges.forEach((pg) => {
    const { slug, page } = pg.node;
    actions.createPage({
      path: `${slug.current}`,
      component: path.resolve("./src/pages/Blog.js"),
      // slug.current === "/blog"
      //   ? path.resolve("./src/pages/Blog.js")
      //   : path.resolve("./src/templates/NewPage.js"),
      context: {},
    });
  });
}

exports.createPages = async ({ graphql, actions }) => {
  await createBlogPostPages(graphql, actions);
  await createPages(graphql, actions);
};
