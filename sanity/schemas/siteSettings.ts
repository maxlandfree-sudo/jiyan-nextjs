import { defineField, defineType } from 'sanity'

// Webbplatsinställningar — singleton-dokument för globala inställningar
export const siteSettingsSchema = defineType({
  name: 'siteSettings',
  title: 'Webbplatsinställningar',
  type: 'document',
  fields: [
    defineField({
      name: 'siteName',
      title: 'Webbplatsnamn',
      type: 'object',
      fields: [
        { name: 'ckb', title: 'کوردی', type: 'string', initialValue: 'ژیان' },
        { name: 'fa',  title: 'فارسی', type: 'string', initialValue: 'ژیان' },
        { name: 'en',  title: 'English', type: 'string', initialValue: 'Jiyan' },
      ],
    }),

    // Väderstäder i sidebaren
    defineField({
      name: 'weatherCities',
      title: 'Väderstäder',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'name',     title: 'Stadsnamn (kurdiska)', type: 'string' },
            { name: 'nameEn',   title: 'Stadsnamn (engelska)', type: 'string' },
            { name: 'country',  title: 'Land',                  type: 'string' },
          ],
        },
      ],
      initialValue: [
        { name: 'پاریس',  nameEn: 'Paris',  country: 'FR' },
        { name: 'بەرلین', nameEn: 'Berlin', country: 'DE' },
        { name: 'مادرید', nameEn: 'Madrid', country: 'ES' },
        { name: 'ڕۆم',   nameEn: 'Rome',   country: 'IT' },
      ],
    }),

    // Nyhetsbrev-widget
    defineField({
      name: 'newsletter',
      title: 'Nyhetsbrev',
      type: 'object',
      fields: [
        { name: 'title', title: 'Titel', type: 'string', initialValue: 'ئەمە ئەوروپایە' },
        { name: 'description', title: 'Beskrivning', type: 'text' },
        { name: 'mailchimpUrl', title: 'Mailchimp URL', type: 'url' },
      ],
    }),
  ],
})
