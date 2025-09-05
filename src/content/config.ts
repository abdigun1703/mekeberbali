// 1. Import utilities from `astro:content`
import { z, defineCollection } from 'astro:content';


// 2. Define your collection(s)
const blogkuCollection = defineCollection({
  type: 'content',
  schema: z.object({
    draft: z.boolean(),
    title: z.string(),
    snippet: z.string(),
    image: z.object({
      src: z.string(),
      alt: z.string(),
    }),
    bigImg: z.object({
      src: z.string(),
      alt: z.string(),
    }),
    authorImg: z.object({
      src: z.string(),
      alt: z.string(),
    }),
    publishDate: z.string().transform((str) => new Date(str)),
    author: z.string().default('Mekeber Team'),
    comments: z.string(),
    views: z.string(),
    //category: z.string(),
    // Ubah dari category string ke categories array yang optional
    categories: z.array(z.string()).optional().default([]),
    tags: z.array(z.string()),
    postDetails: z.object({
      paraOne: z.string(),
      paraTwo: z.string(),
      title: z.string(),
      paraThree: z.string(),
      titleTwo: z.string(),
      paraFour: z.string(),
      paraFive: z.string(),
    }).optional(),
    quotes: z.object({
      quote: z.string(),
      author: z.string(),
    }).optional(),
    featured: z.boolean().default(false),
    // --- Tambahkan ini untuk properti headings ---
    headings: z.array(z.object({
      depth: z.number(),
      slug: z.string(),
      text: z.string(),
    })).default([]), // Memberikan nilai default array kosong jika tidak ada heading
  }),
});

// Tambahkan koleksi baru di bawah
const clinicCollection = defineCollection({ /* schema clinic */ });

const jobCollection = defineCollection({
  type: 'content',
  schema: z.object({
    draft: z.boolean(),
    title: z.string(),
    excerpt: z.string(),
    snippet: z.string().optional(),
    image: z.object({
      src: z.string(),
      alt: z.string(),
    }).optional(),
    publishDate: z.string().transform((str) => new Date(str)),
    categories: z.array(z.string()).optional().default([]),
  }),
 });


// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
  'blog': blogkuCollection,
  'clinics': clinicCollection, 
  'jobs': jobCollection,      
};
