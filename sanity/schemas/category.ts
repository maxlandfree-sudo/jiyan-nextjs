import { defineField, defineType } from 'sanity'

// Kategori-schema — speglar navigationslänkarna i index.html
// Kategorier: هەواڵ (Nyheter), ئەوروپا (Europa), کوردستان, ئۆکراینا, osv.
export const categorySchema = defineType({
  name: 'category',
  title: 'Kategori',
  type: 'document',
  fields: [
    // Kategorinamn på alla tre språk
    defineField({
      name: 'title',
      title: 'Titel',
      type: 'object',
      fields: [
        { name: 'ckb', title: 'کوردی سۆرانی', type: 'string' },
        { name: 'fa',  title: 'فارسی',        type: 'string' },
        { name: 'en',  title: 'English',       type: 'string' },
      ],
      validation: (rule) => rule.required(),
    }),

    defineField({
      name: 'slug',
      title: 'Slug (URL)',
      type: 'slug',
      options: { source: 'title.en', maxLength: 96 },
      validation: (rule) => rule.required(),
    }),

    // Beskrivning
    defineField({
      name: 'description',
      title: 'Beskrivning',
      type: 'text',
      rows: 2,
    }),

    // Kategori-färg — används i sektionshuvudet
    defineField({
      name: 'color',
      title: 'Accentfärg',
      type: 'string',
      options: {
        list: [
          { title: 'Blå (standard)', value: 'blue' },
          { title: 'Röd (breaking)', value: 'red' },
          { title: 'Mörkblå',        value: 'navy' },
          { title: 'Grön (miljö)',   value: 'green' },
        ],
      },
      initialValue: 'blue',
    }),

    // Ordning i huvudnavigationen
    defineField({
      name: 'navOrder',
      title: 'Ordning i navigation',
      type: 'number',
      description: 'Lägre nummer = visas först i navigationen',
    }),

    // Underkategorier (t.ex. EU, Frankrike, Tyskland under Europa)
    defineField({
      name: 'subcategories',
      title: 'Underkategorier',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'ckb', title: 'کوردی', type: 'string' },
            { name: 'fa',  title: 'فارسی', type: 'string' },
            { name: 'en',  title: 'English', type: 'string' },
            { name: 'slug', title: 'Slug', type: 'string' },
          ],
          preview: {
            select: { title: 'en' },
          },
        },
      ],
    }),
  ],

  preview: {
    select: {
      titleCkb: 'title.ckb',
      titleEn:  'title.en',
    },
    prepare(selection) {
      return {
        title: `${selection.titleCkb || ''} / ${selection.titleEn || ''}`,
      }
    },
  },
})
