import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'aboutpage',
  title: 'About Page',
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
          description: 'Text for the top half of the hero headline (e.g. "Design, Development").',
        }),
        defineField({
          name: 'headlineBottom',
          title: 'Headline Bottom',
          type: 'string',
          description: 'Text for the bottom half of the hero headline (e.g. "Interaction & Motion").',
        }),
      ],
    }),
    defineField({
      name: 'introSection',
      title: 'Introduction Section',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Title',
          type: 'string',
          description: 'The title for the intro section (e.g. "Creative Developer").',
        }),
        defineField({
          name: 'description',
          title: 'Description',
          type: 'text',
          description: 'The introduction text describing your passion and approach.',
        }),
      ],
    }),
    defineField({
      name: 'processSection',
      title: 'Process Section',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Title',
          type: 'string',
          description: 'Section title (e.g. "The Process").',
        }),
        defineField({
          name: 'description',
          title: 'Description',
          type: 'text',
          description:
            'A description for the process section (e.g. "Here’s how I will bring your vision to life with a seamless, end-to-end solution tailored to your needs.").',
        }),
        defineField({
          name: 'steps',
          title: 'Process Steps',
          type: 'array',
          of: [
            {
              type: 'object',
              name: 'step',
              title: 'Step',
              fields: [
                defineField({
                  name: 'stepNumber',
                  title: 'Step Number',
                  type: 'string',
                  description: 'The order of the step (e.g. "01", "02", etc.).',
                }),
                defineField({
                  name: 'title',
                  title: 'Step Title',
                  type: 'string',
                  description: 'The title of the step (e.g. "Discover", "Define").',
                }),
                defineField({
                  name: 'description',
                  title: 'Step Description',
                  type: 'text',
                  description:
                    'A detailed description for the step (e.g. for "Discover": "We start with a quick online consultation to understand your goals, challenges, and expectations.").',
                }),
              ],
            },
          ],
        }),
      ],
    }),
  ],
});
