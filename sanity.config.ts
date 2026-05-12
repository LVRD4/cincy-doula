import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./src/sanity/schemaTypes";

export default defineConfig({
  name: "erika-harrison-doula",
  title: "Erika Harrison Doula — Content Studio",

  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? "not-set",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production",

  basePath: "/studio",

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title("Content")
          .items([
            // Site Settings — singleton
            S.listItem()
              .title("📷  Site Photos")
              .child(
                S.document()
                  .schemaType("siteSettings")
                  .documentId("siteSettings")
                  .title("Site Photos")
              ),

            S.divider(),

            // Blog
            S.listItem()
              .title("✍️  Blog Posts")
              .child(
                S.documentList()
                  .title("Blog Posts")
                  .filter('_type == "post"')
                  .defaultOrdering([{ field: "publishedAt", direction: "desc" }])
              ),
            S.listItem()
              .title("🏷️  Blog Categories")
              .child(
                S.documentList()
                  .title("Blog Categories")
                  .filter('_type == "category"')
                  .defaultOrdering([{ field: "title", direction: "asc" }])
              ),

            S.divider(),

            // Testimonials
            S.listItem()
              .title("💬  Testimonials")
              .child(
                S.documentList()
                  .title("Testimonials")
                  .filter('_type == "testimonial"')
                  .defaultOrdering([{ field: "order", direction: "asc" }])
              ),
          ]),
    }),
    visionTool(),
  ],

  schema: { types: schemaTypes },
});
