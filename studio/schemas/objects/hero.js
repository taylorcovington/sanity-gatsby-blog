export default {
  type: "object",
  name: "hero",
  title: "Hero",
  fields: [
    {
      name: "heading",
      type: "string",
      title: "Heading",
    },
    {
      name: "subheading",
      type: "string",
      title: "Subheading",
    },
    {
      name: "tagline",
      type: "simplePortableText",
      title: "Tagline",
    },
    {
      name: "backgroundImage",
      type: "image",
      title: "Background image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "ctas",
      type: "array",
      title: "Call to actions",
      of: [
        {
          title: "Call to action",
          type: "cta",
        },
      ],
    },
  ],
  preview: {
    select: {
      title: "heading",
      subtitle: "subheading",
      media: "backgroundImage",
    },
    prepare({ title, media }) {
      return {
        title,
        subtitle: "Hero section",
        media,
      };
    },
  },
};
