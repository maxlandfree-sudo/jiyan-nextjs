import { defineField, defineType } from 'sanity'

// Utgåva-schema — representerar en tidsperiod (dag/vecka) av tidskriften
export const issueSchema = defineType({
  name: 'issue',
  title: 'Utgåva',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Titel',
      type: 'string',
      description: 'T.ex. "Utgåva 1 — maj 2026"',
      validation: (rule) => rule.required(),
    }),

    defineField({
      name: 'date',
      title: 'Datum',
      type: 'date',
      validation: (rule) => rule.required(),
    }),

    // Omslagsbild för utgåvan
    defineField({
      name: 'coverImage',
      title: 'Omslagsbild',
      type: 'image',
      options: { hotspot: true },
    }),

    // Ledarartikel (featured hero)
    defineField({
      name: 'featuredArticle',
      title: 'Ledarartikel',
      type: 'reference',
      to: [{ type: 'article' }],
    }),

    // Breaking news-banner
    defineField({
      name: 'breakingNews',
      title: 'Breaking news-text',
      type: 'object',
      fields: [
        { name: 'ckb', title: 'کوردی', type: 'string' },
        { name: 'fa',  title: 'فارسی', type: 'string' },
        { name: 'en',  title: 'English', type: 'string' },
      ],
    }),

    defineField({
      name: 'isActive',
      title: 'Aktiv utgåva',
      type: 'boolean',
      description: 'Bara en utgåva kan vara aktiv åt gången',
      initialValue: false,
    }),
  ],

  preview: {
    select: {
      title: 'title',
      date:  'date',
      media: 'coverImage',
    },
    prepare(selection) {
      return {
        title:    selection.title,
        subtitle: selection.date,
        media:    selection.media,
      }
    },
  },
})
