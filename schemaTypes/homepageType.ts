import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'homepage',
  title: 'Home Page',
  type: 'document',
  fields: [
    defineField({
      name: 'tagline',
      title: 'Tagline',
      type: 'string',
      description: 'A short, punchy phrase that summarizes my site.',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'supportingText',
      title: 'Supporting Text',
      type: 'text',
      description:
        'Additional text that expands on my tagline, providing more context or value to visitors.',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'cta',
      title: 'Primary Call-to-Action',
      type: 'string',
      description:
        'The main call-to-action text that encourages visitors to take a key action on my homepage.',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'intro',
      title: 'Introduction',
      type: 'text',
      description:
        'A brief introduction that welcomes visitors and explains about my services.',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'services',
      title: 'Services',
      type: 'array',
      description:
        'A list of services that I offer on my site.',
      of: [{ type: 'service' }],
    }),
    defineField({
      name: 'works',
      title: 'Works',
      type: 'array',
      description:
        'A collection of featured projects or works (referenced from the "work" document) that showcase my portfolio.',
      of: [{ type: 'work' }],
    }),
    defineField({
      name: 'footerCTATextTop',
      title: 'Footer CTA Text Top',
      type: 'string',
      description:
        'Top part of the persuasive text displayed in the footer that invites visitors to take further action.',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'footerCTATextBottom',
      title: 'Footer CTA Text Bottom',
      type: 'string',
      description:
        'Bottom of the persuasive text displayed in the footer that invites visitors to take further action.',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'footerCTAButton',
      title: 'Footer CTA Button Label',
      type: 'string',
      description:
        'The label for the call-to-action button in the footer, guiding visitors to the next step.',
      validation: (rule) => rule.required(),
    }),
  ],
})
