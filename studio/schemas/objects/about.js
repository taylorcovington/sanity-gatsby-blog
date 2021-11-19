export default {
  type: "object",
  name: "about",
  title: "About",
  fields: [
    {
      name: "heading",
      type: "string",
      title: "Heading",
    },
    {
      name: "body",
      type: "bodyPortableText",
      title: "Body",
    },
    {
      name: "mainImage",
      type: "mainImage",
      title: "About image",
    },
  ],
  preview: {
    select: {
      title: "heading",
      body: "body",
      media: "mainImage",
    },
    prepare({ title, media, body }) {
      return {
        title,
        body,
        media,
      };
    },
  },
};
