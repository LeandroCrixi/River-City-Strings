export default {
  name: 'chamberPage',
  type: 'document',
  title: 'Chamber Music Page',
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
      name: 'featuresTitle',
      type: 'text',
      title: 'Features Title',
      description: 'Simple welcome text for the homepage',
    },
    {
      name: 'features',
      type: 'array',
      title: 'Features',
      description: '',
      of: [
        {
          type: 'object',
          name: 'featureItem',
          title: 'Feature Item',
          fields: [{name: 'description', type: 'text', title: 'Short Description'}],
        },
      ],
    },

    // --- PRICE BOX ---

    {
      name: 'priceTitle',
      type: 'string',
      title: 'Price Title',
      initialValue: '',
    },
    {
      name: 'priceText',
      type: 'text',
      title: 'Price Text',
      description: '',
    },
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
            {name: 'priceMinutes', type: 'text', title: 'Price Minutes'},
            {name: 'price', type: 'text', title: 'Price'},
          ],
        },
      ],
    },
  ],
}
