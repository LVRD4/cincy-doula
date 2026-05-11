import { defineField, defineType } from "sanity";

export const testimonialType = defineType({
  name: "testimonial",
  title: "Testimonial",
  type: "document",
  fields: [
    defineField({
      name: "quote",
      title: "Client Quote",
      type: "text",
      rows: 4,
      validation: (r) => r.required(),
    }),
    defineField({
      name: "clientName",
      title: "Client First Name (or initials)",
      type: "string",
      description: "E.g. 'Sarah M.' or 'A family from Cincinnati'",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "serviceType",
      title: "Service Type",
      type: "string",
      options: {
        list: [
          { title: "Birth Support", value: "Birth Support" },
          { title: "Postpartum Support", value: "Postpartum Support" },
          { title: "Consultation", value: "Consultation" },
        ],
        layout: "radio",
      },
    }),
    defineField({
      name: "order",
      title: "Display Order",
      type: "number",
      description: "Lower numbers appear first.",
    }),
  ],
  preview: {
    select: { title: "clientName", subtitle: "serviceType" },
  },
  orderings: [
    { title: "Display Order", name: "orderAsc", by: [{ field: "order", direction: "asc" }] },
  ],
});
