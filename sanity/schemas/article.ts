import { defineField, defineType } from 'sanity'

// Artikel-schema för Jiyan — stöder kurdiska, farsi och engelska
export const articleSchema = defineType({
  name: 'article',
  title: 'Artikel',
  type: 'document',
  fields: [
    // Rubrik på alla tre språk
    defineField({
      name: 'headline',
      title: 'Rubrik',
      type: 'object',
      fields: [
        { name: 'ckb', title: 'کوردی سۆرانی', type: 'string' },
        { name: 'fa',  title: 'فارسی',        type: 'string' },
        { name: 'en',  title: 'English',       type: 'string' },
      ],
      validation: (rule) => rule.required(),
    }),

    // Ingress / standfirst
    defineField({
      name: 'standfirst',
      title: 'Ingress',
      type: 'object',
      fields: [
        { name: 'ckb', title: 'کوردی سۆرانی', type: 'text', rows: 3 },
        { name: 'fa',  title: 'فارسی',        type: 'text', rows: 3 },
        { name: 'en',  title: 'English',       type: 'text', rows: 3 },
      ],
    }),

    // Slug — används i URL:en
    defineField({
      name: 'slug',
      title: 'Slug (URL)',
      type: 'slug',
      options: {
        source: 'headline.en',
        maxLength: 96,
      },
      validation: (rule) => rule.required(),
    }),

    // Kicker / etikett (t.ex. "کوردستان", "ئەوروپا")
    defineField({
      name: 'kicker',
      title: 'Kicker / etikett',
      type: 'object',
      fields: [
        { name: 'ckb', title: 'کوردی', type: 'string' },
        { name: 'fa',  title: 'فارسی', type: 'string' },
        { name: 'en',  title: 'English', type: 'string' },
      ],
    }),

    // Kickerfärg — matchar designsystemet
    defineField({
      name: 'kickerColor',
      title: 'Kickerfärg',
      type: 'string',
      options: {
        list: [
          { title: 'Blå (standard)', value: 'blue' },
          { title: 'Röd (breaking)', value: 'red' },
          { title: 'Mörkblå',        value: 'navy' },
        ],
      },
      initialValue: 'blue',
    }),

    // Omslagsbild
    defineField({
      name: 'coverImage',
      title: 'Omslagsbild',
      type: 'image',
      options: { hotspot: true },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternativtext',
        },
      ],
    }),

    // Brödtext (Portable Text) — stöder RTL
    defineField({
      name: 'body',
      title: 'Brödtext',
      type: 'object',
      fields: [
        {
          name: 'ckb',
          title: 'کوردی سۆرانی',
          type: 'array',
          of: [
            { type: 'block' },
            { type: 'image', options: { hotspot: true } },
          ],
        },
        {
          name: 'fa',
          title: 'فارسی',
          type: 'array',
          of: [
            { type: 'block' },
            { type: 'image', options: { hotspot: true } },
          ],
        },
        {
          name: 'en',
          title: 'English',
          type: 'array',
          of: [
            { type: 'block' },
            { type: 'image', options: { hotspot: true } },
          ],
        },
      ],
    }),

    // Skribent
    defineField({
      name: 'author',
      title: 'Skribent',
      type: 'reference',
      to: [{ type: 'author' }],
    }),

    // Kategori
    defineField({
      name: 'category',
      title: 'Kategori',
      type: 'reference',
      to: [{ type: 'category' }],
    }),

    // Taggar
    defineField({
      name: 'tags',
      title: 'Taggar',
      type: 'array',
      of: [{ type: 'string' }],
      options: { layout: 'tags' },
    }),

    // Artikeltyp
    defineField({
      name: 'articleType',
      title: 'Artikeltyp',
      type: 'string',
      options: {
        list: [
          { title: 'Nyhet',         value: 'news' },
          { title: 'Opinion',       value: 'opinion' },
          { title: 'Analys',        value: 'analysis' },
          { title: 'Kultur',        value: 'culture' },
          { title: 'Sport',         value: 'sport' },
          { title: 'Breaking News', value: 'breaking' },
        ],
      },
      initialValue: 'news',
    }),

    // Publiceringsdatum
    defineField({
      name: 'publishedAt',
      title: 'Publiceringsdatum',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    }),

    // Utgåva som artikeln tillhör
    defineField({
      name: 'issue',
      title: 'Utgåva',
      type: 'reference',
      to: [{ type: 'issue' }],
    }),

    // Premiuminnehåll (bakom betalvägg)
    defineField({
      name: 'isPremium',
      title: 'Premiuminnehåll',
      type: 'boolean',
      initialValue: false,
    }),

    // Ingress / sammandrag (max 200 tecken) — för kort-visningar
    defineField({
      name: 'excerpt',
      title: 'Sammandrag (max 200 tecken)',
      type: 'text',
      rows: 3,
      validation: (rule) => rule.max(200),
    }),

    // Utvalj för startsidans hero
    defineField({
      name: 'featured',
      title: 'Utvald (startsidans hero)',
      type: 'boolean',
      initialValue: false,
      description: 'Markera för att visa artikeln i hero-sektionen på startsidan',
    }),

    // Språkversion — möjliggör filtrering per locale
    defineField({
      name: 'locale',
      title: 'Språkversion',
      type: 'string',
      options: {
        list: [
          { title: 'کوردی سۆرانی', value: 'ckb' },
          { title: 'فارسی',        value: 'fa'  },
          { title: 'کورمانجی',     value: 'kmr' },
          { title: 'English',      value: 'en'  },
        ],
        layout: 'radio',
      },
      initialValue: 'ckb',
    }),

    // SEO-metadata
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'object',
      fields: [
        { name: 'metaTitle',       type: 'string', title: 'Meta-titel' },
        { name: 'metaDescription', type: 'text',   title: 'Meta-beskrivning', rows: 3 },
      ],
    }),
  ],

  preview: {
    select: {
      title:    'headline.ckb',
      subtitle: 'author.name',
      media:    'coverImage',
    },
    prepare(selection) {
      return {
        title:    selection.title || 'Namnlös artikel',
        subtitle: selection.subtitle ? `Skribent: ${selection.subtitle}` : '',
        media:    selection.media,
      }
    },
  },

  orderings: [
    {
      title: 'Publiceringsdatum, nyast först',
      name: 'publishedAtDesc',
      by: [{ field: 'publishedAt', direction: 'desc' }],
    },
  ],
})
