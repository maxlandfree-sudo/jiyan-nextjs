import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'

// Importera alla schemas
import { articleSchema } from './sanity/schemas/article'
import { authorSchema } from './sanity/schemas/author'
import { categorySchema } from './sanity/schemas/category'
import { issueSchema } from './sanity/schemas/issue'
import { siteSettingsSchema } from './sanity/schemas/siteSettings'

// Jiyan-tidskriftens Sanity v3-konfiguration
export default defineConfig({
  name: 'jiyan',
  title: 'Jiyan ژیان — Redaktionssystem',

  // Ersätt med ditt faktiska Sanity-projekt-ID
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'din-projekt-id',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Jiyan ژیان')
          .items([
            S.listItem()
              .title('Artiklar')
              .child(S.documentTypeList('article')),
            S.listItem()
              .title('Skribenter')
              .child(S.documentTypeList('author')),
            S.listItem()
              .title('Kategorier')
              .child(S.documentTypeList('category')),
            S.listItem()
              .title('Utgåvor')
              .child(S.documentTypeList('issue')),
            S.listItem()
              .title('Webbplatsinställningar')
              .child(S.document().schemaType('siteSettings').documentId('siteSettings')),
          ]),
    }),
    visionTool(),
  ],

  schema: {
    types: [
      articleSchema,
      authorSchema,
      categorySchema,
      issueSchema,
      siteSettingsSchema,
    ],
  },
})
