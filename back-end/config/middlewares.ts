export default [
  'strapi::errors',
  'strapi::security',
  'strapi::poweredBy',
  {
    name: 'strapi::cors',
    config: {
      enabled: true,
      origin: ['http://localhost:1337', 'http://localhost:3000'], // Remplacez par l'URL de votre front-end
      headers: [
        'Content-Type',
        'Authorization',
        'X-Frame-Options',
        'nom-de-l-en-tete-du-token',
      ],
    },
  },
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
