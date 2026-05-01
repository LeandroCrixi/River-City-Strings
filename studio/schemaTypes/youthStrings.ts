export default {
  name: 'youthStringsPage',
  type: 'document',
  title: 'Youth Strings Page',
  fields: [
    // --- HERO SECTION ---
    {
      name: 'heroTitle',
      type: 'string',
      title: 'Hero Title',
      description: 'The main heading (e.g., "Inspiring Musicians.")',
    },
    {
      name: 'heroSubtitle',
      type: 'text',
      title: 'Hero Subtitle',
      description: 'The main heading (e.g., "Inspiring Musicians.")',
    },

    // --- WELCOME SECTION ---
    {
      name: 'welcomeTitle',
      type: 'text',
      title: 'Welcome Title',
      initialValue: 'Welcome To River City Strings',
    },
    {
      name: 'welcomeText',
      type: 'text',
      title: 'Welcome Text',
      description: 'Simple welcome text for the homepage',
    },
    {
      name: 'welcomeImage',
      type: 'image',
      title: 'Welcome Image',
      options: {hotspot: true},
    },

    // --- PRICE BOX ---
    {
      name: 'featuresPrice',
      type: 'array',
      title: 'Features Price',
      description: '',
      of: [
        {
          type: 'object',
          name: 'item',
          title: 'Item',
          fields: [
            {name: 'serviceImage', type: 'image', title: 'Service Image', options: {hotspot: true}},
            {name: 'title', type: 'string', title: 'Service Title'},
            {name: 'description', type: 'text', title: 'Short Description'},
          ],
        },
      ],
    },
    {
      name: 'tuitionPrice',
      type: 'number',
      title: 'Tuition Price',
    },
  ],
}
