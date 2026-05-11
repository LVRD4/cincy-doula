import { createClient, type SanityClient } from "next-sanity";

export const isSanityConfigured =
  !!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID &&
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID !== "your_project_id_here";

let _client: SanityClient | null = null;

export function getClient(): SanityClient {
  if (!_client) {
    _client = createClient({
      projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
      dataset: process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production",
      apiVersion: "2024-01-01",
      useCdn: true,
    });
  }
  return _client;
}

// Backwards-compat named export used in queries
export const client = new Proxy({} as SanityClient, {
  get(_target, prop) {
    return (getClient() as unknown as Record<string | symbol, unknown>)[prop];
  },
});
