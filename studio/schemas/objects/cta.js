export default {
  title: "Call to action",
  name: "cta",
  type: "object",
  validation: (Rule) =>
    Rule.custom(
      (fields = {}) =>
        !fields.route || !fields.link || "Only one link type is allowed"
    ),
  fieldsets: [
    {
      title: "Link",
      name: "link",
    },
  ],
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
    },
    {
      title: "Type",
      name: "type",
      type: "string",
      options: {
        list: [
          { title: "Primary", value: "primary" },
          { title: "Secondary", value: "secondary" },
        ],
      },
    },
    {
      title: "Internal link",
      description: "Use this to link between pages on the website",
      name: "route",
      type: "reference",
      to: [{ type: "route" }],
      fieldset: "link",
    },
    {
      title: "External link",
      name: "link",
      type: "url",
      fieldset: "link",
    },
  ],
  preview: {
    select: {
      title: "title",
      type: "type",
      routeTitle: "route.title",
      slug: "route.slug.current",
      link: "link",
    },
    prepare({ title, type, routeTitle = "", slug, link }) {
      const subtitleExtra = slug
        ? `Slug:/${slug}/`
        : link
        ? `External link: ${link}`
        : "Not set";
      return {
        title: `${title}`,
        type: `${type}`,
        subtitle: `${routeTitle} ${subtitleExtra}`,
      };
    },
  },
};
