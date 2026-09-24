import z from 'zod';

export const FeaturedWorkSchema = z.object({
  title: z.string(),
  description: z.string(),
  image: z.string(),
  alt: z.string(),
});

export const FeaturedWorkListSchema = z.array(FeaturedWorkSchema);

export type FeaturedWork = z.infer<typeof FeaturedWorkSchema>;
