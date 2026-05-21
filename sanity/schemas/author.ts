import { defineField, defineType } from 'sanity'

// Skribent-schema — stöder opinionskribenter med avatarer
export const authorSchema = defineType({
  name: 'author',
  title: 'Skribent',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Namn',
      type: 'string',
      validation: (rule) => rule.required(),
    }),

    // Visningsnamn på kurdiska
    defineField({
      name: 'nameKurdi',
      title: 'Namn på kurdiska',
      type: 'string',
    }),

    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'name', maxLength: 96 },
    }),

    // Profilbild — visas som cirkulär avatar (som i opinion-sektionen)
    defineField({
      name: 'photo',
      title: 'Profilbild',
      type: 'image',
      options: { hotspot: true },
    }),

    // Initialer för avatar-fallback (t.ex. "GH" för Gabi Hinsliff)
    defineField({
      name: 'initials',
      title: 'Initialer (avatar-fallback)',
      type: 'string',
      description: 'Visas om ingen profilbild finns (t.ex. "GH")',
      validation: (rule) => rule.max(3),
    }),

    // Avatar-bakgrundsfärg
    defineField({
      name: 'avatarColor',
      title: 'Avatar-bakgrundsfärg',
      type: 'string',
      options: {
        list: [
          { title: 'Blå',    value: '#005689' },
          { title: 'Röd',    value: '#c70000' },
          { title: 'Mörkblå', value: '#041f4a' },
        ],
      },
      initialValue: '#005689',
    }),

    defineField({
      name: 'bio',
      title: 'Biografi',
      type: 'text',
      rows: 4,
    }),

    defineField({
      name: 'role',
      title: 'Roll',
      type: 'string',
      options: {
        list: [
          { title: 'Journalist',       value: 'journalist' },
          { title: 'Opinionsskribent', value: 'columnist' },
          { title: 'Fotograf',         value: 'photographer' },
          { title: 'Redaktör',         value: 'editor' },
        ],
      },
    }),
  ],

  preview: {
    select: {
      title:    'name',
      subtitle: 'role',
      media:    'photo',
    },
  },
})
