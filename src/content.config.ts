/* ------------------------------------------------------------------ */
/* CHARCOAL HUB — Knowledge content collection.                        */
/* Buyer-education cornerstone articles (NOT a blog / not a feed).     */
/* Every entry carries provenance fields so scripts/check-data.mjs     */
/* can gate on source and verification status.                         */
/* ------------------------------------------------------------------ */
import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const knowledge = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/knowledge' }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    description: z.string(),
    intent: z.enum(['buying', 'sourcing', 'quality']),
    last_updated: z.string(),
    sources: z
      .array(
        z.object({
          name: z.string(),
          url: z.string(),
          type: z.string(),
          date: z.string().optional(),
        })
      )
      .default([]),
    uncertainty: z.string().optional(),
    /* provenance / data-gate fields (consumed by scripts/check-data.mjs) */
    data_source: z.string().optional(),
    verification_status: z.string().optional(),
    last_verified: z.string().optional(),
    order: z.number().optional(),
  }),
});

export const collections = { knowledge };
