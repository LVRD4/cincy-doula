import { defineField, defineType } from "sanity";

export const postType = defineType({
  name: "post",
  title: "Blog Post",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Post Title",
      type: "string",
      validation: (r) => r.required().max(100),
    }),
    defineField({
      name: "slug",
      title: "URL Slug",
      type: "slug",
      description: "Auto-generated from the title. This becomes the page URL.",
      options: { source: "title", maxLength: 96 },
      validation: (r) => r.required(),
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "reference",
      to: [{ type: "category" }],
      description: "Pick a category. Add new ones under Blog Categories in the sidebar.",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "publishedAt",
      title: "Publish Date",
      type: "datetime",
      description: "Set a future date to schedule the post.",
      initialValue: () => new Date().toISOString(),
      validation: (r) => r.required(),
    }),
    defineField({
      name: "excerpt",
      title: "Excerpt",
      type: "text",
      rows: 3,
      description: "Short preview shown on the blog listing page (1–2 sentences).",
      validation: (r) => r.required().max(300),
    }),
    defineField({
      name: "metaDescription",
      title: "SEO Meta Description",
      type: "text",
      rows: 2,
      description:
        "What Google shows in search results. Keep under 160 characters and mention 'Cincinnati doula'.",
      validation: (r) => r.required().max(160),
    }),
    defineField({
      name: "featuredImage",
      title: "Featured Image",
      type: "image",
      options: { hotspot: true },
      fields: [
        defineField({
          name: "alt",
          title: "Image Description (Alt Text)",
          type: "string",
          description: "Describe the image for accessibility and SEO.",
          validation: (r) => r.required(),
        }),
      ],
    }),
    defineField({
      name: "body",
      title: "Post Body",
      type: "array",
      of: [
        {
          type: "block",
          styles: [
            { title: "Paragraph", value: "normal" },
            { title: "Heading", value: "h2" },
            { title: "Subheading", value: "h3" },
            { title: "Quote", value: "blockquote" },
          ],
          marks: {
            decorators: [
              { title: "Bold", value: "strong" },
              { title: "Italic", value: "em" },
            ],
            annotations: [
              {
                name: "link",
                type: "object",
                title: "Link",
                fields: [{ name: "href", type: "url", title: "URL" }],
              },
            ],
          },
        },
        {
          type: "image",
          options: { hotspot: true },
          fields: [
            { name: "alt", type: "string", title: "Image Description" },
            { name: "caption", type: "string", title: "Caption (optional)" },
          ],
        },
      ],
    }),
  ],
  preview: {
    select: { title: "title", subtitle: "category.title", media: "featuredImage" },
    prepare({ title, subtitle, media }) {
      return { title, subtitle, media };
    },
  },
  orderings: [
    {
      title: "Newest First",
      name: "publishedAtDesc",
      by: [{ field: "publishedAt", direction: "desc" }],
    },
  ],
});
