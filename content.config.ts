import {defineContentConfig, defineCollection} from '@nuxt/content'
import {z} from 'zod'

export default defineContentConfig({
  collections: {
    news: defineCollection({
      type: 'page',
      source: 'news/*.md',
      schema: z.object({
        date: z.string(),
        cover: z.string(),
        title: z.string(),
        description: z.string(),
      })
    }),
    weeklyLetter: defineCollection({
      type: 'page',
      source: 'weeklyLetter/*.json',
      schema: z.object({
        date: z.string(),
        cover: z.string(),
        images: z.array(z.string()),
      })
    })
  }
})
