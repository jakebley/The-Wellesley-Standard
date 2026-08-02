import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Image fields are plain URL strings (remote stock photography for MVP)
// rather than local files, so real photography can swap in later without
// a schema change — see Checkpoint 2 in the master plan.
const houseOfTheWeek = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/house-of-the-week' }),
  schema: z.object({
    title: z.string(),
    hook: z.string(),
    heroImage: z.string().url(),
    heroAlt: z.string(),
    gallery: z
      .array(z.object({ image: z.string().url(), alt: z.string() }))
      .min(0)
      .max(8)
      .default([]),
    neighborhood: z.string().optional(),
    yearBuilt: z.string().optional(),
    style: z.string().optional(),
    sponsor: z.string().optional(),
    publishDate: z.coerce.date(),
  }),
});

const streetsOfWellesley = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/streets-of-wellesley' }),
  schema: z.object({
    title: z.string(),
    neighborhood: z.string(),
    photos: z.array(z.object({ image: z.string().url(), alt: z.string() })).min(1),
    publishDate: z.coerce.date(),
  }),
});

const livingHere = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/living-here' }),
  schema: z.object({
    title: z.string(),
    dek: z.string(),
    heroImage: z.string().url().optional(),
    heroAlt: z.string().optional(),
    publishDate: z.coerce.date(),
  }),
});

const events = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/events' }),
  schema: z.object({
    title: z.string(),
    startDate: z.coerce.date(),
    endDate: z.coerce.date().optional(),
    location: z.string(),
    description: z.string(),
    sourceUrl: z.string().url().optional(),
    sourceName: z.string().optional(),
  }),
});

export const collections = {
  'house-of-the-week': houseOfTheWeek,
  'streets-of-wellesley': streetsOfWellesley,
  'living-here': livingHere,
  events,
};
