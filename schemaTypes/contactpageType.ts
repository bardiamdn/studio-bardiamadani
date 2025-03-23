import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'contactpage',
  title: 'Contact Page',
  type: 'document',
  fields: [
    defineField({
      name: 'heroSection',
      title: 'Hero Section',
      type: 'object',
      fields: [
        defineField({
          name: 'headlineTop',
          title: 'Headline Top',
          type: 'string',
          description: 'Text for the top half of the hero headline',
        }),
        defineField({
          name: 'headlineBottom',
          title: 'Headline Bottom',
          type: 'string',
          description: 'Text for the bottom half of the hero headline',
        }),
        defineField({
          name: 'description',
          title: 'Description',
          type: 'string',
          description: 'Text for the description of the hero section.',
        }),
      ],
    }),
  ],
});
