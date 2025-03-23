import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'servicespage',
  title: 'Services Page',
  type: 'document',
  fields: [
    defineField({
      name: 'heroTitle',
      title: 'Hero Title',
      type: 'object',
      description: 'The main headline shown at the top of the page, split into two lines.',
      fields: [
        defineField({
          name: 'line1',
          title: 'First Line',
          type: 'string',
          description: 'First part of the hero headline (e.g. "What I can")',
        }),
        defineField({
          name: 'line2',
          title: 'Second Line',
          type: 'string',
          description: 'Second part of the hero headline (e.g. "do for you")',
        }),
      ],
    }),
    defineField({
      name: 'heroDescription',
      title: 'Hero Description',
      type: 'text',
      description: 'Short paragraph beneath the hero title describing your services.',
    }),
    defineField({
      name: 'servicesGroup',
      title: 'Service Groups',
      type: 'array',
      description: 'Add multiple groups of services. Each group can contain one or more service blocks.',
      of: [
        defineField({
          name: 'serviceBlock',
          title: 'Service Block',
          type: 'object',
          description: 'A single service block shown on the page.',
          fields: [
            defineField({
              name: 'name',
              title: 'Name',
              type: 'string',
              description: 'Title of the service (e.g. "Design", "Development", etc.).',
            }),
            defineField({
              name: 'description',
              title: 'Description',
              type: 'text',
              description: 'A short explanation of what this service includes or why it matters.',
            }),
            defineField({
              name: 'mediaSrc',
              title: 'Media Source',
              type: 'string',
              description: 'Relative path to the media file used for this service (image or video). Example: "/media/design.jpg".',
            }),
            defineField({
              name: 'mediaAlt',
              title: 'Media Alt Text',
              type: 'text',
              description: 'Alternative text for the media. Used for accessibility and SEO.',
            }),
            defineField({
              name: 'isVideo',
              title: 'Is Video',
              type: 'boolean',
              description: 'Check this if the media source is a video file instead of an image.',
            }),
          ],

        }),
      ],
    }),
    defineField({
      name: 'processTitle',
      title: 'Process Section Title',
      type: 'string',
      description: 'Title for the "Process" section near the bottom of the page.',
    }),
    defineField({
      name: 'processDescription',
      title: 'Process Description',
      type: 'text',
      description: 'Short paragraph explaining your project lifecycle or approach.',
    }),
    defineField({
      name: 'processLinkLabel',
      title: 'Process Link Label',
      type: 'string',
      description: 'Text shown on the link/button to the About page (e.g. "The Process").',
    }),
    defineField({
      name: 'processLinkUrl',
      title: 'Process Link URL',
      type: 'string',
      description: 'Internal link to the About page section (e.g. "/about#process").',
    }),
  ],
})
