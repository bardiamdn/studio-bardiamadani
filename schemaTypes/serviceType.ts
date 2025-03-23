import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'service',
  title: 'Service',
  type: 'object',
  fields: [
    defineField({
      name: 'name', // can be used as "serviceName" on the homepage, "title" on the services page
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'mediaSrc', // you can store the media path or URL here (e.g. "/videos/design.mp4" or "/laptop-design.jpg")
      title: 'MediaSrc',
      type: 'string',
    }),
    defineField({
      name: 'altText',
      title: 'Alt Text',
      type: 'string',
    }),
    defineField({
      name: 'isVideo',
      title: 'Is Video?',
      type: 'boolean',
    }),
  ],
})
