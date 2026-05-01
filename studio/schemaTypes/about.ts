export default {
  name: 'aboutPage',
  type: 'document',
  title: 'About Page',
  fields: [
    // --- HERO SECTION ---
    {
      name: 'heroTitle',
      type: 'string',
      title: 'Hero Title',
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
      name: 'welcomeImage',
      type: 'image',
      title: 'Welcome Image',
      options: {hotspot: true},
    },
    {
      name: 'welcomeText',
      type: 'text',
      title: 'Welcome Text',
      description: 'Simple welcome text for the homepage',
    },
    {
      name: 'welcomeText2',
      type: 'text',
      title: 'Welcome Text 2',
      description: 'Simple welcome text for the homepage',
    },
    {
      name: 'welcomeImage2',
      type: 'image',
      title: 'Welcome Image 2',
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

    // --- Students Thrive ---
    {
      name: 'thriveTitle',
      type: 'text',
      title: 'Thrive Title',
      initialValeu: 'Students Thrive at River City Strings',
    },
    {
      name: 'thriveText',
      type: 'text',
      title: 'Thrive Text',
      initialValue: '',
    },
    {
      name: 'thriveImage',
      type: 'image',
      title: 'Thrive Image',
      options: {hotspot: true},
    },
    {
      name: 'thriveFeatures',
      type: 'array',
      title: 'Thrive Features',
      description: '',
      of: [
        {
          type: 'object',
          name: 'featureItem',
          title: 'Feature Item',
          fields: [
            {name: 'featureImage', type: 'image', title: 'Feature Image', options: {hotspot: true}},
            {name: 'title', type: 'string', title: 'Feature Title'},
            {name: 'description', type: 'text', title: 'Short Description'},
          ],
        },
      ],
    },
  ],
}
