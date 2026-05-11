import { defineField, defineType } from "sanity";

export const siteSettingsType = defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  fields: [
    defineField({
      name: "heroImage",
      title: "Hero Background Photo",
      type: "image",
      description:
        'The full-screen photo behind "You are supported. In every moment." on the homepage.',
      options: { hotspot: true },
      fields: [
        defineField({
          name: "alt",
          title: "Image Description",
          type: "string",
          initialValue: "Pregnancy silhouette",
        }),
      ],
    }),
    defineField({
      name: "portraitImage",
      title: "Portrait Photo (About / Who I Am section)",
      type: "image",
      description: "Your headshot shown in the Who I Am section on the homepage.",
      options: { hotspot: true },
      fields: [
        defineField({
          name: "alt",
          title: "Image Description",
          type: "string",
          initialValue: "Erika Harrison, Cincinnati Doula",
        }),
      ],
    }),
  ],
  preview: {
    prepare() {
      return { title: "Site Settings" };
    },
  },
});
