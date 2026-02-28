import { defineCollection, z } from 'astro:content';

const daily = defineCollection({
  type: 'content',
  schema: z.object({
    date: z.string(),
    weekday: z.string().optional(),
    tier1: z.number().optional(),
    tier2: z.number().optional(),
    tier3: z.number().optional(),
  }),
});

const weekly = defineCollection({
  type: 'content',
  schema: z.object({
    week: z.string(),
    dateRange: z.string().optional(),
  }),
});

export const collections = { daily, weekly };
