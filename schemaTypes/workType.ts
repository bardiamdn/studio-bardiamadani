import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'work',
  title: 'Work',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    // defineField({
    //   name: 'slug',
    //   type: 'slug',
    //   options: { source: 'title' },
    //   validation: (rule) => rule.required(),
    // }),
    defineField({
      name: "services",
      description: "Services used in this work",
      type: "array",
      // of: [{ type: "reference", to: [{ type: "service" }] }],
      of: [{ type: "string" }],
      validation: (rule) => rule.required(),
    })
  ],
})
