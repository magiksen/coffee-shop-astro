import { z } from 'astro:content'

const imageSchema = z.object({
    url: z.string(),
    width: z.number(),
    height: z.number(),
})

const featuredImageSchema = z.object({
  thumbnail: imageSchema,
  medium: imageSchema,
  medium_large: imageSchema,
  large: imageSchema,
  full: imageSchema,
})

export const BaseWPSchema = z.object({
    id: z.number(),
    title: z.object({
        rendered: z.string(),
    }),
    content: z.object({
        rendered: z.string(),
    }),
    featured_images: featuredImageSchema,
    acf: z.object({
        subtitle: z.string(),
    })
})
