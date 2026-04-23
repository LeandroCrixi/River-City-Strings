export default {
  name: 'lessonsPage',
  type: 'document',
  title: 'Lessons Page',
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

    // --- CONTAC BOX ---
    {
      name: 'contactBoxImage',
      type: 'image',
      title: 'Contact Box Image',
      options: {hotspot: true},
    },
  ],
}
