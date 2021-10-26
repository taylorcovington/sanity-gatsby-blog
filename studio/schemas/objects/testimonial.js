export default {
  name: "testimonial",
  type: "object",
  title: "Testimonial",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Name",
      description: "The name of the person that gives the testimonial",
    },
    {
      name: "quote",
      type: "text",
      title: "Quote",
    },
    {
      name: "photo",
      type: "figure",
      title: "Photo of the person",
    },
  ],
  preview: {
    select: {
      title: "quote",
      subtitle: "name",
      media: "photo",
    },
  },
};
