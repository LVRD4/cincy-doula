import { defineField, defineType } from "sanity";

export const categoryType = defineType({
  name: "category",
  title: "Blog Category",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Category Name",
      type: "string",
      description: 'E.g. "Birth", "Postpartum", "Preparation"',
      validation: (r) => r.required(),
    }),
    defineField({
      name: "description",
      title: "Description (optional)",
      type: "text",
      rows: 2,
      description: "A short description shown on the blog page.",
    }),
  ],
  preview: {
    select: { title: "title" },
  },
});
