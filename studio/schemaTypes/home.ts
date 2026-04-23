export default {
  name: 'homePage',
  type: 'document',
  title: 'Home Page',
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
      type: 'string',
      title: 'Hero Subtitle',
      description: 'The smaller text under the title.',
    },
    {
      name: 'heroDescription', // The unique ID for the field
      type: 'text',
      title: 'Hero Description',
      description: 'Additional descriptive text for the hero section.',
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

    // --- MEET THE FOUNDER ---
    {
      name: 'founderName',
      type: 'string',
      title: 'Founder Name',
      initialValue: 'Teresa Bellamy',
    },
    {
      name: 'founderBio',
      type: 'array',
      title: 'Founder Bio',
      of: [{type: 'block'}],
    },
    {
      name: 'founderImage',
      type: 'image',
      title: 'Founder Photo',
      options: {hotspot: true},
    },

    // --- SERVICES SECTION ---
    {
      name: 'services',
      type: 'array',
      title: 'Our Programs & Services',
      description:
        'Add the 4 services shown in the design (Lessons, Chamber Music, Youth Strings, Event Musicians)',
      of: [
        {
          type: 'object',
          name: 'serviceItem',
          title: 'Service Item',
          fields: [
            {name: 'title', type: 'string', title: 'Service Title'},
            {name: 'description', type: 'text', title: 'Short Description'},
            {name: 'serviceImage', type: 'image', title: 'Service Image', options: {hotspot: true}},
            {name: 'bubbleText', type: 'string', title: 'Bubble Text'},
            {
              name: 'buttonText',
              type: 'string',
              title: 'Button Label',
              initialValue: 'Learn More',
            },
            {
              name: 'link',
              type: 'string',
              title: 'Page Link',
              description: 'e.g., /lessons or /events',
            },
          ],
        },
      ],
    },

    // --- CONTAC BOX ---
    {
      name: 'contactBoxImage',
      type: 'image',
      title: 'Contact Box Image',
      options: {hotspot: true},
    },

    // --- GALLERY ---
    {
      name: 'homeGallery',
      type: 'array',
      title: 'Home Gallery Images',
      of: [{type: 'image'}],
      options: {layout: 'grid'},
    },

    // --- FOOTER / CONTACT INFO ---
    {
      name: 'contactEmail',
      type: 'string',
      title: 'Contact Email',
      initialValue: 'RIVERCITYYS@GMAIL.COM',
    },
    {
      name: 'contactPhone',
      type: 'string',
      title: 'Contact Phone',
      initialValue: '616-822-6252',
    },

    // --- PRICE SECTION ---
    {
      name: 'price60',
      type: 'number',
      title: 'Hourly Lesson Rate ($)',
      initialValue: 60,
    },
    {
      name: 'price45',
      type: 'number',
      title: '45-Minute Lesson Rate ($)',
      initialValue: 45,
    },
    {
      name: 'price30',
      type: 'number',
      title: '30-Minute Lesson Rate ($)',
      initialValue: 30,
    },
    // --- Accepting New Students ---
    {
      name: 'isAcceptingStudents',
      type: 'boolean',
      title: 'Currently Accepting New Students?',
      initialValue: true,
    },
  ],
}
