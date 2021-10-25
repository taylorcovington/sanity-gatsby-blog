export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "61773f689ffec7f1321e2014",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-nfknqeaw",
                  apiId: "d93d5fdb-b387-407a-a196-8966e983177e",
                },
                {
                  buildHookId: "61773f68cb90f2e11f6968a6",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-6b3zrjem",
                  apiId: "f3e8aee9-96e5-4728-b0d1-996d3db0c9b5",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/taylorcovington/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-6b3zrjem.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
